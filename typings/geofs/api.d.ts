import { FrameCallback } from "../index";
import type * as Cesium from "cesium";
import type * as L from "leaflet";

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

declare namespace api {
  const march2019theTwentyFirst = 2458563;
  const halfADayInSeconds = 43200;
  const overlayBaseZIndex = 60;
  const ALTITUDE_RELATIVE = "ALTITUDE_RELATIVE";
  const CLAMP_TO_GROUND = "CLAMP_TO_GROUND";
  let nativeMouseHandling: false;
  let viewer: Cesium.Viewer;
  let blackMarble: Cesium.ImageryLayer;
  let labels: Cesium.LabelCollection;
  let billboards: {
    default: Cesium.BillboardCollection;
    opaque: Cesium.BillboardCollection;
    translucent: Cesium.BillboardCollection;
  };
  let models: Cesium.PrimitiveCollection;
  let camera: Cesium.Camera;

  const imageryColorModifiers: {
    [key: string]: {
      brightness: number;
      contrast: number;
      saturation: number;
      gamma: number;
      hue: number;
    };
  };
  const defaultImageryColorModifier: Readonly<
    typeof imageryColorModifiers[string]
  >;
  const atmosphereColorModifiers: {
    [key: string]: {
      brightnessShift: number;
      saturationShift: number;
      hueShift: number;
      groundBrightnessShift: number;
      groundSaturationShift: number;
      groundHueShift: number;
      fogBrightness: number;
      cloudsBrightnes: number;
    };
  };
  const defaultAtmosphereColorModifier: Readonly<
    typeof atmosphereColorModifiers[string]
  >;
  const maxRenderingQualityLevel: number;
  const renderingSettings: {
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
  const renderingQualityLevels: Readonly<{
    [key in 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7]: typeof renderingSettings;
  }>;
  const adaptativeMaxMaximumScreenSpaceError: number;
  const adaptativeTopSpeed: number;
  const adaptativeTopAltitude: number;
  const adaptativeTurnrateRatio: number;
  let altitudeErrorThreshold: number;
  let wrongAltitudeTries: number;
  let oldNormal: number[];
  let normalDotThreshold: number;
  let wrongNormalTries: number;
  let shadowOffset: number;
  let tileLayerConstructor: (
    urlTemplate: string,
    options: L.TileLayerOptions & { minNativeZoom: number }
  ) => LTileLayerFallback;
  const mapMaxZoom: number;
  const mapOption: {
    minZoom: number;
    maxZoom: number;
    markerZoomAnimation: boolean;
    worldCopyJump: boolean;
    preferCanvas: boolean;
  };
  const mapTooltipOptions: {
    permanent: boolean;
  };
  const toolTipPositioning: {
    direction: "top" | "right" | "bottom" | "left";
    offset: L.Point;
  }[];

  function initWorld(a: string, b?: Cesium.Viewer.ConstructorOptions): void;
  function destroyWorld(): void;

  function triggerExplicitRendering(): void;
  function addFrameCallback(
    a: (a: number) => void,
    b: string,
    c: number
  ): number; // a in the callback is geofs.api.precisionTime
  function removeFrameCallback(a: number, b?: string): void;
  function frameCallbackWrapper(a: number, b: FrameCallback): void;

  function configureOutsideView(): void;
  function configureInsideView(): void;

  function setGlobeLighting(a: boolean): void;
  function setWaterEffect(a: boolean): void;
  function setHD(a: boolean): void;

  function setImageryProvider(
    a: Cesium.ImageryProvider,
    b: boolean,
    c: number,
    d: number,
    e: number
  ): Cesium.ImageryLayer;

  function setDebugImageryProvider(): void;
  function setTimeAndDate(a: number, b: number): Cesium.JulianDate;
  function setClock(a: number): void;

  function isWebXRAvailable(): boolean;
  function toggleVr(): void;

  function enhanceColors(a: number): void;
  function setImageryColorModifier(
    a: string,
    b: typeof api.imageryColorModifiers[string]
  ): void;
  function removeImageryColorModifier(a: string): void;
  function applyImageryColorModifiers(): void;
  function setImageryBrightness(a: number): number;
  function setImageryContrast(a: number): number;
  function setImagerySaturation(a: number): number;
  function setImageryHue(a: number): number;
  function setImageryGamma(a: number): number;

  function setAtmosphereColorModifier(
    a: string,
    b: typeof api.atmosphereColorModifiers[string]
  ): void;
  function removeAtmosphereColorModifier(a: string): void;
  function applyAtmosphereColorModifiers(): void;

  function showSun(): void;
  function hideSun(): void;

  function advancedRenderingQuality(): void;
  // TODO preferences
  function renderingQuality(a: { [key: string]: any }, b: boolean): void;

  function adaptativeRenderingQuality(): void;

  function useNativeShadows(a: boolean): void;

  function addLabel(
    a: string,
    b: number[],
    c: Parameters<typeof labels.add>[0]
  ): { text: string; position: Cesium.Cartesian3 };
  function updateLabelText(
    a: { text: string; position: Cesium.Cartesian3 },
    b: string
  ): void;
  function removeLabel(a: Cesium.Label): void;
  function setLabelPosition(
    a: { text: string; position: Cesium.Cartesian3 },
    b: number[]
  ): void;

  function getGuarantiedGroundAltitude(
    a: number[]
  ): Promise<[{ height: number }] | Cesium.Cartographic[]>;
  function getGroundAltitude(a: number[], b: unknown /*no clue*/): number;

  function getGroundNormal(a: number[], b: unknown /*no clue*/): number[];

  function createShadow(a: string, b: number): Cesium.Model;
  function setShadowLocationRotation(
    a: Cesium.Model,
    b: number[],
    c: number[],
    d: number[]
  ): void;

  class Model {
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
    setPositionOrientationAndScale(
      a: number[],
      b?: number[],
      c?: number[]
    ): void;
    setLocation(a: number[]): void;
    setColor(a: Cesium.Color): void;
    setCssColor(a: string): void;
    changeTexture(a: string, b: string, c?: Cesium.Model): void;
    hide(): void;
    show(): void;
    destroy(): void;
    remove(): void;
  }

  function loadModel(
    a:
      | string
      | (Parameters<typeof Cesium.Model.fromGltf>[0] & { justLoad: boolean })
  ): Cesium.Model;
  function addModelToWorld(a: Cesium.Model): void;
  function changeModelTexture(a: Cesium.Model, b: string, c: string): void;
  function toggleModelShadow(a: Cesium.Model, b: Cesium.ShadowMode): void;
  function removeModelFromWorld(a: Cesium.Model): void;
  function setModelVisibility(a: Cesium.Model, b: boolean): void;
  function setModelOpacity(a: Cesium.Model, b: number): void;
  function destroyModel(a?: Cesium.Model): void;
  function getModelFromScreenCoords(a: number, b: number): Cesium.Model;
  function fromHeadingPitchRoll(
    a: number,
    b: number,
    c: number,
    d?: Cesium.Quaternion
  ): Cesium.Quaternion;
  function headingPitchRollScaleToFixedFrame(
    a: Cesium.Cartesian3,
    b: number,
    c: number,
    d: number,
    e: number[]
  ): Cesium.Matrix4;
  function getPositionOrientationAndScaleMatrix(
    a: number[],
    b?: number[],
    c?: number[]
  ): Cesium.Matrix4;
  function setModelElevation(a: Cesium.Model, b: number): void;
  function setModelPositionOrientationAndScale(
    a: Cesium.Model,
    b: number[] | number,
    c?: number[] | number,
    d?: number[] | number
  ): void;

  function getModelNode(a: Cesium.Model, b: string | number): Cesium.ModelNode;
  function setModelRotationPosition(
    a: Cesium.Model,
    b?: number[],
    c?: number[]
  ): void;
  function setNodeRotationTranslationScale(
    a: Cesium.ModelNode,
    b?: number[],
    c?: number[],
    d?: number[]
  ): void;
  function setNodeScale(a: Cesium.ModelNode, b: number[]): void;
  function setNodeVisibility(a: Cesium.ModelNode, b: boolean): boolean;
  function getNodePosition(a: Cesium.ModelNode): number[];
  function getNodeRotation(a?: Cesium.ModelNode): number[];
  function setEntityPositionOrientation(
    a: Cesium.Model,
    b: number[],
    c: number[]
  ): void;

  function initAndGetCamera(): Cesium.Camera;
  function getFOV(a: Cesium.Camera): number;
  function setFOV(a: Cesium.Camera, b: number): void;
  function setCameraPositionAndOrientation(
    a: Cesium.Camera,
    b: number[],
    c: number[]
  ): void;
  function getCameraLla(a: Cesium.Camera): number[];
  function setCameraLookAt(a: Cesium.Camera, b: number[]): void;
  function getHeading(a: Cesium.Camera): number;

  function debug(a: boolean): void;

  function getLlaFromScreencoordDepth(
    a: number,
    b: number,
    c: number
  ): number[];
  function getScreenCoordFromLla(a: number[]): Cesium.Cartesian2;
  function xyz2lla(a: number[], b: number[]): number[];

  class cssTransform {
    constructor();
    _$element?: JQuery;
    positionY: number;
    positionX: number;
    rotation: number;
    offset: {
      x: number;
      y: number;
    };
    static rotationThreshold: number;
    static translationThreshold: number;
    image?: HTMLImageElement;
    naturalSize?: {
      x: number;
      y: number;
    };

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

  class billboard {
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
    rotationFixCallback?: number;

    setUrl(a: string): void;
    setVisibility(a: boolean): void;
    setColor(a: Cesium.Color): void;
    setCssColor(a: string): void;
    setOpacity(a: number): void;
    setRotation(a: number): void;
    setScale(a: number): void;
    setLocation(a: number[]): void;
    getLla(a?: any /* a isn't used in the function*/): number[];
    fixCameraRotation(): void;
    destroy(): void;
  }

  class groundTexture {
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
    getLla(a?: any /* a isn't used in the function */): number[];
    destroy(): void;
  }

  function notify(a: string, b?: string, c?: any /* never used?*/): void;

  namespace analytics {
    function init(): void;
    function event(a: string, b: string, c?: string, d?: number): void;
  }

  function postMessage(a: any /* can accept anything */): void;

  class Canvas {
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

  class FlatRunwayTerrainProvider {
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
    /* TODO runway(s?) */
    addRunway(a: any): void;
    requestTileGeometry(
      a: number,
      b: number,
      c: number,
      d: Cesium.Request
    ): Cesium.TerrainData;
    getPromise(a: any, b: any, c: any): Promise<any>; // no clue
  }
  namespace waterDetection {
    let initialized: boolean;
    let canvasAPI: Canvas | null;
    let blur: number;
    let waterColour: string;
    let depthSlope: number;
    let depthOffset: number;
    let waterBlueColorRange: number[];
    let waterRedColorRange: number[];
    let tileSize: number;
    let zoomLevel: number;
    let lastTileURL: string | null;
    let lastDepth: number;

    function create(): void;
    function reset(): void;
    function getWaterDepth(a: number, b: number): string | number | null;
    function destroy(): void;
  }

  class map {
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
      a: typeof api.map.runwayLayers["major" | "minor"],
      b: `${string}/${string}`
    ): void;
    hideTile(
      a: typeof api.map.runwayLayers["major" | "minor"],
      b: `${string}/${string}`
    ): void;
    updateMarkerLayers(): void;
    setGenericLocationPopup(): void;
    mapClickHandler(a: Event): void;
    setTooltipVisibility(a: boolean): void;
  }
  namespace map {
    let runwayMarkerRadius: number;
    let defaultLayer: {
      minZoom: number;
      maxZoom: number;
      tileSize: number;
      tiles: Record<string, unknown>;
    };
    let instance: map;
    let runwayLayers: {
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
        visibileTiles: {
          [key in `${string}/${string}`]: Array<
            [string, number, number, number, number, number] & {
              marker: L.CircleMarker;
            }
          >;
        };
      };
    };
    let majorRunwayMarkers: [];
    let minorRunwayMarkers: [];
    let flightPath: null | LPolylinePlotter;
    let flightPathOn: boolean;

    function runwayMarkerPopup(a: L.CircleMarker): string;
    function addRunwayMarker(
      a: typeof api.map.runwayLayers[
        | "major"
        | "minor"]["tiles"][`${string}/${string}`],
      b?: map
    ): L.CircleMarker;

    class planeMarker {
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

    function createPath(a: typeof map.instance, b: L.LatLngExpression[]): void;
    function stopCreatePath(): void;
    function clearPath(): void;
    function getPathPoints(): [];
    function setPathPoints(a: L.LatLngExpression[]): void;
  }

  function reverserGeocode(a: string, b: (a: number, b: number) => void): void;
  function checkIfMobile(): void;
  function isMobile(): boolean;
  function hasOrientation(): boolean;
  function getPlatform(): null | string;
  function doRetro(): void;
}
export default api;
