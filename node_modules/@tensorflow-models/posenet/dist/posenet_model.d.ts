import * as tf from '@tensorflow/tfjs-core';
import { MobileNetMultiplier } from './mobilenet';
import { Pose, PosenetInput } from './types';
export declare type PoseNetInputResolution = 161 | 193 | 257 | 289 | 321 | 353 | 385 | 417 | 449 | 481 | 513 | 801 | 1217;
export declare type PoseNetOutputStride = 32 | 16 | 8;
export declare type PoseNetArchitecture = 'ResNet50' | 'MobileNetV1';
export declare type PoseNetDecodingMethod = 'single-person' | 'multi-person';
export declare type PoseNetQuantBytes = 1 | 2 | 4;
export interface BaseModel {
    readonly outputStride: PoseNetOutputStride;
    predict(input: tf.Tensor3D): {
        [key: string]: tf.Tensor3D;
    };
    dispose(): void;
}
export interface ModelConfig {
    architecture: PoseNetArchitecture;
    outputStride: PoseNetOutputStride;
    inputResolution: PoseNetInputResolution;
    multiplier?: MobileNetMultiplier;
    modelUrl?: string;
    quantBytes?: PoseNetQuantBytes;
}
export declare const VALID_INPUT_RESOLUTION: number[];
export interface InferenceConfig {
    flipHorizontal: boolean;
}
export interface SinglePersonInterfaceConfig extends InferenceConfig {
}
export interface MultiPersonInferenceConfig extends InferenceConfig {
    maxDetections?: number;
    scoreThreshold?: number;
    nmsRadius?: number;
}
export interface LegacyMultiPersonInferenceConfig extends MultiPersonInferenceConfig {
    decodingMethod: 'multi-person';
}
export interface LegacySinglePersonInferenceConfig extends SinglePersonInterfaceConfig {
    decodingMethod: 'single-person';
}
export declare const SINGLE_PERSON_INFERENCE_CONFIG: SinglePersonInterfaceConfig;
export declare const MULTI_PERSON_INFERENCE_CONFIG: MultiPersonInferenceConfig;
export declare class PoseNet {
    baseModel: BaseModel;
    inputResolution: PoseNetInputResolution;
    constructor(net: BaseModel, inputResolution: PoseNetInputResolution);
    estimateMultiplePoses(input: PosenetInput, config?: MultiPersonInferenceConfig): Promise<Pose[]>;
    estimateSinglePose(input: PosenetInput, config?: SinglePersonInterfaceConfig): Promise<Pose>;
    estimatePoses(input: PosenetInput, config: LegacySinglePersonInferenceConfig | LegacyMultiPersonInferenceConfig): Promise<Pose[]>;
    dispose(): void;
}
export declare function load(config?: ModelConfig): Promise<PoseNet>;
