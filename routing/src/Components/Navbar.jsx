import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="nav" data-spy="affix" data-offset-top="197">
      <Link to="/">Home</Link>
      <Link to="/products">All Products</Link>
    </div>
  );
};
