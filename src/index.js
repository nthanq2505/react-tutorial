import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById("app"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
