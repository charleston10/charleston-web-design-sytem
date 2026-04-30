import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["index.ts"],
  format: ["cjs"],
  dts: {
    compilerOptions: {
      esModuleInterop: true,
      allowSyntheticDefaultImports: true
    }
  },
  sourcemap: true,
  clean: true,
  outDir: "dist",
});
