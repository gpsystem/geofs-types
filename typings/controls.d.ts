import type * as Cesium from "cesium";

declare namespace controls {
  let states: {
    left: boolean;
    right: boolean;
    up: boolean;
    down: boolean;
    rudderLeft: boolean;
    rudderRight: boolean;
    increaseThrottle: boolean;
    decreaseThrottle: boolean;
  };
  let mouse: {
    down: boolean;
    orbit: {
      ratioX: number;
      ratioY: number;
      ratioZ: number;
    };
    offset: {
      ratioX: number;
      ratioY: number;
    };
    xValue: number;
    yValue: number;
    oX: number;
    oY: number;
    cX: number;
    cY: number;
    rX: number;
    rY: number;
    tY: number;
    lastX: number;
    lastY: number;
    originalX: number;
    originalY: number;
    clickedNode: Cesium.Model;
  };
  let keyboard: {
    rollIncrement: number;
    pitchIncrement: number;
    yawIncrement: number;
    throttleIncrement: number;
    recenterRatio: number;
    override: boolean;
    overrideRudder: boolean;
    exponential: number;
  };
  let touch: {
    pitch: number;
    roll: number;
    yaw: number;
    throttle: number;
  };
  let joystick: {
    deadZoneUp: number;
    deadZoneDown: number;
    ready: boolean;
    sticksNumber: number;
    sticks: Gamepad[];
    info: string;
    oldButtonsValue: number;
    buttons: {
      [key: string]: {
        stick: Gamepad;
        globalId: number;
        id: string;
      };
    };
    axes: {
      [key: string]: {
        stick: Gamepad;
        globalId: number;
        id: string;
        enabled: boolean;
      };
    };
    buttonHandlers: [] & {
      [key: string]: [] & {
        [key: string]: () => void;
      };
    };

    api: typeof navigator.getGamepads;

    init(): void;
    poll(): boolean;
    configure(): void;
    checkButton(a: string): boolean;
    getAxisValue(a: string, b?: number, c?: number): number;
    updateJoystick(a: number): void;
    addButtonListener(a: string, b: string, c: () => void): void;
  };
  let orientation: {
    generalMultiplier: number;
    available: boolean;
    eventListenerSet?: boolean;
    centers?: number[] | null;
    values: number[];

    init(): void;
    fixPitch(a?: number[]): void;
    recenter(): void;
    isAvailable(): boolean;
    getNormalizedAxis(a: number): number | void;
    getHtr(): number[];
  };
  let mixYawRoll: boolean;
  let exponential: number;
  let mixYawRollQuantity: number;
  let sensitivity: number;
  let mode: "mouse" | "keyboard" | "orientation" | "touch" | "joystick";
  let controlKeyPressed: boolean;
  let multiplier: {
    pitch: number;
    roll: number;
    yaw: number;
    throttle?: number;
  };

  /*
     Control Definitions:
    */
  let roll: number;
  let rawPitch: number;
  let pitch: number;
  let yaw: number;
  let throttle: number;
  let reverse: number;
  let brakes: number;
  let engine: {
    on: boolean;
  };
  let elevatorTrim: number;
  let elevatorTrimMin: number;
  let elevatorTrimMax: number;
  let elevatorTrimStep: number;
  let gear: {
    position: number;
    target: number;
    delta?: number;
    positionTarget?: number;
  };
  let flaps: {
    position: number;
    target: number;
    maxPosition: number;
    delta?: number;
    positionTarget?: number;
  };
  let airbrakes: {
    position: number;
    target: number;
    delta?: number;
    positionTarget?: number;
  };
  let optionalAnimatedPart: {
    position: number;
    target: number;
    delta?: number;
    positionTarget?: number;
  };

  let axisSetters: {
    none: {
      label: string;
      value: null;
    };
    pitch: {
      label: string;
      process(a: number): number;
    };
    roll: {
      label: string;
      process(a: number): number;
    };
    yaw: {
      label: string;
      process(a: number): number;
    };
    throttle: {
      label: string;
      process(a: number): number;
    };
    reverse: {
      label: string;
      process(a: number): number;
    };
    throttlereverse: {
      label: string;
      process(a: number): number;
    };
    brakes: {
      label: string;
      process(a: number): number;
    };
    airbrakesPosition: {
      label: string;
      process(a: number): void;
    };
    hatView: {
      label: string;
      max: number;
      process(a: number, b: number): void;
    };
    lookAround: {
      label: string;
      process(a: number): void;
    };
    lookUpDown: {
      label: string;
      process(a: number): void;
    };
  };
  interface Setter {
    label: string;
    set(): void;
    unset?(): void;
  }
  let setters: {
    none: Setter;
    setBrakes: Setter;
    toggleAutoPilot: Setter;
    toggleParkingBrake: Setter;
    setAirbrakes: Setter;
    setOptionalAnimatedPart: Setter;
    setFlapsUp: Setter;
    setFlapsDown: Setter;
    cycleFlaps: Setter;
    setGear: Setter;
    increaseThrottle: Setter;
    decreaseThrottle: Setter;
    setReverseNone: Setter;
    setReverseFull: Setter;
    toggleReverse: Setter;
    setReverseOnThrottleAxis: Setter;
    setElevatorTrimUp: Setter;
    setElevatorTrimDown: Setter;
    setElevatorTrimNeutral: Setter;
    // Allow adding more setters:
    [key: string]: Setter;
  };

  /*
      Mobile support things
     */
  let addHammerHandlersAreSet: boolean;
  let throttlePad:
    | (HTMLElement & {
        offsetTop: number;
        offsetHeight: number;
        tY: number;
        hY: number;
        rY: number;
      })
    | undefined;
  let controlPad:
    | (HTMLElement & {
        offsetTop: number;
        hY: number;
        rY: number;
        offsetLeft: number;
        oX: number;
        eX: number;
        rX: number;
      })
    | undefined;
  let rudderPad:
    | (HTMLElement & {
        offsetLeft: number;
        oX: number;
        eX: number;
        rX: number;
      })
    | undefined;

  let viewportWidth: number;
  let viewportHeight: number;

  function init(): void;
  function mouseHandler(
    a: JQuery.TypeEventHandler<
      Document,
      undefined,
      Document,
      Document,
      "mousemove"
    >
  ): void;
  function mouseDownHandler(
    a: JQuery.TypeEventHandler<Document, undefined, any, any, "mousedown">
  ): void;
  function mouseUpHandler(
    a: JQuery.TypeEventHandler<Document, undefined, any, any, "mouseup">
  ): void;
  function addHammerHandlers(): void;
  function initViewportDimensions(): void;
  function resetWithAircraftDefinition(): void;
  function reset(): void;
  function setMode(a?: string): void;

  function trimUp(a?: number): void;
  function trimDown(a?: number): void;
  function update(a: number): void;
  function setPartAnimationDelta(a: number): void;
  function animatePart(a: string, b: number): void;
  function updateMouse(a?: number): void;
  function updateKeyboard(a: number): void;
  function recenter(): void;
  function keyDown(
    a: JQuery.TypeEventHandler<
      Document,
      undefined,
      Document,
      Document,
      "keydown"
    >
  ): void;
  function keyUp(
    a: JQuery.TypeEventHandler<Document, undefined, Document, Document, "keyup">
  ): void;

  function updateOrientation(a: number): void;
  function updateTouch(a?: number /*not used*/): void;

  let autopilot: {
    on: boolean;
    defaults: {
      maxBankAngle: number;
      maxPitchAngle: number;
      minPitchAngle: number;
      baseClimbrate: number;
      baseDescentrate: number;
      maxClimbrate: number;
      maxDescentrate: number;
      verticalSpeedHoldMargin: number;
      targetBankAngleRatio: number;
      heading: number;
      altitude: number;
      kias: number;
      climbrate: number;
      yawBankAngleRatio: number;
      pitchAnglePID: number[];
      elevatorPitchPID: number[];
      bankAnglePID: number[];
      aileronsRollPID: number[];
      throttlePID: number[];
      effectivenessRatioMaximum: number;
    };
    PIDs: {
      pitchAngle: PID;
      elevatorPitch: PID;
      bankAngle: PID;
      aileronsRoll: PID;
      throttle: PID;
    };
    definition: typeof autopilot.defaults;
    $autopilotPad?: JQuery<HTMLElement>;
    heading: number;
    altitude: number;
    kias: number;
    climbrate: number | null;
    autopilotPadTimeout: number;

    init(): void;
    update(a: number): void;
    initUI(): void;
    setHeading(a: number | string): void;
    setAltitude(a: number | string): void;
    setKias(a: number | string): void;
    setClimbrate(a?: number | string): void;
    toggle(): void;
    resetPIDs(): void;
    turnOn(): void;
    turnOff(): void;
  };
}

export default controls;
