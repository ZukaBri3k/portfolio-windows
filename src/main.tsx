import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./globals.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Desktop from "@/pages/Desktop.tsx";
import Login from "@/pages/Login.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={import.meta.env.BASE_URL + "/desktop"} element={<Desktop/>}/>
        <Route path={import.meta.env.BASE_URL + "/"} element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
