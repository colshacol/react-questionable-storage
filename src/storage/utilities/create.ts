import clone from "./clone";

export default (local: Object, session: Object): Object => {
  return {
    local: clone(local),
    session: clone(session)
  };
};
