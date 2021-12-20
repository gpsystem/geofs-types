import type * as Cesium from "cesium";
import api from "./api";
import runways from "./runways";

declare namespace fx {
  let texture2url: {
    [texture: string]: string;
  };
  let particles: { [id: number]: Particle };
  let particleEmitters: { [id: number]: ParticleEmitter };
  let lightBillboardOptions: {
    altitudeMode: string;
    sizeInMeters: boolean;
    scaleByDistance: Cesium.NearFarScalar;
  };
  let papiBillboardOptions: {
    altitudeMode: string;
    sizeInMeters: boolean;
    scaleByDistance: Cesium.NearFarScalar;
  };
  let maxTimeSinceLastParticleEmission: number;

  function init(): void;
  function update(a: number): void;
  function setParticlesColor(a: Cesium.Color): void;

  class ParticleEmitter {
    _birth: number;
    _id: number;
    _lastEmission: number;
    _on: boolean;
    _options: {
      off: boolean;
      anchor: number[];
      location: number[];
      duration: number;
      rate: number;
      life: number;
      easing: string;
      startOpacity: number;
      endOpacity: number;
      startScale: number;
      endScale: number;

      model: string;
      groundTexture: string;

      rotationAxis: number;
      maximumScale: number;
    };

    constructor(a: Partial<typeof ParticleEmitter.prototype._options>);
    update(): void;
    isOn(): boolean;
    turnOn(): void;
    turnOff(): void;
    destroy(): void;
  }
  class ParticuleEmitter extends ParticleEmitter {}

  class Particle {
    _birth: number;
    _id: number;
    _emitter: ParticleEmitter;
    currentLocation: number[];
    _options: typeof ParticleEmitter.prototype._options & {
      url: string;
      randomizeStartScale: boolean;
      randomizeEndScale: boolean;
      startRotation: number;
      endRotation: number;
      dtOpacity: number;
      dtScale: number;
      dtRotation: number;

      opacity: number;
      scale: number;
      rotation: number;
      color: Cesium.Color;
      distanceDisplayCondition: Cesium.DistanceDisplayCondition;
    };
    _currentScale: number;
    _currentOpacity: number;
    _currentRotation: number;
    _APIElement: api.Model | api.groundTexture | api.billboard;

    constructor(
      a: Partial<typeof Particle.prototype._options>,
      b: ParticleEmitter
    );
    create(): void;
    setColor(a: Cesium.Color): void;
    setLocation(a: number[]): void;
    setRotation(a: number, b: number): void;
    setScale(a: number): void;
    setPositionOrientationAndScale(
      a: number[],
      b?: number[],
      c?: number[]
    ): void;
    update(a: number): void;
    destroy(): void;
  }

  let lastRunwayTestLocation: number[];
  let litRunways: {
    [runway: string]: runwaysLights;
  };
  let particleBillboardOptions: {
    sizeInMeters: boolean;
  };
  let thresholdLightTemplate: [number[], number | "length"][];
  let templateCenter: number[];

  class papi {
    lights: { white: light; red: light }[];
    location: number[];
    papiInterval: number;

    constructor(a: number[], b: number[]);
    refresh(): void;
    destroy(): void;
  }

  class light {
    _billboard: api.billboard;

    constructor(
      a?: number[],
      b?: string,
      c?: ConstructorParameters<typeof api.billboard>[2]
    );
    setVisibility(a: boolean): true;
    setLocation(a: number[]): void;
    destroy(): void;
  }

  let dayNightManager: {
    illumination: number;
    saturation: { valueRamp: number[] };
    brightness: { valueRamp: number[] };
    gamma: { valueRamp: number[] };
    brightnessShift: { valueRamp: number[] };
    groundBrightnessShift: { valueRamp: number[] };
    groundAtmoSaturationShift: { valueRamp: number[] };
    groundHueShift: { valueRamp: number[] };
    cloudsBrightness: { valueRamp: number[] };
    fogBrightness: { valueRamp: number[] };
    blackMarbleVisibility: { valueRamp: number[] };
    blackMarbleAlpha: { valueRamp: number[] };
    init(): void;
    update(a: number[], b: number[]): void;
  };

  let fog: {
    baseColor: Cesium.Color;
    adjustedColor: Cesium.Color;
    brightness: number;
    ppStage?: Cesium.PostProcessStage;
    density?: number;
    create(): void;
    setBrightness(a?: number): void;
    setColor(a: number, b: number, c: number): void;
    setDensity(a?: number): void;
    destroy(): void;
  };

  let volumetricFog: {
    color: Cesium.Color;
    bottom: number;
    ceiling: number;
    defaultRamp: {
      opacity: number;
      cutoff: number;
    };
    canvases?: {
      a: HTMLCanvasElement & { used: boolean };
      b: HTMLCanvasElement;
    };
    ramp?: typeof fx.volumetricFog.defaultRamp;
    material?: Cesium.Material;

    getCanvas(): HTMLCanvasElement & { used?: boolean };
    getColorRamp(
      a?: Partial<typeof fx.volumetricFog.ramp>
    ): HTMLCanvasElement & { used?: boolean };
    create(): void;
    set(
      a?: number,
      b?: number,
      c?: Partial<typeof fx.volumetricFog.ramp>,
      d?: Cesium.Color
    ): void;
    setRampValue(a: Partial<typeof fx.volumetricFog.ramp>): void;
    setRamp(a: Partial<typeof fx.volumetricFog.ramp>): void;
    applyRamp(): void;
    setColorValue(a?: Cesium.Color): void;
    setColor(a?: Cesium.Color): void;
    setBottom(a?: number): void;
    setCeiling(a?: number): void;
    destroy(): void;
  };

  let cloudManager: {
    cloudCoverToCloudNumber: number;
    clouds: {
      [key: number]: Cloud;
    };
    numberOfClouds: number;
    currentID: number;
    maxNumberOfClouds: number;
    refreshDistance: number;
    currentCenter: number[];
    redAnimation: { valueRamp: number[] };
    greenAnimation: { valueRamp: number[] };
    blueAnimation: { valueRamp: number[] };
    fogBrightnessRamp: number[];
    groundBrightnessRamp: number[];
    brightness: number;

    instance?: typeof fx.cloudManager;
    cloudSituation?: null | number;
    fullCover?: CloudCover;
    lastBrightness?: number;
    cloudColor?: Cesium.Color;
    percentCoverage?: number;

    setCloudCoverToCloudNumber(a?: number): void;
    init(a: number[]): void;
    spawnClouds(): void;
    triggerUpdate(): void;
    update(a: number[], b?: any): void;
    setCloudsBrightness(a: number): void;
    setCloudColors(
      a: number | null,
      b: number | null,
      c: number | null,
      d: number
    ): void;
    setCloudCover(a: number): void;
    setNumberOfClouds(a: number): void;
    setCeiling(a: number): void;
    destroyLastCloud(): void;
    destroyAllClouds(): void;
    destroy(): void;
  };

  class Cloud {
    _id: number;
    _type: {
      minRadius: number;
      rotationMultiplier: number;
      brightnessDelta: number;
      billboard: string;
      belowCeiling: number;
      aboveCeiling: number;
      minScale: number;
      maxScale: number;
      maxRadius: number;
      opacity: number;
      shadow: boolean;
    };
    shadowSize: number;
    shadowTexture: string;
    defaultType: {
      belowCeiling: number;
      aboveCeiling: number;
      opacity: number;
      minRadius: number;
      maxRadius: number;
      rotationMultiplier: number;
      brightnessDelta: number;
    };
    types: {
      belowCeiling: number;
      aboveCeiling: number;
      minScale: number;
      maxScale: number;
      maxRadius: number;
      opacity: number;
      billboard?: string;
      shadow?: boolean;
      model?: string;
      rotationMultiplier?: number;
    }[];
    billboardOptions: {
      sizeInMeters: boolean;
      collection: string;
      geofsFixCameraRotation: boolean;
    };
    _location: number[];
    modelOptions: Record<string, unknown>;
    constructor(a: number[], b?: any);
    _cloudShadowAppearance: Cesium.EllipsoidSurfaceAppearance;
    _entity: api.billboard | api.Model;
    _shadowPrimitive: Cesium.GroundPrimitive;
    _updateTimeout: number;
    create(a: number[]): void;
    setCeiling(a: number): void;
    setColor(a?: Cesium.Color): void;
    move(a: number[]): void;
    setLocation(a: number[]): void;
    update(): void;
    destroy(): void;
  }

  class CloudCover {
    texture: string;
    size: number;
    options: {
      url: string;
      scale: number;
    };
    entity: api.Model;
    _updateTimeout: number;
    constructor(a: number[]);
    create(a: number[]): void;
    setColor(a: Cesium.Color): void;
    setLocation(a: number[]): void;
    update(): void;
    destroy(): void;
  }

  let precipitation: {
    types: {
      snow: {
        speed: number;
        model: string;
      };
      rain: {
        speed: number;
        model: string;
      };
    };
    visible: boolean;
    apiModel: api.Model;
    type: keyof typeof fx.precipitation.types;
    amount: number;
    motionOffset: number;
    _material: Cesium.ModelMaterial;

    init(): void;
    create(a: typeof fx.precipitation.type, b: number): void;
    show(): void;
    hide(): void;
    destroy(): void;
  };

  /**
   * See only the wireframe of the terrain and other models.
   *
   * Cool to take a picture with :)
   */
  function retro(a?: any): void;

  let water: {
    tileSize: number;
    lods: typeof fx.water.lodDefinitions[number] &
      {
        tiles: {
          x: number;
          y: number;
          canvasAPI: api.Canvas;
        }[];
        centerTileIndex: number;
      }[];
    lodDefinitions: {
      zoomLevel: number;
      size: number;
      specularIntensity: number;
      shininess: number;
      amplitude: number;
      frequency: number;
      altitudeOpacityRamp: number[];
      animationSpeed: number;
      alpha: number;
      baseColour: string;
      blendColour: string;
    }[];
    tilingScheme?: Cesium.WebMercatorTilingScheme;

    reset(): void;
    create(): void;
    update(a: number, b: number, c: number): void;
    destroy(): void;
  };

  let wake: {
    anchor: number[];
    altitude: number;
    emitter?: ParticleEmitter;

    create(): void;
    update(): void;
    destroy(): void;
  };
}

export default fx;

export class runwaysLights {
  runway: runways.runway;
  on: boolean;
  lights: fx.light[];
  papis: fx.papi[];
  localStepXm: number;
  localStepYm: number;
  stepX: number[];
  stepY: number[];

  static turnAllOff(): void;
  static turnAllOn(): void;
  static updateAll(): void;

  constructor(a: runways.runway);
  turnOn(): void;
  turnOff(): void;
  addRow(a: number[], b: number[], c: number): void;
  addPapi(a: number[], b: number[]): void;
  addLight(a: number[], b: string): void;
  destroy(): void;
}
