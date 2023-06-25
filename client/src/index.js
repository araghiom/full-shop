import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store,persistor} from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
