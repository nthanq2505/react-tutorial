import { createRoot } from "react-dom/client";
// import ComponentA from "./components/ComponentA/ComponentA";
import MyApp from "./App";

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById("app"));
root.render(<MyApp />);
