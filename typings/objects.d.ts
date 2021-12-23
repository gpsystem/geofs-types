import type * as Cesium from "cesium";

declare namespace objects {
  let clusterSize: 2;
  let currentCellId: string;
  let matrix: {
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
  let visible: [];
  let list: {
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
  let collidableObjectList: typeof matrix[`${number}/${number}`][
    | "arrestingcable1"
    | "arrestingcable2"
    | "arrestingcable3"
    | "arrestingcable4"
    | "carrier"
    | "meigs"][];
  let collidableObject: boolean;

  function init(): void;
  function preProcessObjects(): void;
  function updateVisibility(): void;
  function unloadMatrixModels(a: string): void;
  function loadMatrixModels(a: keyof typeof matrix): void;
  function updateCollidables(): void;
  function getAltitudeAtLocation(
    a: number,
    b: number
  ): {
    location: number[];
    normal: number[];
    object: typeof collidableObjectList[number];
  };
}

export default objects;
