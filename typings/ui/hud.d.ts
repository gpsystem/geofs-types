/**
 * Can be accessed with `ui.hud`.
 * @module hud
 * @category ui
 */
export let stall: Overlay;
export let stallAlarmSet: boolean;
export let stallAlarmOn: boolean;
export let stallAlarmOnTimeout: number;

export function init(): void;
export function stallAlarm(a: boolean): void;
export function autopilotIndicator(a: boolean): void;
