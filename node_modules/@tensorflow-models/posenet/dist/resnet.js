"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
function toFloatIfInt(input) {
    return tf.tidy(function () {
        if (input.dtype === 'int32') {
            input = input.toFloat();
        }
        var imageNetMean = tf.tensor([-123.15, -115.90, -103.06]);
        return input.add(imageNetMean);
    });
}
var ResNet = (function () {
    function ResNet(model, outputStride) {
        this.model = model;
        var inputShape = this.model.inputs[0].shape;
        tf.util.assert((inputShape[1] === -1) && (inputShape[2] === -1), function () { return "Input shape [" + inputShape[1] + ", " + inputShape[2] + "] " +
            "must both be equal to or -1"; });
        this.outputStride = outputStride;
    }
    ResNet.prototype.predict = function (input) {
        var _this = this;
        return tf.tidy(function () {
            var asFloat = toFloatIfInt(input);
            var asBatch = asFloat.expandDims(0);
            var _a = _this.model.predict(asBatch), displacementFwd4d = _a[0], displacementBwd4d = _a[1], offsets4d = _a[2], heatmaps4d = _a[3];
            var heatmaps = heatmaps4d.squeeze();
            var heatmapScores = heatmaps.sigmoid();
            var offsets = offsets4d.squeeze();
            var displacementFwd = displacementFwd4d.squeeze();
            var displacementBwd = displacementBwd4d.squeeze();
            return {
                heatmapScores: heatmapScores,
                offsets: offsets,
                displacementFwd: displacementFwd,
                displacementBwd: displacementBwd
            };
        });
    };
    ResNet.prototype.dispose = function () {
        this.model.dispose();
    };
    return ResNet;
}());
exports.ResNet = ResNet;
//# sourceMappingURL=resnet.js.map