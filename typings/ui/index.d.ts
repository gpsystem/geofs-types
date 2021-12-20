import geofs from "../geofs";
import chatNamespace from "./chat";
import vrNamespace from "./vr";
import hudNamespace from "./hud";

declare namespace ui {
  let playerMarkers: {
    [key: string]: typeof geofs.api.map.planeMarker | null;
  };
  let playerSymbols: Record<string, never>;
  let mouseUpHandlers: ((a: JQuery.Event) => void)[];
  let svgPlanePath: string;
  let isFullscreen: boolean;
  let mapInstance: geofs.map;

  const svgPlaneStyles: {
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

  function init(): void;
  function mouseUpHandler(
    a: JQuery.TypeEventHandler<any, any, any, any, any>
  ): void;
  function showCrashNotification(): void;
  function hideCrashNotification(): void;
  function toggleFullscreen(): void;
  function applyPreferences(): void;
  function toggleButton(a: string, b?: boolean): void;
  function expandLeft(): void;
  function collapseLeft(a?: any /* not used */): void;
  function addMouseUpHandler(a: typeof mouseUpHandlers[number]): void;
  function runMouseUpHandlers(a: JQuery.Event): void;

  namespace panel {
    function init(): void;
    function toggleItem(
      a: string | JQuery | HTMLElement,
      b: JQuery.ClickEvent
    ): void;
    function expendItem(
      a: string | JQuery | HTMLElement,
      b: JQuery.Event
    ): void;
    function toggle(a: string | JQuery | HTMLElement): void;
    function show(a: string | JQuery | HTMLElement): void;
    function hide(a: string | JQuery | HTMLElement, b: boolean): boolean;
  }
  function closePreferencePanel(): void;

  function createMap(
    a?: Partial<{
      zoom: number;
      holder: JQuery;
      standalone: boolean;
      norunways: boolean;
      lat: number;
      lon: number;
    }>
  ): void;
  function stopMap(): void;
  function updateMap(): void;

  class Text {
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
      // Partial of the type of defaultOptions
      b: Partial<{
        rescale: boolean;
        anchor: {
          x: number;
          y: number;
        };
      }> & {
        text: string;
      }
    );
    show(): void;
    hide(): void;
    setText(a: string): void;
    destroy(): void;
  }

  function clearPlayerList(): void;
  function initPlayerList(): void;

  namespace userDialog {
    function init(): void;
    // TODO multiplayer
    function open(a: unknown): void;
    function close(): void;
  }

  const chat: typeof chatNamespace;
  const vr: typeof vrNamespace;
  const hud: typeof hudNamespace;

  const notification: {
    show(a: string): void;
  };
}

export default ui;
