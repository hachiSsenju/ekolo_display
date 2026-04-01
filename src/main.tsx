import { createRoot } from "react-dom/client";
import posthog from "posthog-js";
import App from "./app/App.tsx";
import "./styles/index.css";
import "./i18n";

posthog.init("phc_CeNznVb73CpaFWVCBnLQ5xuBesVuipyXikSn3SdrjtcY", {
  api_host: "https://us.i.posthog.com",
  capture_pageview: true,
  capture_pageleave: true,
});

createRoot(document.getElementById("root")!).render(<App />);
