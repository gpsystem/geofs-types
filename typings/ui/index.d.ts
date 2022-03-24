/**
 * Can be accessed with `ui`.
 * @module ui
 * @category Global
 */
import * as geofs from "../geofs";
import * as chatNamespace from "./chat";
import * as vrNamespace from "./vr";
import * as hudNamespace from "./hud";

export let playerMarkers: {
  [key: string]: typeof geofs.api.map.planeMarker | null;
};
export let playerSymbols: Record<string, never>;
export let mouseUpHandlers: ((a: JQuery.Event) => void)[];
export let svgPlanePath: string;
export let isFullscreen: boolean;
export let mapInstance: geofs.map;

export const svgPlaneStyles: {
  [key in "traffic" | "blue" | "yellow"]: {
    path: string;
    fillColor: string;
    fillOpacity: number;
    scale: number;
    strokeColor: string;
    strokeWeight: number;
    anchor: number[];
  };
};

export function init(): void;
export function mouseUpHandler(
  a: JQuery.TypeEventHandler<Document, null, Document, Document, "mouseup">
): void;
export function showCrashNotification(): void;
export function hideCrashNotification(): void;
export function toggleFullscreen(): void;
export function applyPreferences(): void;
export function toggleButton(a: string, b?: boolean): void;
export function expandLeft(): void;
export function collapseLeft(a?: any /* not used */): void;
export function addMouseUpHandler(a: typeof mouseUpHandlers[number]): void;
export function runMouseUpHandlers(a: JQuery.Event): void;

export namespace panel {
  export function init(): void;
  export function toggleItem(
    a: string | JQuery | HTMLElement,
    b: JQuery.ClickEvent
  ): void;
  export function expendItem(
    a: string | JQuery | HTMLElement,
    b: JQuery.Event
  ): void;
  export function toggle(a: string | JQuery | HTMLElement): void;
  export function show(a: string | JQuery | HTMLElement): void;
  export function hide(a: string | JQuery | HTMLElement, b: boolean): boolean;
}
export function closePreferencePanel(): void;

export function createMap(
  a?: Partial<{
    zoom: number;
    holder: JQuery;
    standalone: boolean;
    norunways: boolean;
    lat: number;
    lon: number;
  }>
): void;
export function stopMap(): void;
export function updateMap(): void;

export class Text {
  readonly defaultOptions: {
    rescale: false;
    anchor: {
      x: 0;
      y: 0;
    };
  };
  _overlay: typeof geofs.api.cssTransform;

  constructor(
    a: string,
    b: Partial<typeof Text.prototype.defaultOptions> & {
      text: string;
    }
  );
  show(): void;
  hide(): void;
  setText(a: string): void;
  destroy(): void;
}

export function clearPlayerList(): void;
export function initPlayerList(): void;

export namespace userDialog {
  export function init(): void;
  export function open(a: string): void;
  export function close(): void;
}

export const chat: typeof chatNamespace;
export const vr: typeof vrNamespace;
export const hud: typeof hudNamespace;

export const notification: {
  show(a: string): void;
};
