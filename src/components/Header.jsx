import { Link } from "react-router-dom";
import "../App.css"

function Header() {
  return (
    <header className="header">
      <h2>ShoppyGlobe</h2>

      <nav>
        <Link to="/" className="nav-list">Home</Link>
        <Link to="/cart" className="nav-list">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;