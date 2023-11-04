import { Link, Outlet } from "react-router-dom";
const Products = () => {
  return (
    <>
      <section
        style={{ paddingLeft: "1rem", marginTop: "2rem", marginLeft: "1.5rem" }}
      >
        <input
          type="search"
          placeholder="Search Products"
          style={{ padding: "0.5rem", borderRadius: "8px", fontSize: 18 }}
        />
      </section>
      <nav style={{ display: "flex", gap: "1rem", padding: "2rem" }}>
        <Link
          to="featuredProducts"
          style={{ textDecoration: "none", color: "darkblue", fontSize: 23 }}
        >
          Featured Products
        </Link>
        <Link
          to="newProducts"
          style={{ textDecoration: "none", color: "darkblue", fontSize: 23 }}
        >
          New Products
        </Link>
      </nav>
      <Outlet />
    </>
  );
};
export default Products;
