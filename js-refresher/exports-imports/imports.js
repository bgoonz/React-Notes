import person from "./exports.js";
import { cleanString } from "./utility.js"; //named imports
import { string } from "./utility.js"; //named imports

//alias named import:
import { string as str } from "./utility.js";

console.log(
  "person:",
  person,
  "|",
  "string:",
  string,
  "|",
  "cleanString",
  cleanString(string + str)
);
