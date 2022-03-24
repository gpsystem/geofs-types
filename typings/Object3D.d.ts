/**
 * Can be accessed with `Object3D`.
 * @module Object3D
 * @ignore
 * @category Global
 */
import type * as Cesium from "cesium";
import { fx } from "./geofs/fx";

export class Object3D {
  static utilities: {
    getPointLla(a: number[] | unknown, b?: number[]): number[];
  };

  _name: string;
  _nodeName: string;
  _children: Object3D[];
  _parent: Object3D | null;
  _model?: Cesium.Model;
  _entity?: Cesium.Entity;
  _light?: fx.light;
  _points: {
    [key: string]: number[] & {
      worldPosition: number[];
    };
  };
  _collisionPoints: (number[] & {
    contactProperties: {
      damping: number;
      dynamicFriction: number;

      frictionCoef: number;
      lockSpeed: number;
    };
    lastGroundAltitude: number | null;
    part: typeof Object3D.prototype._options & {
      object3D: Object3D;
    };
    worldPosition: number[];
    wrongAltitude: number | null;
    wrongAltitudeTries: number;
  })[];
  visible: boolean;
  _initialRotation: number[];
  _rotation: number[];
  _nodeOrigin?: number[];
  _initialPosition: number[];
  _position: number[];
  _initialScale: number[];
  worldRotation: number[];
  worldPosition: number[];
  lla?: number[];

  _options: {
    "3dmodel": Cesium.Model;
    animations: Record<string, unknown>[];
    brakesController: boolean;
    model: string;
    name: string;
    originalScale: number[];
    points: {
      [key: string]: number[] & {
        worldPosition: number[];
      };
    };
    position: number[];
    scale: number[];
    textures: { filename: string; index: number }[];
    type: string;
    // TODO all the other things
  };

  constructor(a: typeof Object3D.prototype._options);
  reset(): void;

  setInitiallRotation(a?: number[]): void;
  rotateInitialRotation(a?: number[]): void;
  rotate(a: number): void;
  rotateX(a: number): void;
  rotateY(a: number): void;
  rotateZ(a: number): void;
  rotateParentFrameX(a: number): void;
  rotateParentFrameY(a: number): void;
  rotateParentFrameZ(a: number): void;
  getRotation(): number[];
  setInitialPosition(a?: number[]): void;
  setInitialScale(a?: number[] | number): void;
  scale(a?: number[] | number, b?: boolean): void;
  setPosition(a: number[]): void;
  translate(a: number[]): void;
  setTranslation(a: number[]): void;
  setScale(a?: number[] | number, b?: boolean): void;
  setOpacity(a: number): void;
  setScaleOffset(a: number[], b?: boolean): void;
  getPosition(): number[];
  getLocalPosition(): number[];
  resetAnimatedTransform(): void;
  resetRotationMatrix(): void;
  setVectorWorldPosition(A: number[] & { worldPosition: number[] }): number[];
  compute(a: number[]): void;
  render(a: number[]): void;
  setModel(a: Cesium.Model): void;
  setEntity(a: Cesium.Entity): void;
  getModel(a?: any /* unused */): Cesium.Model;
  getNode(): Cesium.ModelNode | void;
  getNodePosition(): null | number[];
  getNodeRotation(): number[];
  setLight(a: fx.light): void;
  getWorldFrame(): number[];
  getWorldPosition(): number[];
  getLlaLocation(): number[];
  addChild(a: Object3D): void;
  setVisibility(a: boolean, b?: Object3D): void;
  findModelInAncestry(): Cesium.Model;
  getParent(): Object3D;
  propagateToTree(a: string, b: any[]): void;
  destroy(): void;
}
