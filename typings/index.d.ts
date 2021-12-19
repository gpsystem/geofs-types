import geofsNamespace from './geofs';
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
  const geofs: typeof geofsNamespace;
  const PAGE_PATH: string;
}