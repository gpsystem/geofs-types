import type * as Cesium from "cesium";

interface Debug {
  logStack: string[];
  logStackMaxLength: number;
  $panel: JQuery<HTMLElement>;
  $debugFrame: JQuery<HTMLElement>;
  $debugWatch: JQuery<HTMLElement>;
  $debugLog: JQuery<HTMLElement>;
  axis: {
    model: Cesium.Model;
  } | null;
  probe?:
    | {
        model: Cesium.Model;
      }
    | null
    | undefined;
  atmosphereSize: number[];
  atmosphereResolution: number[];
  dataSource?: Cesium.CustomDataSource | undefined;

  init(): void;
  turnOn(): void;
  afterWorldInit(): void;
  turnOff(): void;
  watch(a: string, b: string): void;
  /**
   * @param a I'm not sure yet
   */
  error(a: any, b: string): void;
  log(a: string): void;
  debugger(): void;
  throw(a: Error): void;
  alert(a: string, b: Error): void;
  stackLog(a: string): void;
  update(a: number): void;
  loadAxis(): void;
  placeProbe(a: number[]): void;
  loadProbe(): void;
  placeAxis(a: number[][], b: number[]): void;
  toggleDebug(): void;
  drawAtmosphere(a: number[]): void;
}

declare namespace d {
  let debug: Debug & {
    [key: string]: HTMLElement; // debug.watch makes this necessary
  };
}

export default d.debug;
