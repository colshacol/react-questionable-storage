import * as React from "react";

import { connectStorage, storage } from "./storage";

// isAuthenticated and selectedCountry will be provided
// to Foo via props.
const storageMapper = ({ local, session }) => {
  return {
    isAuthenticated: String(local.login.isAuthenticated),
    selectedCountry: session.dashboard.selectedCountry
  };
};

@connectStorage(storageMapper)
class Foo extends React.Component {
  setSelectedCountry = which => () => {
    storage.commit(({ local, session }) => {
      session.dashboard.selectedCountry = which;
    });
  };

  syncStorage = () => {
    storage.sync();
  };

  render() {
    return (
      <div style={{ border: "1px solid #333", padding: "12px" }}>
        <p>
          Change the selectedCountry with the buttons. This will only cause
          application state changes. To commit the changes and sync
          local/session storages, click the sync button.
        </p>
        <p>is authenticated ? {this.props.isAuthenticated}</p>
        <p>selected country ? {this.props.selectedCountry}</p>
        <button onClick={this.setSelectedCountry("SP")}>
          Set country to SP
        </button>
        <button onClick={this.setSelectedCountry("US")}>
          Set country to US
        </button>
        <button onClick={this.syncStorage}>sync</button>
      </div>
    );
  }
}

export default Foo;
