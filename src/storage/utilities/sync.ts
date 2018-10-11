import json from "./json";

const update = ({ local, session }) => {
  const name = local ? "localStorage" : "sessionStorage";
  const target = local || session;

  Object.entries(target).forEach(([key, value]) => {
    window[name][key] = json.stringify(value);
  });
};

export default ({ local, session }) => {
  return new Promise((resolve, reject) => {
    update({ local });
    update({ session });
  });
};
