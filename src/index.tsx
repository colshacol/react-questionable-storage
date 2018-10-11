import * as React from "react";
import { render } from "react-dom";

import Foo from "./Foo";

const App = () => (
  <div>
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <Foo />
  </div>
);

render(<App />, document.getElementById("root"));
