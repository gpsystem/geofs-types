import { FrameCallback } from '../index';
import apiNamespace from './api';
import runwaysNamespace from './runways';
import animationNamespace from './animation';
import utilsNamespace from './utils';
import type * as Cesium from 'cesium';


/**
 * Types living in the geofs global variable
 */
declare namespace geofs {
    /*
       Variables defined in the namespace:
     */
    let simpleShadowOn: boolean;
    let shadowsDisabled: boolean;


    const frameCallbackStack: {[key: string]: FrameCallback};
    const api: typeof apiNamespace;
    const runways: typeof runwaysNamespace;
    const animation: typeof animationNamespace;
    const utils: typeof utilsNamespace;
    const ajax: {
        post(a: string, b: any, c: JQuery.TypeOrArray<JQuery.Ajax.SuccessCallback<any>>, d: (arg0: JQuery.jqXHR, arg1: JQuery.Ajax.ErrorTextStatus, arg2: string) => void): JQuery.jqXHR;
    };

    // some random variables that are under geofs:
    function selectDropdown(a: Object, b: any): void;
    function getLink(): void;
    function isArray(a: any): boolean;
    function loadModel(a: string, b?: Parameters<typeof Cesium.Model.fromGltf>[0] & {justLoad: boolean}): Cesium.Model;
    function setModelLocation(a: apiNamespace.Model, b: number | number[]): void;
    function getGroundAltitude(a: number, b: number, c: unknown): {location: number[], [key: string]: any};
    function getCollisionResult(a: number[], b?: number[], c?: {[key: string]: any; location: number[]; normal: number[]}, d?: unknown): {[key: string]: any; location: number[];};
    function getAltitudeAtPointFromCollisionResult(a: {[key: string]: any; location: number[]; normal: number[]}, b: number[]): number;
    function getNormalFromCollision(a: number[] | {[key: string]: any, normal: number[]}, b: unknown): number[];

    function useSimpleShadow(a: boolean): void;
    function disableShadows(): void;
    function enableShadows(): void;

    class shadow {
        shadow: apiNamespace.Model;
        context: {[key: string]: any};
        constructor(a: string, b: number);

        setLocationRotation(a: number[], b?: any): void;
        destroy(): void;
    }

    function CesiumCoord2tilePatch(a: number, b: number, c: number, d: number, e: Cesium.TilingScheme): {x: number; y: number}[];
    const WGS84TileSize: number;
    function WGS84Coord2tile(a: number, b: number, c: number): {x: number; y: number};
    function WGS84Coord2tileQuad(a: number, b: number, c: number): {x: number; y: number}[];
    function WGS84Tile2coord(a: number, b: number, c: number): {lat: number, lon: number};
    function coord2tile(a: number, b: number, c: number): {x: number; y: number};
    function coord2CenterTile(a: number, b: number, c: number): {x: number; y: number}[];
    function coord2tileQuad(a: number, b: number, c: number): {x: number; y: number}[];
    function tile2coord(a: number, b: number, c: number): {lat: number, lon: number};
    function getLatLonMatrixcoord(a: number, b: number, c: number): string;

    const perlin: {
        size: number;
        gradient: number[][];
        normalizationRatio: number;

        lerp(a: number, b: number, c: number): number;
        dotGridGradient(a: number, b: number, c: number, d: number): number;
        get(a: number, b: number, c: number): number;
    };
}
export default geofs;
