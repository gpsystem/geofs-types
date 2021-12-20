import api from './api';

declare namespace utils {
    const timeProvider: typeof window.performance | typeof window.Date;
    let lastNow: number;
    function fastNow(): number;
    function now(): number;

    function llaDistanceInMeters(a: number[], b: number[], c?: number[]): number;
    function pivotArray<T>(a: T[]): {[key: string]: 1};
    function htrFromHeadingNormal(a: number, b: number[]): number[];
    function hashCode(a: string): 0 | string;
    function displayAltitude(a: number): string;
    function bearingBetweenLocations(a: number[], b: number[]): number;
    function lookAt(a: number[], b: number[], c: number[]): number[];
    function limitRate(a: number, b: number, c: number, d: number): number;
    
    namespace easingFunctions {
        function linear(a: number): number;
        function easeInQuad(a: number): number;
        function easeOutQuad(a: number): number;
        function easeInOutQuad(a: number): number;
        function easeInCubic(a: number): number;
        function easeOutCubic(a: number): number;
        function easeInOutCubic(a: number): number;
        function easeInQuart(a: number): number;
        function easeOutQuart(a: number): number;
        function easeInOutQuart(a: number): number;
        function easeInQuint(a: number): number;
        function easeOutQuint(a: number): number;
        function easeInOutQuint(a: number): number;
    }

    function isWebglSupported(): false | WebGLRenderingContext;
}

export default utils;

declare global {
    function absMin(a: number, b: number): number;
    function span(a: number, b?: number, c?: number): number;
    function boundHours24(a: number): number;
    function fixAngle(a: number): number;
    function fixAngle360(a: number): number;
    function fixAngles360(a: number[]): number[]
    function fixAngles(a: number[]): number[];
    function exponentialSmoothingV3(a: string, b: [], c?: number, d?: number): number[];
    function exponentialSmoothing(a: number, b: number, c?: number, d?: number): number;
    function getBuildingCollision(a?: any /* unused */): null;
    function xyz2lla(a: number[], b: number[]): number[];
    function xy2ll(a: number[], b: number[]): number[];
    function lla2xyz(a: number[], b: number[]): number[];
    function ll2xy(a: number[], b: number[]): number[];
    function clamp(a: number, b: number, c: number): number;
    function geoDecodeLocation(a: string, b: Function): void;

    class Overlay {
        definition: {
            url: string;
            anchor: {
                x: number;
                y: number;
            };
            position: {
                x: number;
                y: number;
            };
            rotation: number;
            size: {
                x: number;
                y: number;
            };
            offset: {
                x: number;
                y: number;
            };
            visibility: boolean;
            opacity: number;
            scale: {
                x: number;
                y: number;
            };
            rescale: boolean;
            rescalePosition: boolean;
            alignment: {
                x: "left" | "right" | "top" | "bottom";
                y: "left" | "right" | "top" | "bottom";
            };
            overlays: Partial<typeof Overlay.prototype.definition>[];
        } & {
            animations?: {
                type: string;
                [key: string]: any;
            };
            animateRotation?: boolean;
        };
        children: Overlay[];
        parent: this;
        position: typeof Overlay.prototype.definition.position;
        size: typeof Overlay.prototype.definition.size;
        iconFrame: {
            x: number;
            y: number;
        };
        animateVisibility?: boolean;
        animationVisibility?: boolean;
        scale: typeof Overlay.prototype.definition.scale;
        positionOffset: typeof Overlay.prototype.definition.offset;
        _offest: {
            x: number;
            y: number;
        };
        _sizeScale: number;
        rotation: typeof Overlay.prototype.definition.rotation;
        opacity: typeof Overlay.prototype.definition.opacity;
        anchor: typeof Overlay.prototype.definition.anchor;
        visibility: typeof Overlay.prototype.definition.visibility;
        overlay: api.cssTransform;

        constructor(a: Partial<typeof Overlay.prototype.definition>, b: Overlay);
        setVisibility(a: boolean): void;
        setOpacity(a: number): void;
        scaleAllProperties(a?: {x: number, y: number}): void;
        scaleAndPlace(a?: {x: number, y: number}, b?: {x: number, y: number}, c?: boolean): void;
        place(a?: {x: number, y: number}): void;
        scaleFromParent(a?: {x: number, y: number}): {x: number, y: number};
        positionFromParentRotation(): {x: number, y: number};
        animate(a: boolean): void;
        translateIcon(a: number, b: "X" | "Y"): void;
        rotate(a: number): void;
        setText(a: string): void;
        setTitle(a: string): void;
        destroy(): void;
    }

    function lookAt(a: number[], b: number[], c: number[]): number[];
    function getURLParameters(): {[key: string]: string};
    function clone<T>(a: T): T;

    class PID {
        _kp: number;
        _ki: number;
        _kd: number;
        _maxOutput: number;
        _minOutput: number;
        _setPoint: number;
        _integral: number;
        _previousError: number;
        _previousInput: number;

        constructor(a: number, b: number, c: number);
        reset(): void;
        initialize(a: number, b: number): void;
        set(a: number, b: number, c: number): void;
        compute(a: number, b: number): number;
    }
}
