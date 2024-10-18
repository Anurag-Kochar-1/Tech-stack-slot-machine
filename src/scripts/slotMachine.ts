import { Slot } from "./slot";

export function initializeSlotMachine() {
  const config = {
    inverted: false,
    onSpinStart: (symbols: string[][]) => {
      // console.log("onSpinStart", symbols);
    },
    onSpinEnd: (symbols: string[][]) => {
      // console.log("onSpinEnd", symbols);
    },
  };

  new Slot(document.getElementById("slot") as HTMLElement, config);
}