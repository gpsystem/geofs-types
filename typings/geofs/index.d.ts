import { FrameCallback } from '../index';
import apiNamespace from './api';
import runwaysNamespace from './runways';


/**
 * Types living in the geofs global variable
 */
declare namespace geofs {
    const frameCallbackStack: {[key: string]: FrameCallback};
    const api: typeof apiNamespace;
    const runways: typeof runwaysNamespace;
}
export default geofs;
