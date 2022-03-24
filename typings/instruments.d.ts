/**
 * Can be accessed with `instruments`.
 * @module instruments
 * @category Global
 */
import Definition, { Instrument, Animation } from "./geofs/aircraftDefinition";

type DefaultInstruments =
  | keyof Definition[0]["instruments"]
  | "altitude_legacy"
  | "jetfuel"
  | "wind";

type DefaultIncludes =
  | "3d-altimeter"
  | "3d-ias"
  | "3d-ias-high"
  | "3d-ias-supersonic"
  | "3d-compass"
  | "3d-vario"
  | "3d-vario-high"
  | "3d-attitude-jet"
  | "3d-attitude-jet2"
  | "3d-rpm"
  | "3d-jet-rpm"
  | "3d-attitude"
  | "3d-turn-coordinator"
  | "3d-gmeter"
  | "3d-compassball"
  | "3d-manifold"
  | "3d-oil"
  | "3d-PFD";

export let stackPosition: {
  x: number;
  y: number;
};

export let margins: number[];
export let defaultMargin: number;
export let visible: boolean;
export let list: {
  [key in DefaultInstruments | "wind"]: Indicator;
};
export let groups: {
  all: typeof list;
};
export let gaugeOverlayPosition: number[];
export let gaugeOverlayOrigin: number[];

export let definitions: {
  [key in DefaultInstruments]: Instrument;
};
export let definitionsMobile: never; // Only used when running on mobile; can't bother typing them, since it won't be useful.
export let definitions3DOverlay: never; // Only used when running on mobile; can't bother typing them, since it won't be useful.

export let includesDefinitions: {
  [key in Exclude<DefaultIncludes, "3d-PFD">]: [
    {
      model: string;
    },
    ...{
      name: string;
      node: string;
      animations?: Animation[];
    }[]
  ];
} & {
  "3d-PFD": [Record<string, unknown>];
};
export let resizeHandler: any; // TODO me

export function init(
  a?: "default" | "jet" | Definition[0]["instruments"]
): void;
export function toggle(): void;
export function add(a: Indicator, b: keyof typeof list): void;
export function hide(a?: string): void;
export function show(a?: string): void;
export function rescale(): void;
export function update(a?: boolean): void;
export function updateCockpitPositions(): void;
export function updateScreenPositions(): void;
