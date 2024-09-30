import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { initDB } from "react-indexed-db-hook";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import {DBConfig} from "./utils/dbConfig"


initDB(DBConfig);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
