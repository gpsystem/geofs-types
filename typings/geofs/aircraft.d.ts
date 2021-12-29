import geofs from "./index";
// This needs to be an interface because `default` is not accepted
// as a variable name.
declare namespace aircraft {
  // let default: number;
  let instance: Aircraft;
  class Aircraft {
    engine: {
      rpm: number;
      on: boolean;
    };
    brakesOn: boolean;
    groundContact: boolean;
    lastLlaLocation: number[];
    llaLocation: number[];
    collResult: {
      location: number[];
      normal: number[];
    };
    relativeAltitude: number;
    htr: number[];
    htrAngularSpeed: number[];
    veldir: number[];
    trueAirSpeed: number;
    aircraftRecord?: {
      fullPath: string;
    };
    definition: {
      scale: number;
      startupTime: number;
      com: number[];
      startAltitude: number;
      cockpitScaleFix: number;
      motionSensitivity: number;
      cameras: {
        distance: number;
        position?: number[];
      };
      parts: {
        name: string;
      }[];
      shadowBox: number[];
    };
    setup: {};
    shadow: geofs.shadow;
    id?: string;
    controllers: {
      pitch: {
        recenter: boolean;
        sensitivity: number;
        ratio: number;
      };
      roll: {
        recenter: boolean;
        sensitivity: number;
        ratio: number;
      };
      yaw: {
        recenter: boolean;
        sensitivity: number;
        ratio: number;
      };
    };
    parts: {
      [key: string]: typeof Aircraft.prototype.definition.parts;
    };
    airfoils: [];
    engines: [];
    balloons: [];
    wheels: [];
    collisionPoints: [];
    lights: [];
    suspensions: [];

    constructor(a: number[]);
    getCurrentCoordinates(): number[];
    addShadow(): boolean;
    removeShadow(): void;
    loadDefault(a: string): void;
    parseRecord(a: string): unknown;
    change(a?: string, b?: string, c?: string, d?: boolean): Promise<void>;
    loadLivery(a?: string): void;
    loadWithLivery(a: string, b?: number[], c?: string): void;
    load(a: string, b?: number[], c?: string, d?: boolean): Promise<void>;
  }
}

export default aircraft;
