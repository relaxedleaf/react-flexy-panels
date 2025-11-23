import * as ReactDOM from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import { HashRouter } from "react-router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
