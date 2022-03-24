/**
 * Global variables.
 * @module glboals
 * @category Global
 */
import * as geofsNamespace from "./geofs";
import * as uiNamespace from "./ui";
import * as flightNamespace from "./flight";
import { rigidBody as rigidBodyDefinition } from "./rigidBody";
import * as objectsNamespace from "./objects";
import * as controlsNamespace from "./controls";
import * as weatherNamespace from "./weather";
import * as audioNamespace from "./audio";
import { multiplayer as multiplayerNamespace } from "./multiplayer";
import { Object3D as Object3DDefinition } from "./Object3D";
import { Indicator as IndicatorDefinition } from "./Indicator";
import * as instrumentsNamespace from "./instruments";
import { GlassPanel as GlassPanelDefinition } from "./GlassPanel";
import { cssTransform } from "./geofs/api";

export interface FrameCallback {
  callbacks: {
    [key: string]: any;
  };
  lastId: number;
  maxExecutionTime: number;
  lastIndex: number;
  [key: string]: any;
}

declare global {
  export const PAGE_PATH: string;
  export const geofs: typeof geofsNamespace;
  export const ui: typeof uiNamespace;
  export const flight: typeof flightNamespace;
  export const objects: typeof objectsNamespace;
  export const controls: typeof controlsNamespace;
  export const weather: typeof weatherNamespace;
  export const audio: typeof audioNamespace;
  export const multiplayer: typeof multiplayerNamespace;
  export const instruments: typeof instrumentsNamespace;

  export function absMin(a: number, b: number): number;
  export function span(a: number, b?: number, c?: number): number;
  export function boundHours24(a: number): number;
  export function fixAngle(a: number): number;
  export function fixAngle360(a: number): number;
  export function fixAngles360(a: number[]): number[];
  export function fixAngles(a: number[]): number[];
  export function exponentialSmoothingV3(
    a: string,
    b: [],
    c?: number,
    d?: number
  ): number[];
  export function exponentialSmoothing(
    a: number,
    b: number,
    c?: number,
    d?: number
  ): number;
  export function getBuildingCollision(a?: any /* unused */): null;
  export function xyz2lla(a: number[], b: number[]): number[];
  export function xy2ll(a: number[], b: number[]): number[];
  export function lla2xyz(a: number[], b: number[]): number[];
  export function ll2xy(a: number[], b: number[]): number[];
  export function clamp(a: number, b: number, c: number): number;
  export function geoDecodeLocation(
    a: string,
    b: (a: number, b: number) => void
  ): void;
  export function lookAt(a: number[], b: number[], c: number[]): number[];
  export function getURLParameters(): { [key: string]: string };
  export function clone<T>(a: T): T;

  export class PID {
    _kp: number;
    _ki: number;
    _kd: number;
    _maxOutput: number;
    _minOutput: number;
    _setPoint: number;
    _integral: number;
    _previousError: number;
    _previousInput: number;

    constructor(a: number, b: number, c: number);
    reset(): void;
    initialize(a: number, b: number): void;
    set(a: number, b: number, c: number): void;
    compute(a: number, b: number): number;
  }
  export class Overlay {
    definition: {
      url: string;
      anchor: {
        x: number;
        y: number;
      };
      position: {
        x: number;
        y: number;
      };
      rotation: number;
      size: {
        x: number;
        y: number;
      };
      offset: {
        x: number;
        y: number;
      };
      visibility: boolean;
      opacity: number;
      scale: {
        x: number;
        y: number;
      };
      rescale: boolean;
      rescalePosition: boolean;
      alignment: {
        x: "left" | "right" | "top" | "bottom";
        y: "left" | "right" | "top" | "bottom";
      };
      overlays: Partial<typeof Overlay.prototype.definition>[];
    } & {
      animations?:
        | {
            type: string;
            [key: string]: any;
          }
        | undefined;
      animateRotation?: boolean | undefined;
    };
    children: Overlay[];
    parent: this;
    position: typeof Overlay.prototype.definition.position;
    size: typeof Overlay.prototype.definition.size;
    iconFrame: {
      x: number;
      y: number;
    };
    animateVisibility?: boolean | undefined;
    animationVisibility?: boolean | undefined;
    scale: typeof Overlay.prototype.definition.scale;
    positionOffset: typeof Overlay.prototype.definition.offset;
    _offset: {
      x: number;
      y: number;
    };
    _sizeScale: number;
    rotation: typeof Overlay.prototype.definition.rotation;
    opacity: typeof Overlay.prototype.definition.opacity;
    anchor: typeof Overlay.prototype.definition.anchor;
    visibility: typeof Overlay.prototype.definition.visibility;
    overlay: cssTransform;

    constructor(a: Partial<typeof Overlay.prototype.definition>, b: Overlay);
    setVisibility(a: boolean): void;
    setOpacity(a: number): void;
    scaleAllProperties(a?: { x: number; y: number }): void;
    scaleAndPlace(
      a?: { x: number; y: number },
      b?: { x: number; y: number },
      c?: boolean
    ): void;
    place(a?: { x: number; y: number }): void;
    scaleFromParent(a?: { x: number; y: number }): { x: number; y: number };
    positionFromParentRotation(): { x: number; y: number };
    animate(a: boolean): void;
    translateIcon(a: number, b: "X" | "Y"): void;
    rotate(a: number): void;
    setText(a: string): void;
    setTitle(a: string): void;
    destroy(): void;
  }
  // To make classes global, extend them with nothing:
  export class rigidBody extends rigidBodyDefinition {}
  export class Object3D extends Object3DDefinition {}
  export class Indicator extends IndicatorDefinition {}
  export class GlassPanel extends GlassPanelDefinition {}
}

/*                         For Docs                         */
export {
  PAGE_PATH,
  geofs,
  ui,
  flight,
  objects,
  controls,
  weather,
  audio,
  multiplayer,
  instruments,
  absMin,
  span,
  boundHours24,
  fixAngle,
  fixAngle360,
  fixAngles360,
  fixAngles,
  exponentialSmoothingV3,
  exponentialSmoothing,
  getBuildingCollision,
  xyz2lla,
  xy2ll,
  lla2xyz,
  ll2xy,
  clamp,
  geoDecodeLocation,
  lookAt,
  getURLParameters,
  clone,
  PID,
  Overlay,
  rigidBody,
  Object3D,
  Indicator,
  GlassPanel,
};
