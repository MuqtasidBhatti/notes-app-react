import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import {NotesProvider} from "./context/notesContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NotesProvider>
      <App />
    </NotesProvider>
  </BrowserRouter>
);