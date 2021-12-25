import * as Cesium from "cesium";

declare namespace runways {
  let runwayNumberLimit: number;
  let refreshRate: number;
  let refreshDistanceThreshold: number;
  let modelVisibility: boolean;
  let defaultPadding: number;
  let defaultWidth: number;
  let tileLength: number;
  let modelRunwayWidth: number;
  let thresholdLength: number;
  let modelVerticalOffset: number;
  let imageryLayers: Cesium.ImageryLayer[];
  let imageryOpacity: number;
  let env: {
    [key: string]: {
      promise: Promise<typeof env[string]>;
      image: HTMLImageElement;
      canvas: HTMLCanvasElement;
      context: CanvasRenderingContext2D;
    };
  };
  let nearRunways: {
    [key: number]: runway;
  };

  function redraw(): void;
  function refresh(): void;
  function reset(): void;
  function getNearestRunway(a: number[]): runway | null;
  function getNearRunways(
    a: number[],
    b?: number,
    c?: number
  ): [string, number, number, number, number, number] & { distance: number };
  function setRunwayDistance(
    a: number[],
    b: ([string, number, number, number, number, number] & {
      distance: number;
    })[]
  ): void;
  function setRunwayModelVisibility(a: boolean): void;
  function getRotationCanvas(a: string): Promise<typeof env[string]>;
  function asyncSetImageLayerRotationPosition(
    a: string,
    b: number,
    c: number[],
    d: runway
  ): Promise<void>;

  function generateRunwayId(a: string[]): string;

  class runway {
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
    entities?: Cesium.Entity[] | null;
    creationTime: number | null;

    constructor(
      a: [string, number, number, number, number, number, number],
      b: string
    );

    generateRunwayModel(): void;
    destroyRunwayModel(): void;
    destroy(): void;
  }
}

export default runways;
