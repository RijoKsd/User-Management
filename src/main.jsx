import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { initDB } from "react-indexed-db-hook";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import {DBConfig} from "./utils/dbConfig"
import { Toaster } from "react-hot-toast";



initDB(DBConfig);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="bottom-center" duration={500} />
  </StrictMode>
);
