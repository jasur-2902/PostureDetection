import * as tfconv from '@tensorflow/tfjs-converter';
import * as tf from '@tensorflow/tfjs-core';
import { BaseModel, PoseNetOutputStride } from './posenet_model';
export declare class ResNet implements BaseModel {
    readonly model: tfconv.GraphModel;
    readonly outputStride: PoseNetOutputStride;
    constructor(model: tfconv.GraphModel, outputStride: PoseNetOutputStride);
    predict(input: tf.Tensor3D): {
        [key: string]: tf.Tensor3D;
    };
    dispose(): void;
}
