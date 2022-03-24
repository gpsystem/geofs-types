/**
 * Can be accessed with `geofs`.
 * @module geofs
 * @category Global
 */
import { FrameCallback } from "../index";
import * as apiNamespace from "./api";
import * as runwaysNamespace from "./runways";
import * as animationNamespace from "./animation";
import * as utilsNamespace from "./utils";
import { fx as fxNamespace, runwaysLights as fxRunwaysLights } from "./fx";
import { debug as debugNamespace } from "./debug";
import { preferencesDefault } from "./preferences";
import * as aircraftNamespace from "./aircraft";
import * as cameraNamespace from "./camera";
import type * as Cesium from "cesium";

export let simpleShadowOn: boolean;
export let shadowsDisabled: boolean;

export const frameCallbackStack: { [key: string]: FrameCallback };
export const api: typeof apiNamespace;
export function fromHeadingPitchRoll(
  a: number,
  b: number,
  c: number,
  d?: Cesium.Quaternion
): Cesium.Quaternion;
export function fromHeadingPitchRoll(
  a: number,
  b: number,
  c: number,
  d?: Cesium.Quaternion
): Cesium.Quaternion;

export const runways: typeof runwaysNamespace;
export const animation: typeof animationNamespace;
export const utils: typeof utilsNamespace;

export const ajax: {
  post(
    a: string,
    b: any,
    c: JQuery.TypeOrArray<JQuery.Ajax.SuccessCallback<any>>,
    d: (
      arg0: JQuery.jqXHR,
      arg1: JQuery.Ajax.ErrorTextStatus,
      arg2: string
    ) => void
  ): JQuery.jqXHR;
};
export const fx: typeof fxNamespace;
export const debug: typeof debugNamespace;
export let debugOn: boolean;
export const aircraft: typeof aircraftNamespace;

export const camera: typeof cameraNamespace;

// some random variables that are under geofs:
export function selectDropdown(a: HTMLElement, b: number): void;
export function getLink(): void;
export function isArray(a: any): boolean;
export function loadModel(
  a: string,
  b?: Parameters<typeof Cesium.Model.fromGltf>[0] & { justLoad: boolean }
): Cesium.Model;
export function setModelLocation(
  a: apiNamespace.Model,
  b: number | number[]
): void;
export function getGroundAltitude(
  a: number,
  b: number,
  c: unknown
): { location: number[]; [key: string]: any };
export function getCollisionResult(
  a: number[],
  b?: number[],
  c?: { [key: string]: any; location: number[]; normal: number[] },
  d?: unknown
): { [key: string]: any; location: number[] };
export function getAltitudeAtPointFromCollisionResult(
  a: { [key: string]: any; location: number[]; normal: number[] },
  b: number[]
): number;
export function getNormalFromCollision(
  a: number[] | { [key: string]: any; normal: number[] },
  b: unknown
): number[];

export function useSimpleShadow(a: boolean): void;
export function disableShadows(): void;
export function enableShadows(): void;

export class shadow {
  shadow: apiNamespace.Model;
  context: { [key: string]: any };
  constructor(a: string, b: number);

  setLocationRotation(a: number[], b?: any): void;
  destroy(): void;
}

export function CesiumCoord2tilePatch(
  a: number,
  b: number,
  c: number,
  d: number,
  e: Cesium.TilingScheme
): { x: number; y: number }[];
export const WGS84TileSize: number;
export function WGS84Coord2tile(
  a: number,
  b: number,
  c: number
): { x: number; y: number };
export function WGS84Coord2tileQuad(
  a: number,
  b: number,
  c: number
): { x: number; y: number }[];
export function WGS84Tile2coord(
  a: number,
  b: number,
  c: number
): { lat: number; lon: number };
export function coord2tile(
  a: number,
  b: number,
  c: number
): { x: number; y: number };
export function coord2CenterTile(
  a: number,
  b: number,
  c: number
): { x: number; y: number }[];
export function coord2tileQuad(
  a: number,
  b: number,
  c: number
): { x: number; y: number }[];
export function tile2coord(
  a: number,
  b: number,
  c: number
): { lat: number; lon: number };
export function getLatLonMatrixcoord(a: number, b: number, c: number): string;

export const perlin: {
  size: number;
  gradient: number[][];
  normalizationRatio: number;

  lerp(a: number, b: number, c: number): number;
  dotGridGradient(a: number, b: number, c: number, d: number): number;
  get(a: number, b: number, c: number): number;
};

export const includes: {
  [key: string]: any;
};
export let PRODUCTION: boolean;
export let killCache: string;
export let isApp: boolean;
export let autoStart: boolean;
export let manualStart: boolean;
export let viewport: HTMLElement;
export let canvas: JQuery;
export let resizeHandlers: { [key: number]: () => void };
export let resizeHandlersIndex: number;
export let lastTime: number;
export const initialRunways: number[][];
export let lastFlight: {
  coordinates: number[];
  aircraftId: number;
  liveryId: string;
};
export let lastFlightDefault: Partial<typeof lastFlight>;
export let world: undefined;
export let initialCoordinates: number[];
export function init(): void;
export function start(a?: number, b?: number[]): void;
export function unload(): void;
export function initLoggedInUser(): void;
export function terrainProbbingDone(): void;
export const terrainProbingDuration: number;
export function probeTerrain(): void;
export let pause: boolean;
export let pauseLevel: number;
export let absolutePause: boolean;
export function togglePause(): void;
export function isPaused(): true | void;
export function doPause(a?: number, b?: boolean): void;
export function undoPause(a?: number): void;
export function frameCallback(a: number): void;
export function flyTo(a?: number[], b?: boolean): void;
export function flyToCamera(): void;
export function resetFlight(): void;

// preferences
export let preferences: { version: string } & preferencesDefault;
export let userRecord: {
  id: string;
  email: string;
  googleid: string | null;
  facebookid: string | null;
  deviceid: string | null;
  schoolid: string | null;
  externalid: string | null;
  firstname: string;
  lastname: string;
  callsign: string;
  sessionId: string;
  created: Date;
  active: string;
  ip: string;
  role: string;
  muted: string;
  banned: string;
  lastlogin: Date | null;
  mailing: string;
  password: string;
  flighttime: string;
  preferences: any;
  mutelist: string;
  premium: any;
  transactionDate: Date | null;
  transactionReference: string | null;
  transactionStatus: string | null;
  transactionMessage: string | null;
  subscribed: boolean;
  subscriptionStart: Date | null;
  subscriptionEnd: Date | null;
  trial: string;
  subscriptionDaysLeft: string;
  muteList: any[];
};
export let preferencesDefault: preferencesDefault;
export let preferencesKeycodeLookup: { [key: number]: string };
export function initPreferences(): void;
export function isPreferencePanelOpen(): boolean;
export function saveFlight(): void;
export function savePreferences(): void;
export function resetPreferences(): void;
export function readPreferences(a?: () => any): void;
export function populateButtonAssignments(): void;
export function populateAxesAssignments(): void;
export function populateKeyAssignments(): void;
export function preferencesDebugInfo(): void;
export function preferencesTestJoystick(): boolean;
export function preferencesTestOrientation(): boolean;
export function preferencesStartFeedback(): void;
export function preferencesStopFeedback(): void;
export function initializePreferencesPanel(): void;
export function setPreferenceValues(
  a: JQuery | HTMLElement | string,
  b?: boolean
): void;
export function setInputHandlers(a: JQuery | HTMLElement | string): void;
export function destroyPreferencePanel(): void;
export function cancelPreferencesPanel(): void;
export function setPreferenceFromInput(a: JQuery): void;
export function savePreferencesPanel(): void;

// ui
export class map {
  minimumPanDistance: number;
  _options: {
    location: [number, number, number];
    [key: string]: any;
  };
  apiMap: apiNamespace.map;
  planeMarker: apiNamespace.map.planeMarker;
  mapActive: boolean;
  ATCMode: boolean;
  dontMove?: boolean | undefined;
  dontMoveTimeout?: number | undefined;
  dontMoveTimeoutValue?: number | undefined;
  lastMapUpdate: number;
  mapUpdateInterval: number;
  tooltipVisibility: boolean;
  constructor(
    a?:
      | Partial<{
          zoom: number;
          holder: JQuery;
          standalone: boolean;
          norunways: boolean;
        }>
      | undefined,
    b?: number | undefined,
    c?: number | undefined
  );

  resize(): void;
  addRunways(): void;
  setMapInfoWindow(): void;
  stopMap(): void;
  startMap(): void;
  stopMovingMap(a: boolean): void;
  updateMap(a: number, b: number): void;
  addPlayerMarker(a: string, b: string, c: string): void;
  updatePlayerMarker(
    a: string,
    b: number[],
    c: string,
    d: string,
    e: string,
    f: number | string
  ): void;
  deletePlayerMarker(a: string): void;
  toggleATCMode(): void;
  setTooltipVisibility(a: boolean): void;
}
export function handleResize(): void;
export function addResizeHandler(
  a: number,
  b?: {
    resizeHandlerId: any;
    [key: string]: any;
  }
): any;
export function removeResizeHandler(a: number): void;
export function getViewportDimentions(): void;

// fx
export class runwayLights extends fxRunwaysLights {}
export const light: fxNamespace.light;
