/**
 * Can be accessed with `audio`.
 * @module audio
 * @category Global
 */
import Definition from "./geofs/aircraftDefinition";

export let impl: {
  webAudio: {
    decodingStack: (() => void)[];
    context: AudioContext;

    createPlayer(): typeof impl.webAudio | null;
    stackDecoding(a: () => void, b?: any /*not used */): void;
    loadMP3(a: string, b: string): void;
    playSound(a: string, b: boolean): void;
    stopSound(a: string): void;
    setVolume(a: string, b: number): void;
    setRate(a: string, b: number): void;
    destroyPlayer(): void;
  };
  html5: {
    player: null;
    createPlayer(): typeof impl.html5 | null;
    loadMP3(a: string, b: string, c: boolean): void;
    playFile(a: string, b: boolean): void;
    playSound(a: string): void;
    stopSound(a: string): void;
    setVolume(a: string, b: number): void;
    setRate(a?: any, b?: any): void; // Not implemented
    destroyPlayer(): void;
  };
  cordova: {
    player: null;
    decodingStack: [];
    createPlater(): typeof impl.cordova | null;
    loadMP3(a: string, b: string): void;
    playSound(a: string, b: boolean): void;
    stopSound(a: string): void;
    setVolume(a: string, b: number): void;
    setRate(a: string, b: number): void;
    destroyPlayer(): void;
  };
  peer2peer: {
    webRTCiFrame: HTMLIFrameElement;
    init(a: string): void;
    destroy(): void;
  };
};

export let soundplayer: typeof impl.webAudio | typeof impl.html5;
export let sounds: {
  [key: string]: {
    cut: number[];
    playing: boolean;
    loading: boolean;
    loaded: boolean;
    loop?: boolean;
    effects?: {
      [key in "volume" | "pitch" | "play" | "start" | "stop"]: {
        lastValue: number | undefined | null;
        ratio: number;
      };
    };
  };
};
export let on: boolean;

export function init(a: Definition[0]["sounds"]): void;
export function loaded(a: string): void;
export function stopped(a: string): void;
export function update(): void;
export function toggleMute(): void;
export function stop(): void;
export function mute(): void;
export function unmute(): void;
export function playStartup(): void;
export function playShutdown(): void;
export function playSoundLoop(a: string, b: boolean): void;
export function stopSoundLoop(a: string): void;
