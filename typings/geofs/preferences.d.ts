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
      "Toggle Autopilot": {
        keycode: number;
        label: string;
      };
      "Bank left": {
        keycode: number;
        label: string;
      };
      "Bank right": {
        keycode: number;
        label: string;
      };
      "Pitch down": {
        keycode: number;
        label: string;
      };
      "Pitch up": {
        keycode: number;
        label: string;
      };
      "Steer left": {
        keycode: number;
        label: string;
      };
      "Steer right": {
        keycode: number;
        label: string;
      };
      Brakes: {
        keycode: number;
        label: string;
      };
      "Parking brake": {
        keycode: number;
        label: string;
      };
      "Increase throttle": {
        keycode: 107;
        label: "+";
      };
      "Decrease throttle": {
        keycode: number;
        label: string;
      };
      PgUp: {
        keycode: number;
        label: string;
      };
      PgDwn: {
        keycode: number;
        label: string;
      };
      "Elevator trim up": {
        keycode: number;
        label: string;
      };
      "Elevator trim down": {
        keycode: number;
        label: string;
      };
      "Elevator trim neutral": {
        keycode: number;
        label: string;
      };
      "Engine switch (on/off)": {
        keycode: number;
        label: string;
      };
      "Gear toggle (up/down)": {
        keycode: number;
        label: string;
      };
      "Lower flaps": {
        keycode: number;
        label: string;
      };
      "Raise flaps": {
        keycode: number;
        label: string;
      };
      "Airbrake toggle (on/off)": {
        keycode: number;
        label: string;
      };
      "Optional Animated Part toggle (on/off)": {
        keycode: number;
        label: string;
      };
      [key: string]: { keycode: number; label: string };
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
