import { FrameCallback } from "../index";
import apiNamespace from "./api";
import runwaysNamespace from "./runways";
import animationNamespace from "./animation";
import utilsNamespace from "./utils";
import fxNamespace, { runwaysLights as fxRunwaysLights } from "./fx";
import { preferencesDefault } from "./preferences";
import type * as Cesium from "cesium";
/**
 * Types living in the geofs global variable
 */
declare namespace geofs {
  /*
       Variables defined in the namespace:
     */
  let simpleShadowOn: boolean;
  let shadowsDisabled: boolean;

  const frameCallbackStack: { [key: string]: FrameCallback };
  const api: typeof apiNamespace;

  const runways: typeof runwaysNamespace;
  const animation: typeof animationNamespace;
  const utils: typeof utilsNamespace;
  const ajax: {
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
  const fx: typeof fxNamespace;

  // some random variables that are under geofs:
  function selectDropdown(a: HTMLElement, b: number): void;
  function getLink(): void;
  function isArray(a: any): boolean;
  function loadModel(
    a: string,
    b?: Parameters<typeof Cesium.Model.fromGltf>[0] & { justLoad: boolean }
  ): Cesium.Model;
  function setModelLocation(a: apiNamespace.Model, b: number | number[]): void;
  function getGroundAltitude(
    a: number,
    b: number,
    c: unknown
  ): { location: number[]; [key: string]: any };
  function getCollisionResult(
    a: number[],
    b?: number[],
    c?: { [key: string]: any; location: number[]; normal: number[] },
    d?: unknown
  ): { [key: string]: any; location: number[] };
  function getAltitudeAtPointFromCollisionResult(
    a: { [key: string]: any; location: number[]; normal: number[] },
    b: number[]
  ): number;
  function getNormalFromCollision(
    a: number[] | { [key: string]: any; normal: number[] },
    b: unknown
  ): number[];

  function useSimpleShadow(a: boolean): void;
  function disableShadows(): void;
  function enableShadows(): void;

  class shadow {
    shadow: apiNamespace.Model;
    context: { [key: string]: any };
    constructor(a: string, b: number);

    setLocationRotation(a: number[], b?: any): void;
    destroy(): void;
  }

  function CesiumCoord2tilePatch(
    a: number,
    b: number,
    c: number,
    d: number,
    e: Cesium.TilingScheme
  ): { x: number; y: number }[];
  const WGS84TileSize: number;
  function WGS84Coord2tile(
    a: number,
    b: number,
    c: number
  ): { x: number; y: number };
  function WGS84Coord2tileQuad(
    a: number,
    b: number,
    c: number
  ): { x: number; y: number }[];
  function WGS84Tile2coord(
    a: number,
    b: number,
    c: number
  ): { lat: number; lon: number };
  function coord2tile(
    a: number,
    b: number,
    c: number
  ): { x: number; y: number };
  function coord2CenterTile(
    a: number,
    b: number,
    c: number
  ): { x: number; y: number }[];
  function coord2tileQuad(
    a: number,
    b: number,
    c: number
  ): { x: number; y: number }[];
  function tile2coord(
    a: number,
    b: number,
    c: number
  ): { lat: number; lon: number };
  function getLatLonMatrixcoord(a: number, b: number, c: number): string;

  const perlin: {
    size: number;
    gradient: number[][];
    normalizationRatio: number;

    lerp(a: number, b: number, c: number): number;
    dotGridGradient(a: number, b: number, c: number, d: number): number;
    get(a: number, b: number, c: number): number;
  };

  const includes: {
    [key: string]: any;
  };
  let PRODUCTION: boolean;
  let killCache: string;
  let isApp: boolean;
  let autoStart: boolean;
  let manualStart: boolean;
  let viewport: HTMLElement;
  let canvas: JQuery<HTMLElement>;
  let resizeHandlers: { [key: number]: () => void };
  let resizeHandlersIndex: number;
  let lastTime: number;
  const initialRunways: number[][];
  let lastFlight: {
    coordinates: number[];
    aircraftId: number;
    liveryId: string;
  };
  let lastFlightDefault: Partial<typeof lastFlight>;
  let world: undefined;
  let initialCoordinates: number[];
  function init(): void;
  function start(a?: number, b?: number[]): void;
  function unload(): void;
  function initLoggedInUser(): void;
  function terrainProbbingDone(): void;
  const terrainProbingDuration: number;
  function probeTerrain(): void;
  let pause: boolean;
  let pauseLevel: number;
  let absolutePause: boolean;
  function togglePause(): void;
  function isPaused(): true | void;
  function doPause(a?: number, b?: boolean): void;
  function undoPause(a?: number): void;
  function frameCallback(a: number): void;
  function flyTo(a?: number[], b?: boolean): void;
  function flyToCamera(): void;
  function resetFlight(): void;

  // preferences
  let preferences: { version: string } & preferencesDefault;
  let userRecord: {
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
  let preferencesDefault: preferencesDefault;
  let preferencesKeycodeLookup: { [key: number]: string };
  function initPreferences(): void;
  function isPreferencePanelOpen(): boolean;
  function saveFlight(): void;
  function savePreferences(): void;
  function resetPreferences(): void;
  function readPreferences(a?: () => any): void;
  function populateButtonAssignments(): void;
  function populateAxesAssignments(): void;
  function populateKeyAssignments(): void;
  function preferencesDebugInfo(): void;
  function preferencesTestJoystick(): boolean;
  function preferencesTestOrientation(): boolean;
  function preferencesStartFeedback(): void;
  function preferencesStopFeedback(): void;
  function initializePreferencesPanel(): void;
  function setPreferenceValues(
    a: JQuery | HTMLElement | string,
    b?: boolean
  ): void;
  function setInputHandlers(a: JQuery | HTMLElement | string): void;
  function destroyPreferencePanel(): void;
  function cancelPreferencesPanel(): void;
  function setPreferenceFromInput(a: JQuery): void;
  function savePreferencesPanel(): void;

  // ui
  class map {
    minimumPanDistance: number;
    _options: {
      location: [number, number, number];
      [key: string]: any;
    };
    apiMap: apiNamespace.map;
    planeMarker: apiNamespace.map.planeMarker;
    mapActive: boolean;
    ATCMode: boolean;
    dontMove?: boolean;
    dontMoveTimeout?: number;
    dontMoveTimeoutValue?: number;
    lastMapUpdate: number;
    mapUpdateInterval: number;
    tooltipVisibility: boolean;
    constructor(
      a?: Partial<{
        zoom: number;
        holder: JQuery;
        standalone: boolean;
        norunways: boolean;
      }>,
      b?: number,
      c?: number
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
  function handleResize(): void;
  function addResizeHandler(
    a: number,
    b?: {
      resizeHandlerId: any;
      [key: string]: any;
    }
  ): any;
  function removeResizeHandler(a: number): void;
  function getViewportDimentions(): void;
  
  // fx
  class runwayLights extends fxRunwaysLights {}
  const light: fxNamespace.light;
}
export default geofs;
