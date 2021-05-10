import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Best Bakeries</Link>
      <Link to="/new">Submit Your Favorite Bakery</Link>
    </nav>
  );
}

export default Nav;
