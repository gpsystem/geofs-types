import geofsNamespace from "./geofs";
import uiNamespace from "./ui";
import flightNamespace from "./flight";
import rigidBodyDefinition from "./rigidBody";
import objectsNamespace from "./objects";
import controlsNamespace from "./controls";
import weatherNamespace from "./weather";
import audioNamespace from "./audio";
import multiplayerNamespace from "./multiplayer";
import Object3DDefinition from "./Object3D";
import IndicatorDefinition from "./Indicator";
import instrumentsNamespace from "./instruments";
import GlassPanelDefinition from "./GlassPanel";
export as namespace GeoFS;

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
  const PAGE_PATH: string;
  const geofs: typeof geofsNamespace;
  const ui: typeof uiNamespace;
  const flight: typeof flightNamespace;
  const objects: typeof objectsNamespace;
  const controls: typeof controlsNamespace;
  const weather: typeof weatherNamespace;
  const audio: typeof audioNamespace;
  const multiplayer: typeof multiplayerNamespace;
  const instruments: typeof instrumentsNamespace;

  // To make classes global, extend them with nothing:
  class rigidBody extends rigidBodyDefinition {}
  class Object3D extends Object3DDefinition {}
  class Indicator extends IndicatorDefinition {}
  class GlassPanel extends GlassPanelDefinition {}
}
