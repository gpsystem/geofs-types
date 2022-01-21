import geofs from "./index";
import Definition from "./aircraftDefinition";

declare namespace aircraftNamespace {
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
    llaLocation: [number, number, number];

    collResult: {
      location: number[];
      normal: number[];
    };
    relativeAltitude: number;

    /**
     * [heading, tilt, roll]
     */
    htr: [number, number, number];
    htrAngularSpeed: number[];
    veldir: number[];
    trueAirSpeed: number;
    aircraftRecord?:
      | {
          fullPath: string;
        }
      | undefined;
    definition: Definition[0];
    cockpitSetup: [Partial<Definition[0]> & Pick<Definition[0], "parts">];
    setup: Record<string, unknown>;
    shadow: geofs.shadow;
    id?: string | undefined;
    controllers: {
      [key in "pitch" | "roll" | "yaw"]: {
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
    arrestingCableContact: {
      collisionPoint: number[];
      normal: number[];
      type: "arrestingCable";
      object: unknown;
      contactFwdDir: number[];
      contactSideDir: number[];
    } | null;

    _cockpitLoaded: boolean;

    constructor(a: number[]);
    getCurrentCoordinates(): number[];
    addShadow(): boolean;
    removeShadow(): void;
    loadDefault(a: string): void;
    parseRecord(a: string): unknown;
    change(
      a?: string | number | undefined,
      b?: string | undefined,
      c?: string | undefined,
      d?: boolean | undefined
    ): Promise<void>;
    loadLivery(a?: string | undefined): void;
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

// HACK: We can't use default as a variable in the namespace because 'default' is not allowed as a variable declaration name.ts(1389)
declare const aircraft: typeof aircraftNamespace & {
  default: number;
};

export default aircraft;
