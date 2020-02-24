"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
describe('util.getValidResolution', function () {
    it('returns an odd value', function () {
        expect(util_1.getValidResolution(0.5, 545, 32) % 2).toEqual(1);
        expect(util_1.getValidResolution(0.5, 545, 16) % 2).toEqual(1);
        expect(util_1.getValidResolution(0.5, 545, 8) % 2).toEqual(1);
        expect(util_1.getValidResolution(0.845, 242, 8) % 2).toEqual(1);
        expect(util_1.getValidResolution(0.421, 546, 16) % 2).toEqual(1);
    });
    it('returns a value that when 1 is subtracted by it is ' +
        'divisible by the output stride', function () {
        var outputStride = 32;
        var imageSize = 562;
        var scaleFactor = 0.63;
        var resolution = util_1.getValidResolution(scaleFactor, imageSize, outputStride);
        expect((resolution - 1) % outputStride).toEqual(0);
    });
});
//# sourceMappingURL=util_test.js.map