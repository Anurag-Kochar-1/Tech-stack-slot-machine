export type Symbol_ = {
  id: string;
  name: string;
  logo: string;
  landingPageUrl: string;
};

export type SymbolGroups = {
  frontend: Symbol_[];
  backend: Symbol_[];
  database: Symbol_[];
  styling: Symbol_[];
  deployment: Symbol_[];
};
