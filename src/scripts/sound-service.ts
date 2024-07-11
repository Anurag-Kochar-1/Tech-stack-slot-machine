import { Sound } from "./sound";

class SoundServiceClass {
    blipSound = new Sound(
      "https://utfs.io/f/42412a11-0bbe-4fdd-a5de-c013ae844e3f-1sve9.mp3"
    );
    buttonSound = new Sound(
      "https://utfs.io/f/3e9c13cf-8aa5-4ca0-92b5-8ada3a255423-4vv1d1.mp3"
    );
    thalaSound = new Sound(
      "https://utfs.io/f/8830e499-c194-47d8-88c3-a6930d7facf7-779yu4.mp3"
    );
    soundsStatus = "loading";
    isEnabled = false;
    private _currentVolume = 0.6;

    constructor() {
      this.loadSounds();
    }

    loadSounds() {
      this.soundsStatus = "loading";
      this.isEnabled = false;

      Promise.all([
        this.blipSound.load(),
        this.buttonSound.load(),
        this.thalaSound.load(),
      ])
        .then(() => {
          this.soundsStatus = "loaded";
          this.isEnabled = true;
        })
        .catch(() => {
          this.soundsStatus = "error";
          this.isEnabled = false;
        });
    }

    enable() {
      if (this.soundsStatus === "loaded") {
        this.isEnabled = true;
      } else if (this.soundsStatus === "error") {
        this.loadSounds();
      }
    }

    disable() {
      if (this.soundsStatus !== "loaded") return;
      this.blipSound.stop();
      this.buttonSound.stop();
      this.thalaSound.stop();

      this.isEnabled = false;
    }

    // @ts-ignore
    blip(...args) {
      // @ts-ignore
      if (this.isEnabled) {
        SMSoundService.thalaSound.stop();
        const volumeAdjustedArgs = [this._currentVolume, ...args];
        this.blipSound.play(...volumeAdjustedArgs);
      }
    }

    // @ts-ignore
    button(...args) {
      this.buttonSound.play(...args);
    }

    // @ts-ignore
    thala(...args) {
      if (this.isEnabled) {
        const volumeAdjustedArgs = [this._currentVolume, ...args];
        this.thalaSound.play(...volumeAdjustedArgs);
      }
    }

    set currentVolume(value: number) {
      this._currentVolume = Math.max(0, Math.min(1, value));
    }

    get currentVolume() {
      return this._currentVolume;
    }
  }

export const SMSoundService = new SoundServiceClass();