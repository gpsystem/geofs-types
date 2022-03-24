/**
 * Can be accessed with `flight`.
 * @module flight
 * @category Global
 */
export let minPenetrationThreshold: number;
export let arrestingHookDiscardVelocity: number;
export let arrestingHookDiscardLength: number;
export let currentAltitudeTestContext: {
  lastGroundAltitude: number;
  oldNormal: number[];
  wrongAltitude: null;
  wrongAltitudeTries: number;
  wrongNormal: number;
  wrongValue: number;
};
export let pastAltitudeTestContext: {
  lastGroundAltitude: number;
  wrongAltitude: number;
  wrongAltitudeTries: number;
  wrongValue: number;
};
export let skipCollisionResponse: boolean;

export function tick(a: number, b: number): void;
export function setAnimationValues(a: number): void;

export namespace recorder {
  export let tape: {
    time: number;
    coord: number[];
    controls: number[];
    state: boolean[];
    velocities: number[];
  }[];
  export let rate: number;
  export let frequency: number;
  export let maxLenth: number;
  export let playing: boolean;
  export let lastRecordTime: number;
  export let currentStep: number;
  export let deltaRecord: {
    coord: number[];
    controls: number[];
    velocities: number[];
  };
  export let liveRecord: typeof recorder.tape[number];

  export function record(): void;
  export function clear(): void;
  export function enterPlayback(): void;
  export function exitPlayback(): void;
  export function pausePlayback(): void;
  export function unpausePlayback(): void;
  export function startPlayback(): void;
  export function setStep(a: number, b: string): boolean;
  export function play(a: number): void;
}

export namespace sharing {
  export let minSafeTimeDelta: number;
  export let on: boolean;
  export let liveRecord: null | typeof recorder.tape[number];
  export let deltaRecord: null | ReturnType<
    typeof interpolator.computeDeltaRecord
  >;
  export let lastRecord: null | typeof recorder.tape[number];

  export function start(): void;
  export function stop(): void;
  export function reset(): void;
  export function peerUpdate(a: typeof recorder.tape[number]): void;
  export function update(a: number): void;
}

export namespace interpolator {
  export function computeDeltaRecord(
    a: typeof recorder.liveRecord,
    b: typeof recorder.deltaRecord,
    c: number
  ): typeof recorder.deltaRecord;
  export function increment(
    a: typeof recorder.liveRecord,
    b: typeof recorder.deltaRecord,
    c: number
  ): void;
  export function setAircraft(a: typeof recorder.liveRecord): void;
}

export function terrainElevationManagement(): void;
export function reset(): void;
