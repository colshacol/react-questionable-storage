import * as React from "react";
import * as isEqual from "react-fast-compare";
import { purist } from "@reacting/purist";

import storage from "./storage";

const connectStorage = (mapper: Function) => Component => {
  const Comp = purist(Component);

  return class ConnectedStorage extends React.PureComponent {
    state = {
      storage: mapper(storage.stores)
    };

    componentWillMount() {
      storage.onCommit(event => {
        const newResult = mapper(storage.stores);
        const isDifferent = !isEqual(this.state.storage, newResult);

        isDifferent &&
          this.setState({
            storage: newResult
          });
      });
    }

    render() {
      return <Comp {...this.state.storage} {...this.props} />;
    }
  };
};

export { storage };
export { connectStorage };
