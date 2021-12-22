import geofsNamespace from "./geofs";
import uiNamespace from "./ui";
import flightNamespace from "./flight";
import rigidBodyDefinition from "./rigidBody";
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
  class rigidBody extends rigidBodyDefinition {}
}
