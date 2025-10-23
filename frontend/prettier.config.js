//  @ts-check

/** @type {import("prettier").Options} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["clsx", "twMerge"],
};

export default config;
