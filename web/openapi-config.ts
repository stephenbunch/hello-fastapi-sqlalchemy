import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "http://127.0.0.1:8000/openapi.json",
  apiFile: "./src/api/empty.ts",
  apiImport: "emptyApi",
  outputFile: "./src/api/generated.ts",
  exportName: "generatedApi",
};

export default config;
