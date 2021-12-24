import type * as Cesium from "cesium";
import api from "./geofs/api";

declare namespace multiplayer {
  let nbUsers: number;
  let users: { [key: string]: User };
  let visibleUsers: { [key: string]: User };
  let numberOfLOD: number;
  let captainIconUrl: string;
  let premiumIconUrl: string;
  let minUpdateDelay: number;
  let hearbeatTimeout: undefined;
  let mapInterval: number;
  let hearbeatLife: number;
  let userLife: number;
  let userHalfLife: number;
  let userHeartBeatPeriod: number;
  let trafficLife: number;
  let trafficHalfLife: number;
  let trafficHeartBeatPeriod: number;
  let contrailEmitters: {
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
  let mapUpdatePeriod: number;
  let myId: string;
  let lastRequest: null | JQuery.jqXHR;
  let lastResponse: typeof ServerResponse;
  let lastJoinedCoordinates: string;
  let lastRequestTime: number;
  let serverTimeOffset: number;
  let labelVisibilityRange: number;
  let farVisibilityRange: number;
  let lowVisibilityRange: number;
  let nearVisibilityRange: number;
  let chatMessage: string;
  let chatMessageId: number;
  let on: boolean;
  let started: boolean;
  let callsignPlacemarkAltitude: number;
  let updateFunctions: [];
  let labelOptions: {
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
  let iconOptions: {
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
  let nextUpdateTime: number | null;
  let avgPing: number;
  let minPing: number;

  let flightSharing: {
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

  class User {
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
    contrailEmitter?: null; // TODO probably a particleEmitter
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

  function init(): void;
  function stop(): void;
  function start(): void;
  function startUpdates(): void;
  function stopUpdates(a?: any /*not unsed*/): void;
  function getServerTime(): number;
  function getUser(a: string): typeof users[string];

  function updateUsers(a?: typeof ServerResponse.users): void;
  function startMapUpdate(): void;
  function update(a: number): void;
  function errorCallback(a?: JQuery.jqXHR<any>): void;
  function updateCallback(a?: typeof ServerResponse): void;
  function sendUpdate(): void;
  function blockUser(a: string): void;
  function banUser(a: string): void;
  function loadModels(): Cesium.Model[];
  function setNbUsers(a: number): void;
  function setChatMessage(a: string): void;
}

export default multiplayer;

declare namespace ServerResponse {
  let chatMessages: {
    acid: number;
    cls: string;
    cs: string;
    msg: string;
    uid: string;
  }[];
  let lastMsgId: number;
  let myId: string;
  let serverTime: number;
  let userCount: number;
  let users: {
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

export { ServerResponse };
