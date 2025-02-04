import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NoteState from "./context/notes/NoteState";
import AlertState from "./context/alert/AlertState";
import AuthState from "./context/Auth/AuthState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AlertState>
      <NoteState>
        <AuthState>
          <App />
        </AuthState>
      </NoteState>
    </AlertState>
  </React.StrictMode>
);
