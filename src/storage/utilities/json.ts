const parse = (target: any): any => {
  try {
    return JSON.parse(target);
  } catch (error) {
    return target;
  }
};

const stringify = (target: any): string => {
  return typeof target === "string" ? target : JSON.stringify(target);
};

export default {
  parse,
  stringify
};
