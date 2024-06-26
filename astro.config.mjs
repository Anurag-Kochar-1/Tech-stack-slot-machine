import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), tailwind()]
});