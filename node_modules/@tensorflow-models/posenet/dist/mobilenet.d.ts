import * as tfconv from '@tensorflow/tfjs-converter';
import * as tf from '@tensorflow/tfjs-core';
import { BaseModel, PoseNetOutputStride } from './posenet_model';
export declare type MobileNetMultiplier = 0.50 | 0.75 | 1.0;
export declare function assertValidOutputStride(outputStride: any): void;
export declare function assertValidResolution(resolution: any, outputStride: number): void;
export declare class MobileNet implements BaseModel {
    readonly model: tfconv.GraphModel;
    readonly outputStride: PoseNetOutputStride;
    constructor(model: tfconv.GraphModel, outputStride: PoseNetOutputStride);
    predict(input: tf.Tensor3D): {
        [key: string]: tf.Tensor3D;
    };
    dispose(): void;
}
