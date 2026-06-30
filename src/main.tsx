import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import App from "./App.tsx";
import { LocaleProvider } from "./i18n/LocaleContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LocaleProvider>
      <App />
      <Toaster position="top-center" richColors />
    </LocaleProvider>
  </StrictMode>
);
