import { Reel } from "./reel";
import { Symbol } from "./symbol";
import { SMSoundService } from "./sound-service";

interface SlotConfig {
  inverted?: boolean;
  onSpinStart?: (symbols: string[][]) => void;
  onSpinEnd?: (symbols: string[][]) => void;
}

export class Slot {
  currentSymbols: string[][];
  nextSymbols: string[][];
  container: HTMLElement;
  reels: Reel[];
  spinButton: HTMLButtonElement;
  autoPlayCheckbox: HTMLInputElement;
  config: SlotConfig;
  intervalId: number | null;
  counter: number;

  constructor(domElement: HTMLElement, config: SlotConfig = {}) {
    Symbol.preload("deployment");

    this.currentSymbols = [
      ["reactJs", "vueJs", "angularJs"],
      ["nodeJs", "springboot", "django"],
      ["mui", "si", "antd"],
      ["mongodb", "postgres", "mysql"],
      ["vercel", "aws", "azure"],
    ];

    this.nextSymbols = [
      ["reactJs", "reactJs", "reactJs"],
      ["reactJs", "reactJs", "reactJs"],
      ["reactJs", "reactJs", "reactJs"],
      ["reactJs", "reactJs", "reactJs"],
      ["reactJs", "reactJs", "reactJs"],
    ];

    this.container = domElement;

    this.reels = Array.from(this.container.getElementsByClassName("reel")).map(
      (reelContainer, idx) =>
        new Reel(reelContainer as HTMLElement, idx, this.currentSymbols[idx])
    );
    this.spinButton = document.getElementById("spin") as HTMLButtonElement;
    this.spinButton.addEventListener("click", () => {
      this.spin();
      // SMSoundService.blip();
    });

    this.autoPlayCheckbox = document.getElementById(
      "autoplay"
    ) as HTMLInputElement;

    if (config.inverted) {
      this.container.classList.add("inverted");
    }

    this.config = config;
    this.intervalId = null;
    this.counter = 0;
  }

  checkFirstIndexIsSeven(data: string[][]): boolean {
    for (const array of data) {
      if (array[1] !== "seven") {
        return false;
      }
    }
    return true;
  }

  spin(): Promise<void> {
    this.counter++;
  
    // SMSoundService.enable();
    // this.intervalId = window.setInterval(() => {
    //   if (SMSoundService.isEnabled) {
    //     SMSoundService.blip();
    //   }
    // }, 100);

    let isSoundOn = JSON.parse(
      window.localStorage.getItem("isSoundOn") || "true"
    );
    if (isSoundOn) {
      SMSoundService.enable();
      SMSoundService.currentVolume = 0.6;

      const intervalDuration = 3750;
      const volumeDecreaseInterval = 100;
      const totalSteps = intervalDuration / volumeDecreaseInterval;
      let currentStep = 0;
      const startVolume = SMSoundService.currentVolume;

      this.intervalId = window.setInterval(() => {
        if (SMSoundService.isEnabled) {
          currentStep++;
          const volumeDecreaseRatio = Math.pow(currentStep / totalSteps, 0.9);
          const newVolume = startVolume * (1 - volumeDecreaseRatio);

          SMSoundService.currentVolume = Math.max(0, newVolume);
          // console.log(`Value -> `, Math.max(0, newVolume));
          SMSoundService.blip();

          if (currentStep >= totalSteps) {
            clearInterval(this.intervalId as any);
            this.intervalId = null;
            SMSoundService.currentVolume = 0;
          }
        }
      }, volumeDecreaseInterval);
    }

    this.currentSymbols = this.nextSymbols;
    this.nextSymbols = [
      [
        Symbol.random("frontend"),
        Symbol.random("frontend"),
        Symbol.random("frontend"),
      ],
      [
        Symbol.random("backend"),
        Symbol.random("backend"),
        Symbol.random("backend"),
      ],
      [
        Symbol.random("styling"),
        Symbol.random("styling"),
        Symbol.random("styling"),
      ],
      [
        Symbol.random("deployment"),
        Symbol.random("deployment"),
        Symbol.random("deployment"),
      ],
      [
        Symbol.random("database"),
        Symbol.random("database"),
        Symbol.random("database"),
      ],
    ];

    this.onSpinStart(this.nextSymbols);

    return Promise.all(
      this.reels.map((reel) => {
        reel.renderSymbols(this.nextSymbols[reel.idx]);
        return reel.spin();
      })
    ).then(() => {
      this.onSpinEnd(this.nextSymbols);
      SMSoundService.disable();
    });
  }

  onSpinStart(symbols: string[][]): void {
    this.spinButton.disabled = true;
    this.config.onSpinStart?.(symbols);
  }

  onSpinEnd(symbols: string[][]): void {
    this.config.onSpinEnd?.(symbols);
    this.spinButton.disabled = false;
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
