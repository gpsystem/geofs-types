declare namespace animation {
  // TODO handle animations better (geofs contributors' guide might help)
  let values: { [key: string]: any };

  function init(): void;
  function getRampRatio(a: number[] /* maybe? */, b: number): number;
  function getRampValue(a: number[] /* maybe? */, b: number): number;
  function resetValues(a?: { [key: string]: any }): void;
  function getValue(a: string): any;
  function filter(a: any, b: number): any;
}

export default animation;
