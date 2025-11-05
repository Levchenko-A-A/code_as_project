import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jest from 'eslint-plugin-jest';

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"],
    rules: {
      ...js.configs.recommended.rules,
      "semi": ["error", "always"],	                        //отсутствие ';'
      "no-unused-vars": ["error", {                         //предупреждает об неиспользуемых переменных
            "vars": "all",
            "args": "after-used",
            "caughtErrors": "all",
            "ignoreRestSiblings": false,
            "ignoreUsingDeclarations": false,
            "reportUsedIgnorePattern": false
        }],
      "no-var": ["error"],                                  //нельзя использовать VAR
      "space-infix-ops": ["error", { "int32Hint": false }], //пробелы вокруг операторов
    },
    plugins: { js }, extends: ["js/recommended"], 
    languageOptions: { globals: {...globals.browser, ...globals.node} } 
  },
  {
        files: ["src/**/*.test.js"],
    ...jest.configs['flat/recommended'],

  }
]);
