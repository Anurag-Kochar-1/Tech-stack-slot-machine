import { SYMBOL_GROUPS } from "../constants/symbol-groups";
import type { SymbolGroups, Symbol_ } from "../types";

export const getLogoById = (id: string): Symbol_ | undefined => {
  const groups: SymbolGroups = SYMBOL_GROUPS;

  for (const groupKey in groups) {
    const group = groups[groupKey as keyof SymbolGroups];
    const item = group.find((symbol) => symbol.id === id);
    if (item) {
      return item;
    }
  }

  return undefined;
};

