import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./store/index.ts";
import { Provider } from "react-redux";
import { AppInitializationGuard } from "./app/AppInitializationGuard.tsx";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    {/* see store.index.ts */}
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <React.StrictMode>
          <AppInitializationGuard>
            <App />
          </AppInitializationGuard>
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
