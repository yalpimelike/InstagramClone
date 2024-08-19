import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n/i18n";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./store/Store.tsx";
import { router } from "./router/Index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
     <Provider store={Store}>
    <RouterProvider router={router} />
   
      <App />
    </Provider>
  </React.StrictMode>
);
