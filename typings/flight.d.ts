declare namespace flight {
  let minPenetrationThreshold: number;
  let arrestingHookDiscardVelocity: number;
  let arrestingHookDiscardLength: number;
  let currentAltitudeTestContext: {
    lastGroundAltitude: number;
    oldNormal: number[];
    wrongAltitude: null;
    wrongAltitudeTries: number;
    wrongNormal: number;
    wrongValue: number;
  };
  let pastAltitudeTestContext: {
    lastGroundAltitude: number;
    wrongAltitude: number;
    wrongAltitudeTries: number;
    wrongValue: number;
  };
  let skipCollisionResponse: boolean;

  function tick(a: number, b: number): void;
  function setAnimationValues(a: number): void;

  namespace recorder {
    let tape: {
      time: number;
      coord: number[];
      controls: number[];
      state: boolean[];
      velocities: number[];
    }[];
    let rate: number;
    let frequency: number;
    let maxLenth: number;
    let playing: boolean;
    let lastRecordTime: number;
    let currentStep: number;
    let deltaRecord: {
      coord: number[];
      controls: number[];
      velocities: number[];
    };
    let liveRecord: typeof recorder.tape[number];

    function record(): void;
    function clear(): void;
    function enterPlayback(): void;
    function exitPlayback(): void;
    function pausePlayback(): void;
    function unpausePlayback(): void;
    function startPlayback(): void;
    function setStep(a: number, b: string): boolean;
    function play(a: number): void;
  }

  namespace sharing {
    let minSafeTimeDelta: number;
    let on: boolean;
    let liveRecord: null | typeof recorder.tape[number];
    let deltaRecord: null | ReturnType<typeof interpolator.computeDeltaRecord>;
    let lastRecord: null | typeof recorder.tape[number];

    function start(): void;
    function stop(): void;
    function reset(): void;
    function peerUpdate(a: typeof recorder.tape[number]): void;
    function update(a: number): void;
  }

  namespace interpolator {
    function computeDeltaRecord(
      a: typeof recorder.liveRecord,
      b: typeof recorder.deltaRecord,
      c: number
    ): typeof recorder.deltaRecord;
    function increment(
      a: typeof recorder.liveRecord,
      b: typeof recorder.deltaRecord,
      c: number
    ): void;
    function setAircraft(a: typeof recorder.liveRecord): void;
  }

  function terrainElevationManagement(): void;
  function reset(): void;
}

export default flight;
