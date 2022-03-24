/**
 * Can be accessed with `weather`.
 * @module weather
 * @category Global
 */
export let dataProxy: string;
export let minimumCloudCover: number;
export let updateRate: number;
export let timeRatio: number;
export let seasonRatio: number;
export let contrailTemperatureThreshold: number;
export let contrailAltitude: number;

export let defaults: {
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
export let definitionBounds: {
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
export let definition: typeof defaults & {
  fog: number;
  backgroundFogDensity: number;
  coverHalfThickness: number;
};
export let manualDefinition: {
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

export let currentWindVector: number[];
export let currentWindDirection: number;
export let currentWindSpeed: number;
export let currentWindSpeedMs: number;
export let activeWindLayer: number;
export let windLayers: Wind[];
export let interval: number;
export let manualWeatherUIContainer: JQuery;

export let roundedLatitude: number;
export let manualQuality: number;
export let manualSeason: number;
export let manualCloudCover: number;
export let manualTimeOfDay: number;
export let windActive: boolean;
export let belowCeilingBrightness: number;
export let localTime: number;
export let localSeason: number;
export let zuluTime: number;

export function init(a: number[]): void;
export function reset(a: number[]): void;
export function refresh(a: number[]): void;
export function sanitizedDefinition(
  a: typeof defaults | Record<string, unknown>
): typeof defaults | Record<string, unknown>;
export function generateDefinition(
  a?: number[] | null,
  b?: boolean
): typeof manualDefinition;
export function setManual(): void;
export function setAdvanced(): void;
export function set(
  a?: typeof defaults | Record<string, unknown>,
  b?: boolean
): void;
export function update(a: number[]): void;
export function setWindIndicatorVisibility(a: boolean): void;
export function setDateAndTime(a?: number[] | null): void;
export function getLocalTurbulence(a: number[]): number[];

export let thermals: {
  currentVector: number[];
  minradius: number;
  maxradius: number;
  minspeed: number;
  maxspeed: number;
  invertionRange: number;
};
export function setThermals(a: number[]): void;
export function getLocalThermal(a: number[]): number[];

export class Wind {
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

export function initWind(a: number, b: number): void;
export function windOff(): void;

export let atmosphere: {
  airTempAtAltitude: number;
  airTempAtAltitudeKelvin: number;
  airPressureAtAltitude: number;
  airDensityAtAltitude: number;
  contrailAltitude: number;

  init(): void;
  update(a?: number | null): void;
};
