/**
 * Can be accessed with `objects`.
 * @module objects
 * @category Global
 */
import type * as Cesium from "cesium";

export let clusterSize: 2;
export let currentCellId: string;
export let matrix: {
  [key: `${number}/${number}`]: {
    [key in
      | "arrestingcable1"
      | "arrestingcable2"
      | "arrestingcable3"
      | "arrestingcable4"
      | "carrier"
      | "meigs"]: typeof list[
      | "arrestingcable1"
      | "arrestingcable2"
      | "arrestingcable3"
      | "arrestingcable4"
      | "carrier"
      | "meigs"] & {
      model?: null | Cesium.Model;
    };
  };
};
export let visible: [];
export let list: {
  arrestingcable1: {
    location: number[];
    htr: number[];
    rotateModelOnly: boolean;
    url: string;
    collisionRadius: number;
    collisionTriangles: number[][][];
    options: {
      castShadows: boolean;
      receiveShadows: boolean;
    };
    arrestingCable: boolean;
    arrestingCableHeight: number;
  };
  arrestingcable2: {
    location: number[];
    htr: number[];
    rotateModelOnly: boolean;
    url: string;
    collisionRadius: number;
    collisionTriangles: number[][][];
    options: {
      castShadows: boolean;
      receiveShadows: boolean;
    };
    arrestingCable: boolean;
    arrestingCableHeight: number;
  };
  arrestingcable3: {
    location: number[];
    htr: number[];
    rotateModelOnly: boolean;
    url: string;
    collisionRadius: number;
    collisionTriangles: number[][][];
    options: {
      castShadows: boolean;
      receiveShadows: boolean;
    };
    arrestingCable: boolean;
    arrestingCableHeight: number;
  };
  arrestingcable4: {
    location: number[];
    htr: number[];
    rotateModelOnly: boolean;
    url: string;
    collisionRadius: number;
    collisionTriangles: number[][][];
    options: {
      castShadows: boolean;
      receiveShadows: boolean;
    };
    arrestingCable: boolean;
    arrestingCableHeight: number;
  };
  carrier: {
    location: number[];
    url: string;
    collisionRadius: number;
    collisionTriangles: number[][][];
    options: {
      castShadows: boolean;
      receiveShadows: boolean;
    };
  };
  meigs: {
    location: number[];
    htr: number[];
    url: string;
    options: {
      castShadows: boolean;
      receiveShadows: boolean;
    };
    collisionRadius: number;
    collisionTriangles: number[][][];
    intersectionCallback: (a?: any /*not used*/) => void;
  };
};
export let collidableObjectList: typeof matrix[`${number}/${number}`][
  | "arrestingcable1"
  | "arrestingcable2"
  | "arrestingcable3"
  | "arrestingcable4"
  | "carrier"
  | "meigs"][];
export let collidableObject: boolean;

export function init(): void;
export function preProcessObjects(): void;
export function updateVisibility(): void;
export function unloadMatrixModels(a: string): void;
export function loadMatrixModels(a: keyof typeof matrix): void;
export function updateCollidables(): void;
export function getAltitudeAtLocation(
  a: number,
  b: number
): {
  location: number[];
  normal: number[];
  object: typeof collidableObjectList[number];
};
