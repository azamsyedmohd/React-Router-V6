import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/Navbar";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
