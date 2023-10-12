import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./ruotes/Home";
import About from "./ruotes/About";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
