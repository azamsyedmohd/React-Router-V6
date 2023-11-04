import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/Navbar";
import OrderSummary from "./Components/OrderSummary";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-summary" element={<OrderSummary />}></Route>
      </Routes>
    </>
  );
}

export default App;
