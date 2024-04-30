import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: {
    enabled: true,
  },
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: true,
    themes: [
      {
        day: {
          ...require("./src/utils/themes")["day"],
        },
        night: {
          ...require("./src/utils/themes")["night"],
        },
      },
    ],
  },
};
