import json from "./json";

export default (storage: Object) => {
  return Object.entries(storage).reduce((final, [key, value]) => {
    final[key] = json.parse(value);
    return final;
  }, {});
};
