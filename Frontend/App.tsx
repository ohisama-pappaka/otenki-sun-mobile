import React from "react";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";

import Main from "./src/Main";

const App = () => (
  // XXX: Error を出してるが解消方法がわからない。ただ普通に動く
  <TailwindProvider utilities={utilities}>
    <Main />
  </TailwindProvider>
);

export default App;
