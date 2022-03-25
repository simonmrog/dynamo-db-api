import flatten from "flat";

export function flattenObject(json, delimiter = "_") {
  return flatten(json, { delimiter });
}
