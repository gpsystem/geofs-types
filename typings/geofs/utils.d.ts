/**
 * Can be accessed with `geofs.utils`
 * @module utils
 * @category geofs
 */
export const timeProvider: typeof window.performance | typeof window.Date;
export let lastNow: number;
export function fastNow(): number;
export function now(): number;

export function llaDistanceInMeters(
  a: number[],
  b: number[],
  c?: number[]
): number;
export function pivotArray<T>(a: T[]): { [key: string]: 1 };
export function htrFromHeadingNormal(a: number, b: number[]): number[];
export function hashCode(a: string): 0 | string;
export function displayAltitude(a: number): string;
export function bearingBetweenLocations(a: number[], b: number[]): number;
export function lookAt(a: number[], b: number[], c: number[]): number[];
export function limitRate(a: number, b: number, c: number, d: number): number;

export namespace easingFunctions {
  export function linear(a: number): number;
  export function easeInQuad(a: number): number;
  export function easeOutQuad(a: number): number;
  export function easeInOutQuad(a: number): number;
  export function easeInCubic(a: number): number;
  export function easeOutCubic(a: number): number;
  export function easeInOutCubic(a: number): number;
  export function easeInQuart(a: number): number;
  export function easeOutQuart(a: number): number;
  export function easeInOutQuart(a: number): number;
  export function easeInQuint(a: number): number;
  export function easeOutQuint(a: number): number;
  export function easeInOutQuint(a: number): number;
}

export function isWebglSupported(): false | WebGLRenderingContext;
