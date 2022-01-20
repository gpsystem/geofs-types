import Definition from "./geofs/aircraftDefinition";

declare namespace audio {
  let impl: {
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

  let soundplayer: typeof impl.webAudio | typeof impl.html5;
  let sounds: {
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
  let on: boolean;

  function init(a: Definition[0]["sounds"]): void;
  function loaded(a: string): void;
  function stopped(a: string): void;
  function update(): void;
  function toggleMute(): void;
  function stop(): void;
  function mute(): void;
  function unmute(): void;
  function playStartup(): void;
  function playShutdown(): void;
  function playSoundLoop(a: string, b: boolean): void;
  function stopSoundLoop(a: string): void;
}

export default audio;
