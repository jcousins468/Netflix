import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app.js"; // Might need to be lowercased

const root = createRoot(document.getElementById("root"));
root.render(<App />);
