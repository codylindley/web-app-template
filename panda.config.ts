import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Enable CSS reset (Preflight) for consistent cross-browser baseline styles
  preflight: true,

  // Source files to scan for css() and pattern usage — Panda statically analyzes these at build time
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude from scanning (e.g. generated output dirs)
  exclude: [],

  // SolidJS JSX integration — enables Solid-specific JSX factory types in styled-system
  jsxFramework: 'solid',

  // Extend or override the default Panda theme (colors, spacing, fonts, etc.)
  theme: {
    extend: {},
  },

  // Output directory for the generated styled-system utilities — do not edit manually
  outdir: 'styled-system',
});
