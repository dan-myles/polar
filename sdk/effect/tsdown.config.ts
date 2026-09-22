import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts", "src/2026-10/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
});
