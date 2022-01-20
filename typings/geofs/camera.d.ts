import * as Cesium from "cesium";

declare namespace camera {
  let animations: {
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

  let definitions: {
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

  let currentMode: number;
  let currentModeName: string;
  let currentView: string;
  let currentDefinition: typeof definitions;
  let modes: typeof definitions[];
  let lastCurrentMode: number;
  let worldPosition: number[];
  let openSlave: boolean;
  let motionRange: number[];
  let FOVIncrement: number;
  let defaultFOV: number;
  let currentFOV: number;
  let minFOV: number;
  let maxFOV: number;
  let groundAvoidanceMargin: number;
  let groundAvoidanceIgnore: number;
  let shortestDistance: number;
  let groundAltitude: number;

  let cam: Cesium.Camera;
  let lla: number[];
  let htr: number[];
  let hasMoved: boolean;

  function init(): void;
  function setFOV(a?: number): void;
  function increaseFOV(a?: number): void;
  function decreaseFOV(a?: number): void;
  function reset(): void;
  function cycle(): void;
  function set(a: number, b?: string): void;
  function lookAround(a: number, b: number): boolean;
  function rotate(a?: number, b?: number, c?: number): boolean;
  function translate(a?: number, b?: number, c?: number): boolean;
  function setPosition(a?: number, b?: number, c?: number): boolean;
  function isHandlingMouseRotation(): boolean;
  function setRotation(a: number, b?: number, c?: number): boolean;
  function saveRotation(): void;
  function saveOffset(): void;
  function setToNeutral(): void;
  function avoidGround(): void;
  function getFlytToCoordinates(): number[];
  function update(a: number): void;
  function update3DOverlayPosition(): void;
  function openSlaveWindow(): void;
  function updateSlaveData(): void;
}

export default camera;
