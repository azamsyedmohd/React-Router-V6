import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/Navbar";
import OrderSummary from "./Components/OrderSummary";
import Products from "./Components/Products";
import NotMatch from "./Components/NotMatch";
import FeaturedProducts from "./Components/FeaturedProducts";
import NewProducts from "./Components/NewProducts";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-summary" element={<OrderSummary />}></Route>
        <Route path="/products" element={<Products />}>
          <Route path="featuredProducts" element={<FeaturedProducts />} />
          <Route path="newProducts" element={<NewProducts />} />
        </Route>
        <Route path="*" element={<NotMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
