/**
 * Can be accessed with `geofs.camera`.
 * @module camera
 * @category geofs
 */
import * as Cesium from "cesium";

export let animations: {
  orbitHorizontal: {
    rate: number;
    active: boolean;
  };

  orbitVertical: {
    active: boolean;
    rate: number;
    min: number;
    max: number;
  };
};

export let definitions: {
  follow: {
    distance: number;
    orientation: number[];
    lastUsedHtr: number[];
  };
  cockpit: {
    offsetBounds: number[];
  };
  cockpitless: Record<string, unknown>;
  chase: {
    reset: boolean;
  };
  free: {
    reset: boolean;
  };
  fixed: {
    lastUsedHtr: number[];
    distance: number;
  };
} & {
  [key in
    | `follow`
    | "cockpit"
    | "cockpitless"
    | "chase"
    | "free"
    | "fixed"
    | `${string}`]: {
    name: key;
    mode: number;
    view: string;
    position: [number, number, number];
    orientations: {
      neutral: number[];
      current: number[];
      last: number[];
    };
    offsets: {
      neutral: number[];
      current: number[];
      last: number[];
    };
    FOV?: number | undefined;
  };
};

export let currentMode: number;
export let currentModeName: string;
export let currentView: string;
export let currentDefinition: typeof definitions;
export let modes: typeof definitions[];
export let lastCurrentMode: number;
export let worldPosition: number[];
export let openSlave: boolean;
export let motionRange: number[];
export let FOVIncrement: number;
export let defaultFOV: number;
export let currentFOV: number;
export let minFOV: number;
export let maxFOV: number;
export let groundAvoidanceMargin: number;
export let groundAvoidanceIgnore: number;
export let shortestDistance: number;
export let groundAltitude: number;

export let cam: Cesium.Camera;
export let lla: number[];
export let htr: number[];
export let hasMoved: boolean;

export function init(): void;
export function setFOV(a?: number): void;
export function increaseFOV(a?: number): void;
export function decreaseFOV(a?: number): void;
export function reset(): void;
export function cycle(): void;
export function set(a: number, b?: string): void;
export function lookAround(a: number, b: number): boolean;
export function rotate(a?: number, b?: number, c?: number): boolean;
export function translate(a?: number, b?: number, c?: number): boolean;
export function setPosition(a?: number, b?: number, c?: number): boolean;
export function isHandlingMouseRotation(): boolean;
export function setRotation(a: number, b?: number, c?: number): boolean;
export function saveRotation(): void;
export function saveOffset(): void;
export function setToNeutral(): void;
export function avoidGround(): void;
export function getFlytToCoordinates(): number[];
export function update(a: number): void;
export function update3DOverlayPosition(): void;
export function openSlaveWindow(): void;
export function updateSlaveData(): void;
