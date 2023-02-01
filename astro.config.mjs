import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vue from "@astrojs/vue";

const vueConfig = {
  template: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith("v-")
    }
  },
  appEntryPoint: "/src/pages/_app",
  jsx: {
    // treat any tag that starts with v- as custom elements
    isCustomElement: tag => tag.startsWith("v-")
  }
};

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue(vueConfig)]
});