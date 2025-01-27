import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import CreateUpdateNote from "./components/CreateUpdateNote";
import NoteState from "./context/notes/NoteState";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Notes from "./components/Notes";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
          </Routes>
          <Notes />
        </Router>
      </NoteState>
    </>
  );
}

export default App;
