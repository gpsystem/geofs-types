import geofsNamespace from './geofs';

export interface FrameCallback {
    callbacks: {
      [key: string]: any;
    };
    lastId: number;
    maxExecutionTime: number;
    lastIndex: number;
    [key: string]: any;
}

export declare var geofs: typeof geofsNamespace;