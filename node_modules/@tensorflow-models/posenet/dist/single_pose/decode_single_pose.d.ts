import * as tf from '@tensorflow/tfjs-core';
import { PoseNetOutputStride } from '../posenet_model';
import { Pose } from '../types';
export declare function decodeSinglePose(heatmapScores: tf.Tensor3D, offsets: tf.Tensor3D, outputStride: PoseNetOutputStride): Promise<Pose>;
