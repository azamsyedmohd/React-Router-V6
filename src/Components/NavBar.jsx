import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav
        style={{
          backgroundColor: "gainsboro",
          padding: "1rem",
          margin: 0,
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <Link
          style={{ color: "brown", textDecoration: "none", fontSize: "2rem" }}
          to="/"
        >
          Home
        </Link>
        <Link
          style={{ color: "brown", textDecoration: "none", fontSize: "2rem" }}
          to="/about"
        >
          About
        </Link>
      </nav>
    </>
  );
};
export default NavBar;
