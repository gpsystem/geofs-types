/**
 * Can be accessed with `rigidBody`.
 * @module rigidBody
 * @ignore
 * @category Global
 */
export class rigidBody {
  s_inverseMass: number;
  mass: number;
  minLinearVelocity: number;
  minAngularVelocity: number;
  v_linearVelocity: number[];
  v_angularVelocity: number[];
  v_totalForce: number[];
  v_totalTorque: number[];
  v_prevLinearVelocity: number[];
  v_prevTotalTorque: number[];
  v_acceleration: number[];
  v_torque: number[];
  v_localInvInertia: number[];
  m_localInvInertiaTensor: number[][];
  m_worldInvInertiaTensor: number[][];
  gravityForce: number[];
  savedLinearVelocity: number[];
  savedAngularVelocity: number[];

  reset(): void;
  setMassProps(a: number, b?: number | number[]): void;
  getLinearVelocity(): number[];
  getAngularVelocity(): number[];
  setLinearVelocity(a: number[]): void;
  setAngularVelocity(a: number[]): void;
  getVelocityInLocalPoint(a: number[]): number[];
  getForceInLocalPoint(a: number[]): number[];
  applyCentralForce(a: number[]): void;
  applyTorque(a: number[]): void;
  applyForce(a: number[], b: number[]): void;
  applyCentralImpulse(a: number[]): void;
  applyTorqueImpulse(a: number[]): void;
  applyImpulse(a: number[], b: number[]): void;
  computeJacobian(a: number, b: number, c: number[], d: number[]): number;
  computeImpulse(a: number, b: number, c: number[], d: number[]): number[];
  integrateVelocities(a: number): void;
  integrateTransform(a: number): void;
  setCurrentAcceleration(a: number, b?: any /*not used*/): void;
  clearForces(): void;
  saveState(): void;
  restoreState(): void;
}
