import { FrameCallback } from '../index';
import apiNamespace from './api';
import runwaysNamespace from './runways';
import animationNamespace from './animation';


/**
 * Types living in the geofs global variable
 */
declare namespace geofs {
    const frameCallbackStack: {[key: string]: FrameCallback};
    const api: typeof apiNamespace;
    const runways: typeof runwaysNamespace;
    const animation: typeof animationNamespace;
}
export default geofs;
