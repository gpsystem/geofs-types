/**
 * Can be accessed with `geofs.animations`.
 * @module animations
 * @category geofs
 */
import { AnimationValues, Animation } from "./aircraftDefinition";

export let values: {
  [key in AnimationValues]: number;
};

export function init(): void;
export function getRampRatio(a: number[], b: number): number;
export function getRampValue(a: number[], b: number): number;
export function resetValues(a?: typeof values): void;
export function getValue(a: AnimationValues): any;
export function filter(a: Animation, b: number): number;
