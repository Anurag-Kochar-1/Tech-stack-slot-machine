import { getLogoById } from "../utils";
import { SYMBOL_GROUPS } from "../constants/symbol-groups";

const cache: Record<string, HTMLImageElement> = {};

export class Symbol {
  name: string;
  img: HTMLImageElement;

  constructor(name: string = Symbol.random()) {
    this.name = name;

    if (cache[name]) {
      this.img = cache[name].cloneNode() as HTMLImageElement;
    } else {
      this.img = new Image();
      const logo = getLogoById(name);
      if (!logo) {
        throw new Error("Logo is undefined!");
      }
      this.img.src = logo.logo;
      this.img.alt = `${logo.name} logo`;
      cache[name] = this.img;
      if (logo.id === "svelteJs") {
        this.img.classList.add("max-w-[85%]");
        this.img.classList.add("!mx-auto");
        this.img.classList.add("h-auto");
      }
    }
  }

  static preload(c: string): void {
    Symbol.getSymbols(c).forEach((symbol) => new Symbol(symbol));
  }

  static getSymbols(category?: string): string[] {
    const frontend = SYMBOL_GROUPS.frontend.map((item) => item.id);
    const backend = SYMBOL_GROUPS.backend.map((item) => item.id);
    const styling = SYMBOL_GROUPS.styling.map((item) => item.id);
    const database = SYMBOL_GROUPS.database.map((item) => item.id);
    const deployment = SYMBOL_GROUPS.deployment.map((item) => item.id);

    switch (category) {
      case "frontend":
        return frontend;
      case "backend":
        return backend;
      case "styling":
        return styling;
      case "database":
        return database;
      case "deployment":
        return deployment;
      default:
        return [
          ...frontend,
          ...backend,
          ...database,
          ...styling,
          ...deployment,
        ];
    }
  }

  static random(category?: string): string {
    const symbols = this.getSymbols(category);
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
}
