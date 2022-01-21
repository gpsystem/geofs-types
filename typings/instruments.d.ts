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

declare namespace instruments {
  let stackPosition: {
    x: number;
    y: number;
  };

  let margins: number[];
  let defaultMargin: number;
  let visible: boolean;
  let list: {
    [key in DefaultInstruments | "wind"]: Indicator;
  };
  let groups: {
    all: typeof list;
  };
  let gaugeOverlayPosition: number[];
  let gaugeOverlayOrigin: number[];

  let definitions: {
    [key in DefaultInstruments]: Instrument;
  };
  let definitionsMobile: never; // Only used when running on mobile; can't bother typing them, since it won't be useful.
  let definitions3DOverlay: never; // Only used when running on mobile; can't bother typing them, since it won't be useful.

  let includesDefinitions: {
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
  let resizeHandler: any; // TODO me

  function init(a?: "default" | "jet" | Definition[0]["instruments"]): void;
  function toggle(): void;
  function add(a: Indicator, b: keyof typeof list): void;
  function hide(a?: string): void;
  function show(a?: string): void;
  function rescale(): void;
  function update(a?: boolean): void;
  function updateCockpitPositions(): void;
  function updateScreenPositions(): void;
}

export default instruments;
