import { hydrateRoot, createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// Check if there's pre-rendered content to hydrate
if (container.innerHTML.trim().length > 0) {
  hydrateRoot(
    container,
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
} else {
  // Fallback to client-side rendering if no pre-rendered content
  createRoot(container).render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
}
