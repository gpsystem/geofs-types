/**
 * Can be accessed with `multiplayer`.
 * @module multiplayer
 * @category Global
 */
import type * as Cesium from "cesium";
import * as api from "./geofs/api";
import { fx } from "./geofs/fx";

export namespace multiplayer {
  export let nbUsers: number;
  export let users: { [key: string]: User };
  export let visibleUsers: { [key: string]: User };
  export let numberOfLOD: number;
  export let captainIconUrl: string;
  export let premiumIconUrl: string;
  export let minUpdateDelay: number;
  export let mapInterval: number;
  export let hearbeatLife: number;
  export let userLife: number;
  export let userHalfLife: number;
  export let userHeartBeatPeriod: number;
  export let trafficLife: number;
  export let trafficHalfLife: number;
  export let trafficHeartBeatPeriod: number;
  export let contrailEmitters: {
    1: {
      lod: number;
      anchor: null;
      duration: number;
      rate: number;
      life: number;
      startScale: number;
      endScale: number;
      randomizeStartScale: number;
      randomizeEndScale: number;
      startOpacity: number;
      endOpacity: number;
      startRotation: string;
      texture: string;
    };
    2: {
      lod: number;
      anchor: null;
      duration: number;
      rate: number;
      life: number;
      startScale: number;
      endScale: number;
      randomizeStartScale: number;
      randomizeEndScale: number;
      startOpacity: number;
      endOpacity: number;
      startRotation: string;
      texture: string;
    };
    3: {
      lod: number;
      anchor: null;
      duration: number;
      rate: number;
      pathStep: number;
      followPath: boolean;
      life: number;
      easing: string;
      startOpacity: number;
      endOpacity: number;
      model: string;
      rotationAxis: number;
    };
  };
  export let mapUpdatePeriod: number;
  export let myId: string;
  export let lastRequest: null | JQuery.jqXHR;
  export let lastResponse: typeof ServerResponse;
  export let lastJoinedCoordinates: string;
  export let lastRequestTime: number;
  export let serverTimeOffset: number;
  export let labelVisibilityRange: number;
  export let farVisibilityRange: number;
  export let lowVisibilityRange: number;
  export let nearVisibilityRange: number;
  export let chatMessage: string;
  export let chatMessageId: number;
  export let on: boolean;
  export let started: boolean;
  export let callsignPlacemarkAltitude: number;
  export let updateFunctions: [];
  export let labelOptions: {
    [key in "default" | "xavier" | "premium" | "traffic"]: {
      font: "bold 12pt sans-serif";
      style: Cesium.LabelStyle.FILL_AND_OUTLINE;
      horizontalOrigin: Cesium.HorizontalOrigin.CENTER;
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM;
      eyeOffset: Cesium.Cartesian3;
      fillColor: Cesium.Color;
      outlineColor: Cesium.Color;
      outlineWidth: 2;
      translucencyByDistance: Cesium.NearFarScalar;
    };
  };
  export let iconOptions: {
    [key in "premium" | "xavier"]: {
      image: string;
      horizontalOrigin: Cesium.HorizontalOrigin;
      verticalOrigin: Cesium.VerticalOrigin;
      eyeOffset: Cesium.Cartesian3;
      pixelOffset: Cesium.Cartesian3;
      translucencyByDistance: Cesium.NearFarScalar;
      width: number;
      height: number;
    };
  };
  export let nextUpdateTime: number | null;
  export let avgPing: number;
  export let minPing: number;

  export let flightSharing: {
    requestTimeout: number;
    host: boolean;
    control: boolean;
    status: null | "requested" | "established" | "incoming";
    willpeer: null | User;
    waspeer: null | User;
    peer: null | User;
    timeout: number;

    init(): void;
    request(a: User): void;
    incoming(a: User): void;
    accept(a: User): void;
    accepted(a: User): void;
    peerUpdate(a: typeof ServerResponse.users[number]): void;
    swapControl(a: boolean): void;
    refuse(a?: any /*not used*/): void;
    stop(): void;
  };

  export class User {
    id: string;
    acid: number | null;
    callsign: string;
    aircraft: null | number;
    aircraftName: null | string;
    currentLivery?: string;
    lod: 0 | 1 | 2 | 3 | null;
    model: Cesium.Model | null;
    models: Cesium.Model[];
    lastUpdate: null | typeof ServerResponse.users[number];
    visibleGear: boolean;
    referencePoint: {
      lla: number[];
    };
    currentServerTime: number;
    lastHeartbeatTime: number;
    isTraffic: boolean | undefined;
    updated: boolean;
    heartBeatTimeout: number;
    // Flight sharing stuff
    isPeer: boolean;
    elapsedTime?: number;
    correctedVelocity?: number[];
    currentInterpolatedCoord?: number[] | null;
    deviationFix: number[];
    distance?: number;
    // other stuff
    contrailEmitter?: null | fx.ParticleEmitter;
    contrailLod: 0 | 1 | 2 | 3;
    premium: boolean;
    label?: { text: string; position: Cesium.Cartesian3 };
    icon?: api.billboard;

    constructor(a: typeof ServerResponse.users[number]);
    heartBeat(): void;
    update(a: typeof ServerResponse.users[number], b: unknown): void;
    getLOD(a: typeof ServerResponse.users[number]): 0 | 1 | 2 | 3;
    updateAircraft(a: typeof ServerResponse.users[number]): void;
    updateContrails(): void;
    updateModel(a: typeof ServerResponse.users[number]): void;
    addCallsign(
      a: string,
      b: "default" | "xavier" | "premium" | "traffic"
    ): void;
    removeCallsign(): void;
    removeFromWorld(): void;
    removeModels(): void;
    remove(): void;
    getCoordinates(): number[];
    isOnGround(): boolean;
  }

  export function init(): void;
  export function stop(): void;
  export function start(): void;
  export function startUpdates(): void;
  export function stopUpdates(a?: any /*not unused*/): void;
  export function getServerTime(): number;
  export function getUser(a: string): typeof users[string];

  export function updateUsers(a?: typeof ServerResponse.users): void;
  export function startMapUpdate(): void;
  export function update(a: number): void;
  export function errorCallback(a?: JQuery.jqXHR<any>): void;
  export function updateCallback(a?: typeof ServerResponse): void;
  export function sendUpdate(): void;
  export function blockUser(a: string): void;
  export function banUser(a: string): void;
  export function loadModels(): Cesium.Model[];
  export function setNbUsers(a: number): void;
  export function setChatMessage(a: string): void;
}

export namespace ServerResponse {
  export let chatMessages: {
    acid: number;
    cls: string;
    cs: string;
    msg: string;
    uid: string;
  }[];
  export let lastMsgId: number;
  export let myId: string;
  export let serverTime: number;
  export let userCount: number;
  export let users: {
    ac: number;
    ad?: boolean;
    acid?: number | null;
    co: number[];
    cs: string;
    id: string;
    p?: null;
    st: {
      as: number;
      gr: boolean;
      lv?: string;
      sh?: null;
    };
    ti: number;
    ve: number[];
  }[];
}
