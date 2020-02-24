"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfconv = require("@tensorflow/tfjs-converter");
var tf = require("@tensorflow/tfjs-core");
var jasmine_util_1 = require("@tensorflow/tfjs-core/dist/jasmine_util");
var mobilenet = require("./mobilenet");
var posenetModel = require("./posenet_model");
var resnet = require("./resnet");
jasmine_util_1.describeWithFlags('PoseNet', jasmine_util_1.NODE_ENVS, function () {
    var mobileNet;
    var resNet;
    var inputResolution = 513;
    var outputStride = 32;
    var multiplier = 1.0;
    var quantBytes = 4;
    var outputResolution = (inputResolution - 1) / outputStride + 1;
    var numKeypoints = 17;
    beforeAll(function (done) {
        var resNetConfig = {
            architecture: 'ResNet50',
            outputStride: outputStride,
            inputResolution: inputResolution,
            quantBytes: quantBytes
        };
        var mobileNetConfig = {
            architecture: 'MobileNetV1',
            outputStride: outputStride,
            inputResolution: inputResolution,
            multiplier: multiplier,
            quantBytes: quantBytes
        };
        spyOn(tfconv, 'loadGraphModel').and.callFake(function () {
            return null;
        });
        spyOn(resnet, 'ResNet').and.callFake(function () {
            return {
                outputStride: outputStride,
                predict: function (input) {
                    return {
                        inputResolution: inputResolution,
                        heatmapScores: tf.zeros([outputResolution, outputResolution, numKeypoints]),
                        offsets: tf.zeros([outputResolution, outputResolution, 2 * numKeypoints]),
                        displacementFwd: tf.zeros([outputResolution, outputResolution, 2 * (numKeypoints - 1)]),
                        displacementBwd: tf.zeros([outputResolution, outputResolution, 2 * (numKeypoints - 1)])
                    };
                },
                dipose: function () { }
            };
        });
        spyOn(mobilenet, 'MobileNet').and.callFake(function () {
            return {
                outputStride: outputStride,
                predict: function (input) {
                    return {
                        inputResolution: inputResolution,
                        heatmapScores: tf.zeros([outputResolution, outputResolution, numKeypoints]),
                        offsets: tf.zeros([outputResolution, outputResolution, 2 * numKeypoints]),
                        displacementFwd: tf.zeros([outputResolution, outputResolution, 2 * (numKeypoints - 1)]),
                        displacementBwd: tf.zeros([outputResolution, outputResolution, 2 * (numKeypoints - 1)])
                    };
                },
                dipose: function () { }
            };
        });
        posenetModel.load(resNetConfig)
            .then(function (posenetInstance) {
            resNet = posenetInstance;
        })
            .then(function () { return posenetModel.load(mobileNetConfig); })
            .then(function (posenetInstance) {
            mobileNet = posenetInstance;
        })
            .then(done)
            .catch(done.fail);
    });
    it('estimateSinglePose does not leak memory', function (done) {
        var input = tf.zeros([inputResolution, inputResolution, 3]);
        var beforeTensors = tf.memory().numTensors;
        resNet.estimateSinglePose(input, { flipHorizontal: false })
            .then(function () {
            return mobileNet.estimateSinglePose(input, { flipHorizontal: false });
        })
            .then(function () {
            expect(tf.memory().numTensors).toEqual(beforeTensors);
        })
            .then(done)
            .catch(done.fail);
    });
    it('estimateMultiplePoses does not leak memory', function (done) {
        var input = tf.zeros([inputResolution, inputResolution, 3]);
        var beforeTensors = tf.memory().numTensors;
        resNet
            .estimateMultiplePoses(input, {
            flipHorizontal: false,
            maxDetections: 5,
            scoreThreshold: 0.5,
            nmsRadius: 20
        })
            .then(function () {
            return mobileNet.estimateMultiplePoses(input, {
                flipHorizontal: false,
                maxDetections: 5,
                scoreThreshold: 0.5,
                nmsRadius: 20
            });
        })
            .then(function () {
            expect(tf.memory().numTensors).toEqual(beforeTensors);
        })
            .then(done)
            .catch(done.fail);
    });
});
//# sourceMappingURL=posenet_test.js.map