/**
 * Can be accessed with `Indicator`.
 * @module Indicator
 * @ignore
 * @category Global
 */
import { Instrument } from "./geofs/aircraftDefinition";

export class Indicator {
  definition: Instrument;
  visibility: boolean;
  overlay: Overlay;

  constructor(a: Indicator["definition"]);
  scale(): void;
  show(): void;
  hide(): void;
  setVisibility(v: boolean): void;
  updateCockpitPosition(): void;
  update(a: boolean): void;
  destroy(): void;
}
