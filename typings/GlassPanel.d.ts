import api from "./geofs/api";
import * as Cesium from "cesium";

declare class GlassPanel {
  canvas: api.Canvas;
  entity: Cesium.Entity;

  constructor(a?: unknown);

  // Not Implemented:
  update(): void;
  updateCockpitPosition(): void;
  destroy(): void;
}

export default GlassPanel;
