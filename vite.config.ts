import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { isDev } from "@builder.io/qwik/build";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    clearScreen: false,
    debug: isDev,
    plugins: [
      qwikCity({

      }),
      qwikVite({
        // entryStrategy: {
        //   type: 'inline',
        // },

      }),
      tsconfigPaths({

      })
    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
