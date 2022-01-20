import { AnimationValues, Animation } from "./aircraftDefinition";

declare namespace animation {
  let values: {
    [key in AnimationValues]: number;
  };

  function init(): void;
  function getRampRatio(a: number[], b: number): number;
  function getRampValue(a: number[], b: number): number;
  function resetValues(a?: typeof values): void;
  function getValue(a: AnimationValues): any;
  function filter(a: Animation, b: number): number;
}

export default animation;
