"use strict";
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("./index");
var jasmine_util_1 = require("./jasmine_util");
jasmine_util_1.describeWithFlags('kernel_registry', jasmine_util_1.ALL_ENVS, function () {
    it('register a kernel and call it', function () {
        var called = false;
        tf.registerKernel({
            kernelName: 'MyKernel',
            backendName: tf.getBackend(),
            kernelFunc: function (_a) {
                var inputs = _a.inputs, attrs = _a.attrs;
                expect(attrs.a).toBe(5);
                expect(inputs.x.shape).toEqual([2, 2]);
                expect(inputs.x.dtype).toBe('float32');
                called = true;
                return { dtype: 'float32', shape: [3, 3], dataId: {} };
            }
        });
        var inputs = { x: tf.zeros([2, 2]) };
        var attrs = { a: 5 };
        var res = tf.engine().runKernel('MyKernel', inputs, attrs);
        expect(called).toBe(true);
        expect(res.dtype).toBe('float32');
        expect(res.shape).toEqual([3, 3]);
        tf.unregisterKernel('MyKernel', tf.getBackend());
    });
    it('errors when running non-existent kernel', function () {
        var inputs = {};
        var attrs = {};
        expect(function () { return tf.engine().runKernel('DoesNotExist', inputs, attrs); })
            .toThrowError();
    });
    it('errors when registering the same kernel twice', function () {
        tf.registerKernel({
            kernelName: 'MyKernel',
            backendName: tf.getBackend(),
            kernelFunc: function () {
                return null;
            }
        });
        expect(function () { return tf.registerKernel({
            kernelName: 'MyKernel',
            backendName: tf.getBackend(),
            kernelFunc: function () {
                return null;
            }
        }); }).toThrowError();
        tf.unregisterKernel('MyKernel', tf.getBackend());
    });
    it('register same kernel on two different backends', function () {
        tf.registerBackend('backend1', function () {
            return {
                id: 1,
                dispose: function () { return null; },
                disposeData: function (dataId) { return null; },
                numDataIds: function () { return 0; }
            };
        });
        tf.registerBackend('backend2', function () {
            return {
                id: 2,
                dispose: function () { return null; },
                disposeData: function (dataId) { return null; },
                numDataIds: function () { return 0; }
            };
        });
        var lastStorageId = -1;
        var kernelFunc = function (_a) {
            var backend = _a.backend;
            lastStorageId = backend.id;
            return { dataId: {}, shape: [], dtype: 'float32' };
        };
        tf.registerKernel({ kernelName: 'MyKernel', backendName: 'backend1', kernelFunc: kernelFunc });
        tf.registerKernel({ kernelName: 'MyKernel', backendName: 'backend2', kernelFunc: kernelFunc });
        // No kernel has been executed yet.
        expect(lastStorageId).toBe(-1);
        // Kernel was executed on the first backend.
        tf.setBackend('backend1');
        tf.engine().runKernel('MyKernel', {}, {});
        expect(lastStorageId).toBe(1);
        // Kernel was executed on the second backend.
        tf.setBackend('backend2');
        tf.engine().runKernel('MyKernel', {}, {});
        expect(lastStorageId).toBe(2);
        tf.removeBackend('backend1');
        tf.removeBackend('backend2');
        tf.unregisterKernel('MyKernel', 'backend1');
        tf.unregisterKernel('MyKernel', 'backend2');
    });
    it('register kernel with setup and dispose functions', function () {
        var backendName = 'custom-backend';
        var kernelName = 'MyKernel';
        var customBackend = {
            dispose: function () { return null; },
            disposeData: function (dataId) { return null; },
            numDataIds: function () { return 0; }
        };
        tf.registerBackend(backendName, function () { return customBackend; });
        var kernelFunc = function () {
            return { dataId: {}, shape: [], dtype: 'float32' };
        };
        var setupCalled = false;
        var setupFunc = function (backend) {
            expect(backend).toBe(customBackend);
            setupCalled = true;
        };
        var disposeCalled = false;
        var disposeFunc = function (backend) {
            expect(backend).toBe(customBackend);
            disposeCalled = true;
        };
        tf.registerKernel({ kernelName: kernelName, backendName: backendName, kernelFunc: kernelFunc, setupFunc: setupFunc, disposeFunc: disposeFunc });
        expect(setupCalled).toBe(false);
        expect(disposeCalled).toBe(false);
        tf.setBackend(backendName);
        expect(setupCalled).toBe(true);
        expect(disposeCalled).toBe(false);
        // Kernel was executed on the first backend.
        tf.engine().runKernel(kernelName, {}, {});
        tf.removeBackend(backendName);
        expect(setupCalled).toBe(true);
        expect(disposeCalled).toBe(true);
        tf.unregisterKernel(kernelName, backendName);
    });
});
//# sourceMappingURL=kernel_registry_test.js.map