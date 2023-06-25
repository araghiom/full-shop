import React from "react";

import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <PersistGate loading="null" persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  </BrowserRouter>,
  
);
