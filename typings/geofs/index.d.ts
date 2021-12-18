import { FrameCallback } from '../index';
import apiNamespace from './api';


/**
 * Types living in the geofs global variable
 */
declare namespace geofs {
    const frameCallbackStack: {[key: string]: FrameCallback};
    const api: typeof apiNamespace;
}
export default geofs;
