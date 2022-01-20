/*
****************************************************************
UTILITY TYPES
****************************************************************
*/
type DistributiveOmit<T, K extends PropertyKey> = T extends any
  ? Omit<T, K>
  : never;

/**
 * Properties all the values can have
 */
interface Base {
  comment?: string | undefined;
}

/**
 * Animation filters.
 */
interface Filters {
  /**
   * [FILTER]
   * A multiplier for the value.
   */
  ratio: number;

  /**
   * [FILTER]
   * Value is converted to boolean when smaller than threshold
   */
  threshold: number;

  /**
   * [FILTER]
   * Value is converted to boolean when between values
   */
  between: [number, number];

  /**
   * [FILTER]
   * Add or subtract and clamp value between (0 - 1)
   */
  delay: number;

  /**
   * [FILTER]
   * Equal to value (==)
   */
  eq: number | string;

  /**
   * [FILTER]
   * Not equal to value (!=)
   */
  notEq: number | string;

  /**
   * @see {@link notEq}
   */
  noteq: number | string;

  /**
   * [FILTER]
   * Greater than value (>)
   */
  gt: number;

  /**
   * [FILTER]
   * Less than value (<)
   */
  lt: number;

  /**
   * [FILTER]
   * Returns the value if it is larger than min. If not, returns min.
   */
  min: number;

  /**
   * [FILTER]
   * Returns the value if it is smaller than max. If not, returns max.
   */
  max: number;

  /**
   * [FILTER]
   * Returns true if the value is in the array; otherwise, false.
   */
  when: (string | number)[];

  /**
   * [FILTER]
   * Returns true if the value is not in the array; otherwise, false.
   */
  whenNot: unknown;

  /**
   * [FILTER]
   * Add offset after applying "ratio"
   */
  offset: number;

  /**
   * [FILTER]
   * Raise value to provided power
   */
  power: number;

  /**
   * [FILTER]
   * Specify a ramp of values to replace the original animation value.
   * New values are looked-up in the array depending on original value varying from 0 to 1.
   */
  valueRamp: number[];

  /**
   * [FILTER]
   * Array of 2 or 4 stop values to generate an increasing--level--decreasing ramp from 0 to 1 (eventually back to 0) - mostly used for sound.
   * @see {@link valueRamp}
   * @deprecated
   */
  ramp: unknown[];

  /**
   * [FILTER]
   * Specify a ramp of ratios by which to multiply the value.
   * Ratios are looked-up in the array depending on value varying from 0 to 1.
   */
  ratioRamp: number[];

  /**
   * [FILTER]
   * @see {@link min}
   */
  fmin: number;

  /**
   * [FILTER]
   * @see {@link max}
   */
  fmax: number;

  /**
   * Value is converted to boolean when greater than threshold
   */
  negthreshold: number;

  /**
   * [FILTER]
   * Add offset before applying "ratio"
   */
  preoffset: number;

  /**
   * [FILTER]
   */
  set: number;
}

interface AnimationBase extends Partial<Filters>, Base {
  type:
    | "rotate"
    | "scale"
    | "translate"
    | "show"
    | "hide"
    | "sound"
    | "property"
    | "justhide"
    | "justshow"
    | "translateX"
    | "translateY"
    | "scaleX"
    | "scaleY"
    | "moveX"
    | "moveY"
    | "throttle"
    | "pitch"
    | "strobe";

  /**
   * "X", "Y", "Z" for rotation, vector for translation
   */
  axis?: "X" | "Y" | "Z" | [number, number, number] | undefined;

  // Properties taken from aircraft definitions
  frame?: string | undefined;
  name?: string | undefined;
}

interface AnimationWithValue extends AnimationBase {
  /**
   * • enginesOn: Boolean: 1 if engine is on, 0 if not.
   *
   * • prop: Prop rotation [0, 360].
   *
   * • thrust: In Newton.
   *
   * • rpm, throttle: [0, 1]
   *
   * • pitch: Control input [0, 1]
   *
   * • roll: Control input [0, 1]
   *
   * • yaw: Control input [0, 1]
   *
   * • brakes: Boolean: 1 if brakes are on, 0 if not.
   *
   * • gearPosition: Current gear position [0, 1]
   *
   * • gearTarget: Reaching gear position [0, 1]
   *
   * • flapsValue: Current flaps position as [0, 1]
   *
   * • flapsPosition: Current flaps position in steps [0, flapsSteps]
   *
   * • flapsTarget: Reaching flaps position in steps [0, flapsSteps]
   *
   * • airbrakesPosition: Current airbrakes position as [0, 1]
   *
   * • airbrakesTarget: Reaching airbrakes position as [0, 1]
   *
   * • groundContact: Boolean: 1 if aircraft is in contact with ground, 0 if not.
   *
   * • rollingSpeed: Aircraft speed in m/s when rolling on ground.
   *
   * • maxAngularVRatio: Rolling wheel angular speed.
   *
   * • kias: Indicated airspeed in knots.
   *
   * • tas: True airspeed in knots.
   *
   * • mach: Airspeed as Mach number.
   *
   * • altitude: In feet.
   *
   * • tenFeet: Altitude in tens of feet.
   *
   * • hundredFeet: Altitude in hundreds of feet.
   *
   * • thousandFeet: Altitude in thousands of feet.
   *
   * • climbrate: Climb rate in feet per minute.
   *
   * • heading: The aircraft's heading in degrees [-180, 180].
   *
   * • heading360: The aircraft's heading in degrees [0, 360].
   *
   * • atilt: The aircraft's tilt in degrees.
   *
   * • aroll: The aircraft's roll in degrees.
   *
   * • relativeWind: In degrees, from aircraft forward.
   *
   * • windSpeed: Wind speed in meters per second.
   *
   * • view: camera mode name ["follow", "cockpit", "cockpitless", "chase", "free"].
   *
   * • strobe: Boolean, set to 1 every 1400ms, for 100ms duration.
   *
   * • strobe2: Boolean set to 1 every 1700ms, for 100ms duration.
   *
   * • random: Returns a random value [0, 1).
   */
  value:
    | ""
    | "enginesOn"
    | "prop"
    | "thrust"
    | "rpm"
    | "throttle"
    | "pitch"
    | "roll"
    | "yaw"
    | "brakes"
    | "gearPosition"
    | "gearTarget"
    | "flapsValue"
    | "flapsPosition"
    | "flapsTarget"
    | "airbrakesPosition"
    | "airbrakesTarget"
    | "groundContact"
    | "rollingSpeed"
    | "maxAngularVRatio"
    | "kias"
    | "tas"
    | "mach"
    | "altitude"
    | "tenFeet"
    | "hundredFeet"
    | "thousandFeet"
    | "climbrate"
    | "heading"
    | "heading360"
    | "atilt"
    | "aroll"
    | "relativeWind"
    | "windSpeed"
    | "view"
    | `strobe${"" | 2 | 3}`
    | "random"
    | "parkingBrake"
    | "stalls"
    | "aoa"
    | "altThousands"
    | "climbrateABS"
    | "climbrateLog"
    | "night"
    | "optionalAnimatedPartPosition"
    | "cameraMode"
    | "hours"
    | "invGearPosition"
    | "altTensShift"
    | "altTens"
    | "altTenThousands"
    | "machUnits"
    | "machTens"
    | "machTenth"
    | "machHundredth"
    | "arrestingHookTension"
    | "accX"
    | "accY"
    | "accZ"
    | "trim"
    | "rawPitch"
    | "rawpitch"
    | "rawYaw"
    | "envelopeTemp"
    | "function()"
    | "ktas"
    | "gearTraget"
    // GeoFS assigns 2 custom values to all suspension parts, a Rotation value and a Suspension value
    | `${DefinitionBase["parts"][number]["name"]}Rotation`
    | `${DefinitionBase["parts"][number]["name"]}Suspension`;
}

interface AnimationWithFunction extends AnimationBase {
  /**
   * A function to run. Must return a value that will be used as the animation value.
   */
  function: `{${string}return${" " | ""}${string}}`;
}

export type AnimationValues = AnimationWithValue["value"];

export type Animation =
  | AnimationWithValue
  | AnimationWithFunction
  | AnimationBase;

interface Part extends Base {
  /**
   * Part's name/id.
   */
  name: string | "undefined";

  /**
   * Parent's name.
   */
  parent?: string | undefined;

  type?: "frame" | "root" | "none" | string | undefined;

  /**
   * Name of the DAE model declared in KML.
   */
  model?: string | undefined;

  /**
   * Name of the node in the root model.
   *
   * ! A "root" part must be declared to load the main GLTF file.
   */
  node?: string | undefined;

  /**
   * Relative to the parent (or root).
   */
  position?: [number, number, number] | null | undefined;

  /**
   * Relative to the parent (or root).
   */
  rotaition?: [number, number, number] | undefined;
  rotation?: [number, number, number] | undefined;

  /**
   * Relative to the parent (or root).
   */
  scale?: [number, number, number] | undefined;

  /**
   * The direction in which the force (lift, thrust) will be applied.
   */
  forceDirection?: "X" | "Y" | "Z" | undefined;

  points?:
    | {
        /**
         * The source of force vector relative to the part origin
         */
        forceSourcePoint: [number, number, number];

        [key: string]: [number, number, number];
      }
    | undefined;

  /**
   * Specify where, on the model, collisions with the ground should occur - best used on the "body" part of the aircraft (type=frame).
   */
  collisionPoints?: [number, number, number][] | undefined;

  /**
   * Array of animations to be applied.
   * @see {Animation} for animation implementation.
   */
  animations?: Animation[] | "" | undefined;

  light?: "white" | "red" | "green" | "" | undefined;

  // Properties taken from aircraft definitions:
  textures?:
    | {
        index: number;
        filename: string;
      }[]
    | undefined;

  buoyancy?: number | undefined;
  noCastShadows?: boolean | undefined;
  noReceiveShadows?: boolean | undefined;
  propwash?: number | undefined;
  include?: string | undefined;
  indices?: number | undefined;
  liftFactor?: number | undefined;
  dragFactor?: number | undefined;

  initialTemperature?: number | undefined;
  volume?: number | undefined;
  heatingSpeed?: number | undefined;
  coolingSpeed?: number | undefined;

  controller?:
    | {
        name: "pitch";
        recenter?: boolean;
        sensitivity?: number;
        ratio: number;
      }
    | undefined;

  area?: number | undefined;
}

interface AirfoilPartBasics extends Omit<Part, "type"> {
  type: "airfoil";

  /**
   * Specify if an airfoil is subject to stall.
   */
  stalls?: boolean | undefined;
  /**
   * @see stalls
   */
  stall?: boolean | undefined;

  /**
   * Angle of Attack (AoA) in deg. at which stall occurs.
   */
  stallIncidence?: number | undefined;

  /**
   * Angle of Attack (AoA) at which, lift equals 0 - lift decreases linearly from stallIncidence
   */
  zeroLiftIncidence?: number | undefined;

  span?: number | undefined;
  chord?: number | undefined;
  efficiencyFactor?: number | undefined;
  aspectRatio?: number | undefined;
}

type AirfoilPart = (
  | {
      /**
       * An arbitrary lift coefficient for airfoils (not used if "area" is specified).
       */
      liftFactor: number;

      /**
       * An arbitrary drag coefficient for airfoils (not used if "area" is specified).
       */
      dragFactor: number;
    }
  | {
      /**
       * The airfoil surface area - lift and drag will be computed from this.
       */
      area: number;
    }
) &
  AirfoilPartBasics;

interface EnginePart extends Omit<Part, "type"> {
  type: "engine";

  /**
   * In Newton.
   */
  thrust: number;

  /**
   * In Newton.
   */
  afterBurnerThrust?: number | undefined;

  /**
   * In Newton.
   */
  reverseThrust?: number | undefined;

  /**
   * Does the engine generate contrail
   */
  contrail?: boolean | undefined;
}

interface WheelPart extends Omit<Part, "type"> {
  type: "wheel" | "pad";

  suspension: {
    motion?: "rotation" | "translate" | undefined;
    axis?: "X" | "Y" | "Z" | undefined;
    ratio?: number | undefined;
    stiffness: number;
    damping: number;

    restLength?: number | undefined;
    hardPoint?: number | undefined;
  };

  contactType?: string | undefined;
}

interface HookPart extends Omit<Part, "type"> {
  type: "hook";

  hook: {
    strength: number;
  };
}

interface BaseContactProperty {
  /**
   * Static friction coefficient - when not slipping.
   */

  frictionCoef: number;

  /**
   * Dynamic friction coefficient - during slip.
   */
  dynamicFriction: number;

  /**
   * A damping factor to try and hide jerkiness of collisions in some cases.
   */
  damping: number;
}

interface Instrument extends Base {
  /**
   * only for visibility for now
   */
  animations?: Animation[] | undefined;

  cockpit?:
    | {
        /**
         * In cockpit position relative to origin
         */
        position: [number, number, number];

        scale: number;
      }
    | undefined;

  overlay?:
    | {
        url: string;

        size: {
          x: number | null;
          y: number | null;
        };

        anchor: {
          x: number;
          y: number;
        };

        position: {
          x: number;
          y: number;
        };

        offset?:
          | {
              x: number;
              y: number;
            }
          | undefined;

        iconFrame?:
          | {
              x: number;
              y: number;
            }
          | undefined;

        drawOrder?: number | undefined;

        rescale?: boolean | undefined;

        rescalePosition?: boolean | undefined;

        overlays?: Instrument["overlay"][] | undefined;

        animations?: Animation[] | undefined;

        name?: string | undefined;
      }
    | undefined;

  center?: boolean | undefined;

  stackX?: boolean | undefined;
}

interface Sound extends Base {
  /**
   * Sound id.
   */
  id: string;

  /**
   * URL to the mp3 file
   */
  file: string;

  /**
   * Sound effects
   */
  effects?:
    | Partial<
        Record<
          "volume" | "pitch" | "start" | "stop" | "play",
          DistributiveOmit<Animation, "type" | "axis"> & {
            duration?: number;
          }
        >
      >
    | undefined;

  /**
   * duration of fade-in/fade-out in ms
   */
  fadeDuration?: number;

  cut?: [number, number] | undefined;

  lowLatency?: boolean | undefined;

  loop?: boolean | undefined;
  retard?: number | undefined;
}

/**
 * For some reason, GeoFS requires the definition to be an array,
 * even though there is only one object.
 */
interface DefinitionBase extends Base {
  /**
   * Total mass in Kg.
   */
  mass: number;

  /**
   * Tweak the rotation inertia.
   */
  tensorFactor?: number | undefined;

  /**
   * A global drag coefficient.
   */
  dragFactor?: number | undefined;

  /**
   * To move the center of mass of the aircraft
   */
  com?: [number, number, number] | undefined;

  /** @see {@link com} */
  COM?: [number, number, number] | undefined;

  /**
   * In seconds
   */
  gearTravelTime?: number | undefined;

  /**
   * Seconds per degrees.
   */
  flapsTravelTime?: number | null | undefined;

  /**
   * Number of positions for the flaps.
   */
  flapsSteps?: number | null | undefined;

  /**
   * Positions in degrees for each flap step.
   */
  flapsPositions?: number[] | undefined;

  /**
   * In seconds.
   */
  airbrakesTravelTime?: number | undefined;

  /**
   * Are thrust reversers available.
   */
  reverse?: boolean | undefined;

  /**
   * The altitude in feet at which the engine does not produce any thrust (linear from sea level).
   */
  zeroThrustAltitude?: number | undefined;

  /**
   * Minimum RPM of the engine.
   */
  minRPM: number;

  /**
   * Maximum RPM of the engine.
   */
  maxRPM: number;

  /**
   * Affect the spinning of propellers.
   */
  driveRatio: number;

  /**
   * Ratio to affect the time it takes for the engine to reach a certain RPM value.
   */
  engineInertia: number;

  /**
   * In seconds - to match the startup sound.
   */
  startupTime?: number | undefined;

  /**
   * Compensate for landing gear height at initialization (when on ground)
   */
  startAltitude: number;

  /**
   * Initial tilt angle (when on ground).
   */
  startTilt?: number | undefined;

  /**
   * Initial speed when in the air, in knots.
   */
  minimumSpeed: number;

  /**
   * Ratio of head (camera) motion due to acceleration.
   */
  motionSensitivity?: number | undefined;

  /**
   * When set to true, enable the default autopilot.
   *
   * When set to an object, enable an autopilot with custom PID controls. All configuration is optional.
   *
   * Leave empty to disbale the autopilot (same as false).
   */
  autopilot?:
    | boolean
    | "true"
    | "false"
    | {
        /**
         * Controller for aircraft pitch angle based on altitude target
         */
        pitchAnglePID?: [number, number, number];

        /**
         * Controller for elevator deflection based on pitchAnglePID output.
         */
        elevatorPitchPID?: [number, number, number];

        /**
         * Controller for bank angle based on heading target.
         */
        bankAnglePID?: [number, number, number];

        /**
         * Controller for ailerons deflection based on bankAnglePID output.
         */
        aileronsRollPID?: [number, number, number];

        /**
         * Controller for throttle based on speed target.
         */
        throttlePID?: [number, number, number];

        /**
         * Maximum speed related deflection divider
         * @default 1.5
         */
        effectivenessRatioMaximum?: number;

        /**
         * Climb rate before speed related multiplier.
         * @default 500
         */
        baseClimbrate?: number;

        /**
         * Descent rate before speed related multiplier
         * @default -500
         */
        baseDescentrate?: number;
        /**
         * @default 20
         */
        maxPitchAngle?: number;
        /**
         * @default -20
         */
        minPitchAngle?: number;
        /**
         * @default 30
         */
        maxBankAngle?: number;

        yawBankAngleRatio?: number;
      }
    | undefined;

  /**
   * Part defined for the aircraft can be associated to a 3D model a node in the model or simply have a functional role (airfoil, engine, etc.).
   *
   * Applicable properties vary with part's type (frame, airfoil, engine, wheel).
   */
  parts: (Part | AirfoilPart | EnginePart | WheelPart | HookPart)[];

  /**
   * Contact properties must be specified for part types that declares collisionPoints.
   */
  contactProperties: Omit<
    {
      [key: string]: BaseContactProperty;
    },
    "wheel"
  > & {
    wheel?:
      | (BaseContactProperty & {
          rollingFriction: number;

          /**
           * arbitrary minimum speed at which the wheel lock (static rest)
           */
          lockSpeed?: number;
        })
      | undefined;
  };

  instruments:
    | Partial<
        Record<
          | "airspeed"
          | "airspeedJet"
          | "airspeedSupersonic"
          | "altitude"
          | "attitude"
          | "attitudeJet"
          | "vario"
          | "varioJet"
          | "compass"
          | "rpm"
          | "rpmJet"
          | "spoilers"
          | "brakes"
          | "gear"
          | "flaps",
          | Instrument
          | "" /* for not overwriting the instrument */
          | `${string}` /*3460, for example*/
        >
      >
    | Record<string, Instrument>;

  /**
   * For legacy reasons.
   */
  soundSet?: "player" | undefined;

  /**
   * "startup" and "shutdown" sound ids are hardcoded.
   */
  sounds: Sound[];

  cameras: {
    follow: unknown;
    cockpit: unknown;
  } & {
    [key: string]: unknown;
  };

  // Properties taken from aircraft definitions
  cockpitShadowMapMaxDistance?: number | undefined;
  zeroRPMAltitude?: number | undefined;
  shutdownTime?: number | undefined;
  cockpitModel?: boolean | undefined;
  shadowBox: [number, number];
  optionalAnimatedPartTravelTime?: number | undefined;
  cockpitScaleFix?: number | undefined;
  shadowFile?: string | undefined;
  shadowURL?: string | undefined;
  dragCoefficient?: number | undefined;
  brakeDamping?: number | undefined;
  scale?: number | undefined;
}

/**
 * The aircraft definition passed into GeoFS.
 * Typings taken from {@link https://www.geo-fs.com/backend/aircraft/doc.html|The GeoFS Aircraft Documentation}
 */
type Definition = [DefinitionBase & Partial<PluginsDefinition>];
export default Definition;

interface PluginsDefinition {
  fmc: {
    [key in "climb" | "descent"]: number[][];
  };

  nosewheel: number[];

  platform: string;
  version: string;
  maxLimits: number[];

  type: string;
  typeIndex: string;
}
