/**
 * Can be accessed with `geofs.api`.
 * @module api
 * @category geofs
 */
import { FrameCallback } from "../index";
import type * as Cesium from "cesium";
import type * as L from "leaflet";
import * as runways from "./runways";

declare class LTileLayerFallback extends L.TileLayer {
  options: L.TileLayerOptions & { minNativeZoom: number };
  constructor(
    urlTemplate: string,
    options?: L.TileLayerOptions & { minNativeZoom: number }
  );
}

declare class LPolylinePlotter extends L.Polyline {
  _lineMarkers: L.Marker[];
  _editIcon: L.DivIcon;
  _halfwayPointMarkers: L.Marker[];
  _existingLatLngs: L.LatLng[];
  options: L.PolylineOptions & {
    readOnly: boolean;
  };
  constructor(
    latlngs: L.LatLngExpression[] | L.LatLngExpression[][],
    options?: L.PolylineOptions
  );
  setReadOnly(a: boolean): void;
  _bindMapClick(): void;
  _unbindMapClick(): void;
  _setExistingLatLngs(a: L.LatLng[]): void;
  _replot(): void;
  _getNewMarker(a: L.LatLngExpression, b: L.MarkerOptions): L.Marker;
  _unbindMarkerEvents(a: L.Marker): void;
  _bindMarkerEvents(a: L.Marker): void;
  _bindHalfwayMarker(a: L.Marker): void;
  _unbindHalfwayMarker(a: L.Marker): void;
  _addToMapAndBindMarker(a: L.Marker): void;
  _removePoint(a: L.LeafletEvent): void;
  _onMapClick(a: L.LeafletMouseEvent): void;
  _redrawHalfwayPoints(): void;
  _addHalfwayPoint(a: L.LeafletMouseEvent): void;
  _plotExisting(): void;
  _redraw(): void;
}

export const march2019theTwentyFirst = 2458563;
export const halfADayInSeconds = 43200;
export const overlayBaseZIndex = 60;
export const ALTITUDE_RELATIVE = "ALTITUDE_RELATIVE";
export const CLAMP_TO_GROUND = "CLAMP_TO_GROUND";
export let nativeMouseHandling: false;
export let viewer: Cesium.Viewer;
export let blackMarble: Cesium.ImageryLayer;
export let labels: Cesium.LabelCollection;
export let billboards: {
  default: Cesium.BillboardCollection;
  opaque: Cesium.BillboardCollection;
  translucent: Cesium.BillboardCollection;
};
export let models: Cesium.PrimitiveCollection;
export let camera: Cesium.Camera;

export const imageryColorModifiers: {
  [key: string]: {
    brightness: number;
    contrast: number;
    saturation: number;
    gamma: number;
    hue: number;
  };
};
export const defaultImageryColorModifier: Readonly<
  typeof imageryColorModifiers[string]
>;
export const atmosphereColorModifiers: {
  [key: string]: {
    brightnessShift: number;
    saturationShift: number;
    hueShift: number;
    groundBrightnessShift: number;
    groundSaturationShift: number;
    groundHueShift: number;
    fogBrightness: number;
    cloudsBrightness: number;
  };
};
export const defaultAtmosphereColorModifier: Readonly<
  typeof atmosphereColorModifiers[string]
>;
export const maxRenderingQualityLevel: number;
export const renderingSettings: {
  resolutionScale: number;
  tileCacheSize: number;
  fxaa: boolean;
  maximumScreenSpaceError: number;
  globeLighting: boolean;
  dropShadow: boolean;
  cloudCoverToCloudNumber: number;
  fogScreenSpaceErrorFactor: number;
  fogDensity: number;
  shadowMapSize: number;
  waterResolution: number;
  viewingDistance: number;
  degradedCollisions: boolean;
  lowResRunways: boolean;
};
export const renderingQualityLevels: Readonly<{
  [key in 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7]: typeof renderingSettings;
}>;
export const adaptativeMaxMaximumScreenSpaceError: number;
export const adaptativeTopSpeed: number;
export const adaptativeTopAltitude: number;
export const adaptativeTurnrateRatio: number;
export let altitudeErrorThreshold: number;
export let wrongAltitudeTries: number;
export let oldNormal: number[];
export let normalDotThreshold: number;
export let wrongNormalTries: number;
export let shadowOffset: number;
export let tileLayerConstructor: (
  urlTemplate: string,
  options: L.TileLayerOptions & { minNativeZoom: number }
) => LTileLayerFallback;
export const mapMaxZoom: number;
export const mapOption: {
  minZoom: number;
  maxZoom: number;
  markerZoomAnimation: boolean;
  worldCopyJump: boolean;
  preferCanvas: boolean;
};
export const mapTooltipOptions: {
  permanent: boolean;
};
export const toolTipPositioning: {
  direction: "top" | "right" | "bottom" | "left";
  offset: L.Point;
}[];

export function initWorld(
  a: string,
  b?: Cesium.Viewer.ConstructorOptions
): void;
export function destroyWorld(): void;

export function triggerExplicitRendering(): void;
export function addFrameCallback(
  a: (a: number) => void,
  b: string,
  c: number
): number; // a in the callback is geofs.api.precisionTime
export function removeFrameCallback(a: number, b?: string): void;
export function frameCallbackWrapper(a: number, b: FrameCallback): void;

export function configureOutsideView(): void;
export function configureInsideView(): void;

export function setGlobeLighting(a: boolean): void;
export function setWaterEffect(a: boolean): void;
export function setHD(a: boolean): void;

export function setImageryProvider(
  a: Cesium.ImageryProvider,
  b: boolean,
  c: number,
  d: number,
  e: number
): Cesium.ImageryLayer;

export function setDebugImageryProvider(): void;
export function setTimeAndDate(a: number, b: number): Cesium.JulianDate;
export function setClock(a: number): void;

export function isWebXRAvailable(): boolean;
export function toggleVr(): void;

export function enhanceColors(a: number): void;
export function setImageryColorModifier(
  a: string,
  b: typeof imageryColorModifiers[string]
): void;
export function removeImageryColorModifier(a: string): void;
export function applyImageryColorModifiers(): void;
export function setImageryBrightness(a: number): number;
export function setImageryContrast(a: number): number;
export function setImagerySaturation(a: number): number;
export function setImageryHue(a: number): number;
export function setImageryGamma(a: number): number;

export function setAtmosphereColorModifier(
  a: string,
  b: typeof atmosphereColorModifiers[string]
): void;
export function removeAtmosphereColorModifier(a: string): void;
export function applyAtmosphereColorModifiers(): void;

export function showSun(): void;
export function hideSun(): void;

export function advancedRenderingQuality(): void;

export function renderingQuality(a: number, b?: boolean): void;

export function adaptativeRenderingQuality(): void;

export function useNativeShadows(a: boolean): void;

export function addLabel(
  a: string,
  b: number[],
  c: Parameters<typeof labels.add>[0]
): { text: string; position: Cesium.Cartesian3 };
export function updateLabelText(
  a: { text: string; position: Cesium.Cartesian3 },
  b: string
): void;
export function removeLabel(a: Cesium.Label): void;
export function setLabelPosition(
  a: { text: string; position: Cesium.Cartesian3 },
  b: number[]
): void;

export function getGuarantiedGroundAltitude(
  a: number[]
): Promise<[{ height: number }] | Cesium.Cartographic[]>;
export function getGroundAltitude(a: number[], b: unknown /*no clue*/): number;

export function getGroundNormal(a: number[], b: unknown /*no clue*/): number[];

export function createShadow(a: string, b: number): Cesium.Model;
export function setShadowLocationRotation(
  a: Cesium.Model,
  b: number[],
  c: number[],
  d: number[]
): void;

export class Model {
  constructor(
    a: string,
    b: Partial<
      Parameters<typeof Cesium.Model.fromGltf>[0] & { justLoad: boolean }
    >
  );
  _model: Cesium.Model;
  _opacity: number;
  _lla: number[];

  setOpacity(a: number): void;
  setRotation(a: number, b: number): void;
  setScale(a: number): void;
  setPositionOrientationAndScale(a: number[], b?: number[], c?: number[]): void;
  setLocation(a: number[]): void;
  setColor(a: Cesium.Color): void;
  setCssColor(a: string): void;
  changeTexture(a: string, b: string, c?: Cesium.Model): void;
  hide(): void;
  show(): void;
  destroy(): void;
  remove(): void;
}

export function loadModel(
  a:
    | string
    | (Parameters<typeof Cesium.Model.fromGltf>[0] & { justLoad: boolean })
): Cesium.Model;
export function addModelToWorld(a: Cesium.Model): void;
export function changeModelTexture(a: Cesium.Model, b: string, c: string): void;
export function toggleModelShadow(a: Cesium.Model, b: Cesium.ShadowMode): void;
export function removeModelFromWorld(a: Cesium.Model): void;
export function setModelVisibility(a: Cesium.Model, b: boolean): void;
export function setModelOpacity(a: Cesium.Model, b: number): void;
export function destroyModel(a?: Cesium.Model): void;
export function getModelFromScreenCoords(a: number, b: number): Cesium.Model;
export function headingPitchRollScaleToFixedFrame(
  a: Cesium.Cartesian3,
  b: number,
  c: number,
  d: number,
  e: number[]
): Cesium.Matrix4;
export function getPositionOrientationAndScaleMatrix(
  a: number[],
  b?: number[],
  c?: number[]
): Cesium.Matrix4;
export function setModelElevation(a: Cesium.Model, b: number): void;
export function setModelPositionOrientationAndScale(
  a: Cesium.Model,
  b: number[] | number,
  c?: number[] | number,
  d?: number[] | number
): void;

export function getModelNode(
  a: Cesium.Model,
  b: string | number
): Cesium.ModelNode;
export function setModelRotationPosition(
  a: Cesium.Model,
  b?: number[],
  c?: number[]
): void;
export function setNodeRotationTranslationScale(
  a: Cesium.ModelNode,
  b?: number[],
  c?: number[],
  d?: number[]
): void;
export function setNodeScale(a: Cesium.ModelNode, b: number[]): void;
export function setNodeVisibility(a: Cesium.ModelNode, b: boolean): boolean;
export function getNodePosition(a: Cesium.ModelNode): number[];
export function getNodeRotation(a?: Cesium.ModelNode): number[];
export function setEntityPositionOrientation(
  a: Cesium.Model,
  b: number[],
  c: number[]
): void;

export function initAndGetCamera(): Cesium.Camera;
export function getFOV(a: Cesium.Camera): number;
export function setFOV(a: Cesium.Camera, b: number): void;
export function setCameraPositionAndOrientation(
  a: Cesium.Camera,
  b: number[],
  c: number[]
): void;
export function getCameraLla(a: Cesium.Camera): number[];
export function setCameraLookAt(a: Cesium.Camera, b: number[]): void;
export function getHeading(a: Cesium.Camera): number;

export function debug(a: boolean): void;

export function getLlaFromScreencoordDepth(
  a: number,
  b: number,
  c: number
): number[];
export function getScreenCoordFromLla(a: number[]): Cesium.Cartesian2;
export function xyz2lla(a: number[], b: number[]): number[];

export class cssTransform {
  constructor();
  _$element?: JQuery | undefined;
  positionY: number;
  positionX: number;
  rotation: number;
  offset: {
    x: number;
    y: number;
  };
  static rotationThreshold: number;
  static translationThreshold: number;
  image?: HTMLImageElement | undefined;
  naturalSize?:
    | {
        x: number;
        y: number;
      }
    | undefined;

  setDrawOrder(a: number): void;
  setUrl(a: string): void;
  setText(a: string): void;
  setTitle(a: string): void;
  setClass(a: string): void;
  setStyle(a: string): void;
  loaded(): void;
  setFrameSize(a: { x: number; y: number }): void;
  setVisibility(a: boolean): void;
  setAnchor(a: { x: number; y: number }): void;
  setRotationCenter(a: { x: number; y: number }): void;
  setSize(a: { x: number; y: number }): void;
  setPosition(a: { x: number; y: number }): void;
  setPositionX(a: number): void;
  setPositionY(a: number): void;
  setPositionOffset(a: { x: number; y: number }): void;
  setOpacity(a: number): void;
  setRotation(a: number): void;
  destroy(): void;
}

export class billboard {
  constructor(
    a: number[],
    b: string,
    c: Partial<{
      collection: string;
      image: string;
      opacity: number;
      scale: number;
      rotation: number;

      geofsFixCameraRotation: boolean;
    }>
  );
  _billboard: Cesium.BillboardCollection;
  _lla: number[];
  _options: Partial<{
    collection: string;
    image: string;
    opacity: number;
    scale: number;
    rotation: number;
    geofsFixCameraRotation: boolean;
  }>;
  rotationFixCallback?: number | undefined;

  setUrl(a: string): void;
  setVisibility(a: boolean): void;
  setColor(a: Cesium.Color): void;
  setCssColor(a: string): void;
  setOpacity(a: number): void;
  setRotation(a: number): void;
  setScale(a: number): void;
  setLocation(a: number[]): void;
  getLla(a?: any /* a isn't used in the export function*/): number[];
  fixCameraRotation(): void;
  destroy(): void;
}

export class groundTexture {
  constructor(
    a: number[],
    b: string,
    c: Partial<{
      width: number;
      image: string;
      opacity: number;
      scale: number;
      rotation: number;
    }>
  );
  lla: number[];
  _options: {
    width: number;
    image: string;
    position: Cesium.Cartesian3;
    opacity?: number;
    scale?: number;
    rotation?: number;
  };
  _entity: Cesium.Entity;

  setUrl(a: string): void;
  setVisibility(a: boolean): void;
  setColor(a: Cesium.Color): void;
  setOpacity(a: number): void;
  setRotation(a: number): void;
  setScale(a: number): void;
  getLla(a?: any /* a isn't used in the export function */): number[];
  destroy(): void;
}

export function notify(a: string, b?: string, c?: any /* never used?*/): void;

export namespace analytics {
  export function init(): void;
  export function event(a: string, b: string, c?: string, d?: number): void;
}

export function postMessage(a: any /* can accept anything */): void;

export class Canvas {
  constructor(
    a: Partial<{
      width: number;
      height: number;
      color: string;
      patchSize: number;
    }>
  );
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  _options: Partial<{
    width: number;
    height: number;
    color: string;
    patchSize: number;
  }>;
  patchSize: number;
  _imageElements: HTMLImageElement[];

  loadImage(a: string | string[]): Promise<HTMLCanvasElement>;
  paintAndResolve(a: (value: HTMLCanvasElement) => void): void;
  makeImageElement(): HTMLImageElement;
  getImageAsURLData(): string;
  destroy(): void;
}

export class FlatRunwayTerrainProvider {
  constructor(
    a: Partial<{
      baseProvider: Cesium.TerrainProvider;
      maximumLevel: number;
      bypass: boolean;
    }>
  );
  baseProvider: Cesium.TerrainProvider;
  regions: {
    [name: string]: number[];
  };
  tiles: Record<string, unknown>;
  minFlatteningLevel: number;
  defaultMinFlatteningLevel: number;
  maximumLevel: number;
  defaultMaximumLevel: number;
  flatten: boolean;
  aName: "FlatRunwayTerrainProvider";

  get availability(): Cesium.TileAvailability;
  get credit(): Cesium.Credit;
  get errorEvent(): Cesium.Event;
  get hasVertexNormals(): boolean;
  get hasWaterMask(): boolean;
  get ready(): boolean;
  get readyPromise(): Promise<boolean>;
  get tilingScheme(): Cesium.TilingScheme;

  getLevelMaximumGeometricError(a: number): number;
  getTileDataAvailable(a: number, b: number, c: number): boolean;
  setMaximumLevel(a: number): void;
  addRunway(a: runways.runway): void;
  requestTileGeometry(
    a: number,
    b: number,
    c: number,
    d: Cesium.Request
  ): Cesium.TerrainData;
  getPromise(a: any, b: any, c: any): Promise<any>; // no clue
}
export namespace waterDetection {
  export let initialized: boolean;
  export let canvasAPI: Canvas | null;
  export let blur: number;
  export let waterColour: string;
  export let depthSlope: number;
  export let depthOffset: number;
  export let waterBlueColorRange: number[];
  export let waterRedColorRange: number[];
  export let tileSize: number;
  export let zoomLevel: number;
  export let lastTileURL: string | null;
  export let lastDepth: number;

  export function create(): void;
  export function reset(): void;
  export function getWaterDepth(a: number, b: number): string | number | null;
  export function destroy(): void;
}

export class map {
  _holder: HTMLElement;
  map: L.Map;
  icons: {
    yellow: L.Icon;
    blue: L.Icon;
    traffic: L.Icon;
  };

  constructor(
    a: Partial<{ zoom: number; holder: JQuery }>,
    b: number,
    c: number
  );
  init(): void;
  updateMap(a: number, b: number): void;
  getCenterLla(a?: number, b?: number): number[];
  addLayeredMarker(
    a: string,
    b: [string, number, number, number, number, number] & {
      marker: L.Marker;
    },
    c: number,
    d: number
  ): void;
  getVisibleTiles(
    a: L.LatLngBounds,
    b: number
  ): { [key in `${string}/${string}`]: true };
  showTile(
    a: typeof map.runwayLayers["major" | "minor"],
    b: `${string}/${string}`
  ): void;
  hideTile(
    a: typeof map.runwayLayers["major" | "minor"],
    b: `${string}/${string}`
  ): void;
  updateMarkerLayers(): void;
  setGenericLocationPopup(): void;
  mapClickHandler(a: Event): void;
  setTooltipVisibility(a: boolean): void;
}
export namespace map {
  export let runwayMarkerRadius: number;
  export let defaultLayer: {
    minZoom: number;
    maxZoom: number;
    tileSize: number;
    tiles: Record<string, unknown>;
  };
  export let instance: map;
  export let runwayLayers: {
    [key in "major" | "minor"]: {
      minZoom: number;
      maxZoom: number;
      tileSize: number;
      tiles: {
        [key in `${string}/${string}`]: Array<
          [string, number, number, number, number, number] & {
            marker: L.CircleMarker;
          }
        >;
      };
      visibileTiles?:
        | {
            [key in `${string}/${string}`]: Array<
              [string, number, number, number, number, number] & {
                marker: L.CircleMarker;
              }
            >;
          }
        | undefined;
    };
  };
  export let majorRunwayMarkers: [];
  export let minorRunwayMarkers: [];
  export let flightPath: null | LPolylinePlotter;
  export let flightPathOn: boolean;

  export function runwayMarkerPopup(a: L.CircleMarker): string;
  export function addRunwayMarker(
    a: typeof map.runwayLayers[
      | "major"
      | "minor"]["tiles"][`${string}/${string}`],
    b?: map
  ): L.CircleMarker;

  export class planeMarker {
    style: string;
    apiMap: typeof map.instance;
    label: string;
    _marker: L.Marker;

    constructor(
      a: number,
      b: number,
      c: map,
      d?: string,
      e?: number,
      f?: string
    );
    updatePlaneMarker(a: number, b: number, c: number, d?: string): void;
    destroyPlaneMarker(a?: any /* a isn't used */): void;
    resetTooltip(): void;
  }

  export function createPath(
    a: typeof map.instance,
    b: L.LatLngExpression[]
  ): void;
  export function stopCreatePath(): void;
  export function clearPath(): void;
  export function getPathPoints(): [];
  export function setPathPoints(a: L.LatLngExpression[]): void;
}

export function reverserGeocode(
  a: string,
  b: (a: number, b: number) => void
): void;
export function checkIfMobile(): void;
export function isMobile(): boolean;
export function hasOrientation(): boolean;
export function getPlatform(): null | string;
export function doRetro(): void;
