declare namespace hud {
    let stall: Overlay;
    let stallAlarmSet: boolean;
    let stallAlarmOn: boolean;
    let stallAlarmOnTimeout: number;

    function init(): void;
    function stallAlarm(a: boolean): void;
    function autopilotIndicator(a: boolean): void;
};

export default hud;