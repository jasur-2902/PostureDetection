"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var VALID_OUTPUT_STRIDES = [8, 16, 32];
function assertValidOutputStride(outputStride) {
    tf.util.assert(typeof outputStride === 'number', function () { return 'outputStride is not a number'; });
    tf.util.assert(VALID_OUTPUT_STRIDES.indexOf(outputStride) >= 0, function () { return "outputStride of " + outputStride + " is invalid. " +
        "It must be either 8, 16, or 32"; });
}
exports.assertValidOutputStride = assertValidOutputStride;
function assertValidResolution(resolution, outputStride) {
    tf.util.assert(typeof resolution === 'number', function () { return 'resolution is not a number'; });
    tf.util.assert((resolution - 1) % outputStride === 0, function () { return "resolution of " + resolution + " is invalid for output stride " +
        (outputStride + "."); });
}
exports.assertValidResolution = assertValidResolution;
function toFloatIfInt(input) {
    return tf.tidy(function () {
        if (input.dtype === 'int32')
            input = input.toFloat();
        input = tf.div(input, 127.5);
        return tf.sub(input, 1.0);
    });
}
var MobileNet = (function () {
    function MobileNet(model, outputStride) {
        this.model = model;
        var inputShape = this.model.inputs[0].shape;
        tf.util.assert((inputShape[1] === -1) && (inputShape[2] === -1), function () { return "Input shape [" + inputShape[1] + ", " + inputShape[2] + "] " +
            "must both be -1"; });
        this.outputStride = outputStride;
    }
    MobileNet.prototype.predict = function (input) {
        var _this = this;
        return tf.tidy(function () {
            var asFloat = toFloatIfInt(input);
            var asBatch = asFloat.expandDims(0);
            var _a = _this.model.predict(asBatch), offsets4d = _a[0], heatmaps4d = _a[1], displacementFwd4d = _a[2], displacementBwd4d = _a[3];
            var heatmaps = heatmaps4d.squeeze();
            var heatmapScores = heatmaps.sigmoid();
            var offsets = offsets4d.squeeze();
            var displacementFwd = displacementFwd4d.squeeze();
            var displacementBwd = displacementBwd4d.squeeze();
            return {
                heatmapScores: heatmapScores, offsets: offsets,
                displacementFwd: displacementFwd,
                displacementBwd: displacementBwd
            };
        });
    };
    MobileNet.prototype.dispose = function () {
        this.model.dispose();
    };
    return MobileNet;
}());
exports.MobileNet = MobileNet;
//# sourceMappingURL=mobilenet.js.map