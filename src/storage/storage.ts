import * as mitt from "mitt";
import sync from "./utilities/sync";
import create from "./utilities/create";

const stores: Object = create(localStorage, sessionStorage);

class Storage {
  emitter = mitt();
  local = stores.local;
  session = stores.session;

  constructor() {
    window.addEventListener("beforeunload", event => {
      this.sync();
    });
  }

  // Shorthand for getting local and session together.
  get stores() {
    return {
      local: this.local,
      session: this.session
    };
  }

  sync = () => {
    return sync(this.stores);
  };

  // Alerts all connectStorage components to recalculate
  // their values for render.
  commit = handler => {
    handler && handler(this.stores);
    this.emitter.emit("commit", {});
  };

  // Used by connectStorage component to subscribe to
  // updates following storage.commit(). Can also be used
  // anywhere to set up other reactions to storage changes.
  onCommit(handler: Function) {
    return this.emitter.on("commit", event => {
      return handler(event);
    });
  }

  // Our normal getters and functions could be added here
  // without breaking anything.
}

export default new Storage();
