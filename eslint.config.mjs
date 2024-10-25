import globals from "globals";
import pluginJs from "@eslint/js";
import lintDicoding from "eslint-config-dicodingacademy";

export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  lintDicoding,
];