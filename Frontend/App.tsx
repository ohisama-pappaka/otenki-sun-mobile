import React from "react";
import { TailwindProvider } from "tailwind-rn";
// XXX: 警告が出ていることは確認している
import utilities from "./tailwind";

import Main from "src/Main";

const App = () => (
  // XXX: Error を出してるが解消方法がわからない。ただ普通に動く
  <TailwindProvider utilities={utilities}>
    <Main />
  </TailwindProvider>
);

export default App;
