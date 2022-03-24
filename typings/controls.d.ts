/**
 * Can be accessed with `controls`.
 * @module controls
 * @category Global
 */
import type * as Cesium from "cesium";

export let states: {
  left: boolean;
  right: boolean;
  up: boolean;
  down: boolean;
  rudderLeft: boolean;
  rudderRight: boolean;
  increaseThrottle: boolean;
  decreaseThrottle: boolean;
};
export let mouse: {
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
export let keyboard: {
  rollIncrement: number;
  pitchIncrement: number;
  yawIncrement: number;
  throttleIncrement: number;
  recenterRatio: number;
  override: boolean;
  overrideRudder: boolean;
  exponential: number;
};
export let touch: {
  pitch: number;
  roll: number;
  yaw: number;
  throttle: number;
};
export let joystick: {
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
export let orientation: {
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
export let mixYawRoll: boolean;
export let exponential: number;
export let mixYawRollQuantity: number;
export let sensitivity: number;
export let mode: "mouse" | "keyboard" | "orientation" | "touch" | "joystick";
export let controlKeyPressed: boolean;
export let multiplier: {
  pitch: number;
  roll: number;
  yaw: number;
  throttle?: number;
};

/*
    Control Definitions:
  */
export let roll: number;
export let rawPitch: number;
export let pitch: number;
export let yaw: number;
export let throttle: number;
export let reverse: number;
export let brakes: number;
export let engine: {
  on: boolean;
};
export let elevatorTrim: number;
export let elevatorTrimMin: number;
export let elevatorTrimMax: number;
export let elevatorTrimStep: number;
export let gear: {
  position: number;
  target: number;
  delta?: number;
  positionTarget?: number;
};
export let flaps: {
  position: number;
  target: number;
  maxPosition: number;
  delta?: number;
  positionTarget?: number;
};
export let airbrakes: {
  position: number;
  target: number;
  delta?: number;
  positionTarget?: number;
};
export let optionalAnimatedPart: {
  position: number;
  target: number;
  delta?: number;
  positionTarget?: number;
};

export let axisSetters: {
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
export let setters: {
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
export let addHammerHandlersAreSet: boolean;
export let throttlePad:
  | (HTMLElement & {
      offsetTop: number;
      offsetHeight: number;
      tY: number;
      hY: number;
      rY: number;
    })
  | undefined;
export let controlPad:
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
export let rudderPad:
  | (HTMLElement & {
      offsetLeft: number;
      oX: number;
      eX: number;
      rX: number;
    })
  | undefined;

export let viewportWidth: number;
export let viewportHeight: number;

export function init(): void;
export function mouseHandler(
  a: JQuery.TypeEventHandler<
    Document,
    undefined,
    Document,
    Document,
    "mousemove"
  >
): void;
export function mouseDownHandler(
  a: JQuery.TypeEventHandler<Document, undefined, any, any, "mousedown">
): void;
export function mouseUpHandler(
  a: JQuery.TypeEventHandler<Document, undefined, any, any, "mouseup">
): void;
export function addHammerHandlers(): void;
export function initViewportDimensions(): void;
export function resetWithAircraftDefinition(): void;
export function reset(): void;
export function setMode(a?: string): void;

export function trimUp(a?: number): void;
export function trimDown(a?: number): void;
export function update(a: number): void;
export function setPartAnimationDelta(a: number): void;
export function animatePart(a: string, b: number): void;
export function updateMouse(a?: number): void;
export function updateKeyboard(a: number): void;
export function recenter(): void;
export function keyDown(
  a: JQuery.TypeEventHandler<Document, undefined, Document, Document, "keydown">
): void;
export function keyUp(
  a: JQuery.TypeEventHandler<Document, undefined, Document, Document, "keyup">
): void;

export function updateOrientation(a: number): void;
export function updateTouch(a?: number /*not used*/): void;

export let autopilot: {
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
  $autopilotPad?: JQuery;
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
