import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import CreateUpdateNote from "./components/CreateUpdateNote";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/add-note" element={<CreateUpdateNote />} />
          <Route path="/update-note/:id" element={<CreateUpdateNote />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
