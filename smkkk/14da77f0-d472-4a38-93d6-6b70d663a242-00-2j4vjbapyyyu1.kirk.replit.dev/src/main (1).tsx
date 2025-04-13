import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Import fonts from Google
const linkFont = document.createElement("link");
linkFont.rel = "stylesheet";
linkFont.href =
  "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap";
document.head.appendChild(linkFont);

// Import Font Awesome icons
const linkIcon = document.createElement("link");
linkIcon.rel = "stylesheet";
linkIcon.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
document.head.appendChild(linkIcon);

// Set title
document.title = "Shaik Mahaboob Khan | Professional Polo Player";

// Add meta description
const metaDescription = document.createElement("meta");
metaDescription.name = "description";
metaDescription.content = "Shaik Mahaboob Khan - Professional Polo Player, Horse Riding Instructor, and Polo Coach. Explore achievements, media, and connect with me.";
document.head.appendChild(metaDescription);

createRoot(document.getElementById("root")!).render(<App />);
