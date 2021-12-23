declare namespace weather {
  let dataProxy: string;
  let minimumCloudCover: number;
  let updateRate: number;
  let timeRatio: number;
  let seasonRatio: number;
  let contrailTemperatureThreshold: number;
  let contrailAltitude: number;

  let defaults: {
    cloudCover: number;
    ceiling: number;
    cloudCoverThickness: number;
    fogDensity: number;
    fogCeiling: number;
    fogBottom: number;
    precipitationType: "none" | "snow" | "rain";
    precipitationAmount: number;
    thunderstorm: number;
    visibility: number;
    windDirection: number;
    windSpeedMS: number;
    windGustMS: number;
    windLayerHeight: number;
    windLayerNb: number;
    turbulences: number;
    thermals: number;
    airPressureSL: number;
    airTemperatureSL: number;
  };
  let definitionBounds: {
    cloudCover: number[];
    ceiling: number[];
    fogDensity: number[];
    precipitationAmount: number[];
    thunderstorm: number[];
    windDirection: number[];
    windSpeedMS: number[];
    windGustMS: number[];
    turbulences: number[];
    thermals: number[];
  };
  let definition: typeof defaults & {
    fog: number;
    backgroundFogDensity: number;
    coverHalfThickness: number;
  };
  let manualDefinition: {
    cloudCover: number;
    ceiling: number;
    fogDensity: number;
    fogBottom: number;
    fogCeiling: number;
    precipitationAmount: number;
    precipitationType: "snow" | "rain" | "none";
    thunderstorm: number;
    visibility: number;
    windDirection: number;
    windSpeedMS: number;
    windGustMS: number;
    windLayerHeight: number;
    windLayerNb: number;
    turbulences: number;
    thermals: number;
    airTemperatureSL: number;
    timestamp: number;
  };

  let currentWindVector: number[];
  let currentWindDirection: number;
  let currentWindSpeed: number;
  let currentWindSpeedMs: number;
  let activeWindLayer: number;
  let windLayers: Wind[];
  let interval: number;
  let manualWeatherUIContainer: JQuery;

  let roundedLatitude: number;
  let manualQuality: number;
  let manualSeason: number;
  let manualCloudCover: number;
  let manualTimeOfDay: number;
  let windActive: boolean;
  let belowCeilingBrightness: number;
  let localTime: number;
  let localSeason: number;
  let zuluTime: number;

  function init(a: number[]): void;
  function reset(a: number[]): void;
  function refresh(a: number[]): void;
  function sanitizedDefinition(
    a: typeof defaults | Record<string, unknown>
  ): typeof defaults | Record<string, unknown>;
  function generateDefinition(
    a?: number[] | null,
    b?: boolean
  ): typeof manualDefinition;
  function setManual(): void;
  function setAdvanced(): void;
  function set(
    a?: typeof defaults | Record<string, unknown>,
    b?: boolean
  ): void;
  function update(a: number[]): void;
  function setWindIndicatorVisibility(a: boolean): void;
  function setDateAndTime(a?: number[] | null): void;
  function getLocalTurbulence(a: number[]): number[];

  let thermals: {
    currentVector: number[];
    minradius: number;
    maxradius: number;
    minspeed: number;
    maxspeed: number;
    invertionRange: number;
  };
  function setThermals(a: number[]): void;
  function getLocalThermal(a: number[]): number[];

  class Wind {
    mainDirection: number;
    speedKnots: number;
    speedMs: number;
    vector: number[];
    vectorMs: number[];
    vectorCross: number[];
    floor: number;
    ceiling: number;
    direction: number;
    speed: number;

    constructor(a: number, b: number, c: number, d: number);
    randomize(): void;
    computeAndSet(a?: number[] | null): void;
    computeTerrainLift(a?: number[] | null): number[] & { origin: number[] };
  }

  function initWind(a: number, b: number): void;
  function windOff(): void;

  let atmosphere: {
    airTempAtAltitude: number;
    airTempAtAltitudeKelvin: number;
    airPressureAtAltitude: number;
    airDensityAtAltitude: number;
    contrailAltitude: number;

    init(): void;
    update(a?: number | null): void;
  };
}

export default weather;
