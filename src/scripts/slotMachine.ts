import { Slot } from "./slot";

export function initializeSlotMachine() {
  const config = {
    inverted: true,
    onSpinStart: (symbols: string[][]) => {},
    onSpinEnd: (symbols: string[][]) => {},
  };

  new Slot(document.getElementById("slot") as HTMLElement, config);
}
