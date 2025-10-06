import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./globals.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Desktop from "@/pages/Desktop.tsx";
import Login from "@/pages/Login.tsx";

function isMobile(): boolean {
  const userAgent = navigator.userAgent;
  const isSmallScreen = window.innerWidth < 768;

  return /android|webos|iphone|ipad|ipod/i.test(userAgent) || isSmallScreen;
}


createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {!isMobile() ? (
            <BrowserRouter>
                <Routes>
                    <Route
                        path={import.meta.env.BASE_URL + "/desktop"}
                        element={<Desktop />}
                    />
                    <Route
                        path={import.meta.env.BASE_URL + "/"}
                        element={<Login />}
                    />
                </Routes>
            </BrowserRouter>
        ) : (
            <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
              <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="mb-6">
                  <svg
                    className="w-20 h-20 mx-auto text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Bureau requis
                </h1>
                <p className="text-gray-600 text-lg mb-2">
                  Ce site est uniquement accessible sur les écrans desktop.
                </p>
                <p className="text-gray-500 text-sm">
                  Veuillez utiliser un ordinateur pour accéder à cette expérience.
                </p>
              </div>
            </div>
        )}
    </StrictMode>
);
