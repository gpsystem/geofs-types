import geofs from "./index";
import Definition from "./aircraftDefinition";
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

    /**
     * [latitude, longitude, altitude]
     */
    llaLocation: number[];

    collResult: {
      location: number[];
      normal: number[];
    };
    relativeAltitude: number;

    /**
     * [heading, tilt, roll]
     */
    htr: number[];
    htrAngularSpeed: number[];
    veldir: number[];
    trueAirSpeed: number;
    aircraftRecord?: {
      fullPath: string;
    };
    definition: Definition[0];
    cockpitSetup: /*TODO me; can get using `https://www.geo-fs.com/models/aircraft/load.php?id=${id}&cockpit=true` */ any;
    setup: Record<string, unknown>;
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
      [
        key: Definition[0]["parts"][number]["name"]
      ]: Definition[0]["parts"][number] & {
        object3d: Object3D;
      };
    };
    object3d: Object3D;
    airfoils: Extract<Definition[0]["parts"][number], { type: "airfoil" }>[];
    engines: Extract<Definition[0]["parts"][number], { type: "engine" }>[];
    balloons: [];
    wheels: Extract<
      Definition[0]["parts"][number],
      { type: "wheel" | "pad" }
    >[];
    collisionPoints: [];
    lights: [];
    suspensions: [];
    boundingSphereRadius: number;
    rigidBody: rigidBody;
    crashed: boolean;
    crashNotified: boolean;
    arrestingCableContact: null | {
      collisionPoint: number[];
      normal: number[];
      type: "arrestingCable";
      object: unknown;
      contactFwdDir: number[];
      contactSideDir: number[];
    };

    _cockpitLoaded: boolean;

    constructor(a: number[]);
    getCurrentCoordinates(): number[];
    addShadow(): boolean;
    removeShadow(): void;
    loadDefault(a: string): void;
    parseRecord(a: string): unknown;
    change(
      a?: string | number,
      b?: string,
      c?: string,
      d?: boolean
    ): Promise<void>;
    loadLivery(a?: string): void;
    loadWithLivery(a: string, b?: number[], c?: string): void;
    load(a: string, b?: number[], c?: string, d?: boolean): Promise<void>;
    init(a: Definition[0], b: number[], c?: boolean, d?: boolean): void;
    loadCockpit(): Promise<void>;
    addParts(a: Definition[0]["parts"], b: string, c?: number): void;
    setVisibility(a: boolean): void;
    unloadAircraft(): void;
    reset(a: boolean): void;
    place(a: number[], b?: number[]): void;
    placeParts(a?: Aircraft["parts"]): void;
    placePart(a?: Aircraft["parts"][string]): void;
    render(): void;
    startEngine(): void;
    stopEngine(): void;
    addOffsets(a: Aircraft["parts"][string], b: number): void;
    fixCockpitScale(a: number): void;
    crash(): void;
  }
}

export default aircraft;
