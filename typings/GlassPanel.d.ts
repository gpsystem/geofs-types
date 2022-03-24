/**
 * Can be accessed with `GlassPanel`.
 * @module GlassPanel
 * @ignore
 * @category Global
 */
import * as api from "./geofs/api";
import * as Cesium from "cesium";

export class GlassPanel {
  canvas: api.Canvas;
  entity: Cesium.Entity;

  constructor(a?: unknown);

  // Not Implemented:
  update(): void;
  updateCockpitPosition(): void;
  destroy(): void;
}
