/**
 * Can be accessed with `geofs.runways`.
 * @module runways
 * @category geofs
 */
import * as Cesium from "cesium";

export let runwayNumberLimit: number;
export let refreshRate: number;
export let refreshDistanceThreshold: number;
export let modelVisibility: boolean;
export let defaultPadding: number;
export let defaultWidth: number;
export let tileLength: number;
export let modelRunwayWidth: number;
export let thresholdLength: number;
export let modelVerticalOffset: number;
export let imageryLayers: Cesium.ImageryLayer[];
export let imageryOpacity: number;
export let env: {
  [key: string]: {
    promise: Promise<typeof env[string]>;
    image: HTMLImageElement;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
  };
};
export let nearRunways: {
  [key: number]: runway;
};

export function redraw(): void;
export function refresh(): void;
export function reset(): void;
export function getNearestRunway(a: number[]): runway | null;
export function getNearRunways(
  a: number[],
  b?: number,
  c?: number
): [string, number, number, number, number, number] & { distance: number };
export function setRunwayDistance(
  a: number[],
  b: ([string, number, number, number, number, number] & {
    distance: number;
  })[]
): void;
export function setRunwayModelVisibility(a: boolean): void;
export function getRotationCanvas(a: string): Promise<typeof env[string]>;
export function asyncSetImageLayerRotationPosition(
  a: string,
  b: number,
  c: number[],
  d: runway
): Promise<void>;

export function generateRunwayId(a: string[]): string;

export class runway {
  id: string;
  icao: string;
  location: number[];
  heading: number;
  headingRad: number;
  lengthFeet: number;
  widthFeet: number;
  lengthMeters: number;
  widthMeters: number;
  threshold1: number[];
  padding: number;
  meterlla: number[];
  lengthInLla: number[];
  widthInLla: number[];
  meterAcrossInLla: number[];
  threshold2: number[];
  imageryLayers: Cesium.ImageryLayer[];
  modelExists: boolean;
  entities?: Cesium.Entity[] | null | undefined;
  creationTime: number | null;

  constructor(
    a: [string, number, number, number, number, number, number],
    b: string
  );

  generateRunwayModel(): void;
  destroyRunwayModel(): void;
  destroy(): void;
}
