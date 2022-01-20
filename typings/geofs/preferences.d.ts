type DefaultOptions =
  | "Toggle Autopilot"
  | "Bank left"
  | "Bank right"
  | "Pitch down"
  | "Pitch up"
  | "Steer left"
  | "Steer right"
  | "Brakes"
  | "Parking brake"
  | "Increase throttle"
  | "Decrease throttle"
  | "PgUp"
  | "PgDwn"
  | "Elevator trim up"
  | "Elevator trip down"
  | "Elevator trim neutral"
  | "Engine switch (on/off)"
  | "Gear toggle (up/down)"
  | "Lower flaps"
  | "Raise flaps"
  | "Airbrake toggle (on/off)"
  | "Optional Animated Part toggle (on/off)";

export interface preferencesDefault {
  aircraft: string;
  coordinates: string;
  controlMode: "mouse" | "keyboard" | "joystick" | "touch";
  keyboard: {
    sensitivity: number;
    exponential: number;
    mixYawRoll: boolean;
    mixYawRollQuantity: number;
    keys: {
      [key in DefaultOptions | string]: {
        keycode: number;
        label: string;
      };
    };
  };
  mouse: {
    sensitivity: number;
    exponential: number;
    mixYawRoll: boolean;
    mixYawRollQuantity: number;
  };
  joystick: {
    sensitivity: number;
    exponential: number;
    mixYawRoll: boolean;
    mixYawRollQuantity: number;
    axis: {
      pitch: number;
      roll: number;
      yaw: number;
      throttle: number;
    };
    multiplier: {
      pitch: boolean;
      roll: boolean;
      yaw: boolean;
      throttle: boolean;
    };
    buttons: {
      [key in 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7]:
        | "setBrakes"
        | "setElevatorTrimDown"
        | "setElevatorTrimUp"
        | "setFlapsUp"
        | "setFlapsDown"
        | "setGear"
        | "setAirbrakes"
        | "setOptionalAnimatedPart";
    };
  };
  orientation: {
    sensitivity: number;
    exponential: number;
    mixYawRoll: boolean;
    mixYawRollQuantity: number;
    axis: {
      pitch: number;
      roll: number;
      yaw: number;
    };
    multiplier: {
      pitch: boolean;
      roll: boolean;
      yaw: boolean;
    };
  };
  touch: {
    sensitivity: number;
    exponential: number;
    mixYawRoll: boolean;
    mixYawRollQuantity: number;
    axis: {
      pitch: number;
      roll: number;
      yaw: number;
    };
    multiplier: {
      pitch: boolean;
      roll: boolean;
      yaw: boolean;
    };
  };
  camera: {
    headMotion: boolean;
  };
  weather: {
    sun: boolean;
    localTime: number;
    season: number;
    manual: boolean;
    quality: number;
    advanced: {
      clouds: number;
      fog: number;
      windSpeed: number;
      windDirection: number;
      turbulences: number;
    };
  };
  graphics: {
    quality: number;
    enhanceColors: number;
    cloudShadows: boolean;
    waterEffect: boolean;
    contrails: boolean;
    HD: boolean;
    advanced: {
      resolutionScale: number;
      viewingDistance: number;
      tileCacheSize: number;
      fxaa: boolean;
      globeLighting: boolean;
      shadowQuality: number;
      dropShadow: boolean;
      cloudDensity: number;
      waterResolution: number;
    };
  };
  interface: {
    transparent: number;
  };
  crashDetection: boolean;
  showPapi: boolean;
  multiplayer: boolean;
  showCommunityMultiplayer: boolean;
  adsb: boolean;
  chat: boolean;
  sound: boolean;
}
