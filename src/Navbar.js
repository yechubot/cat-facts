import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/cat-facts" style={{ textDecoration: 'none' }}>
        <h2 className="title">Fun Cat Facts</h2>
        </Link>
      <div className="nav-lists">
        <Link to="/cat-facts">Home</Link>
        <a href="https://alexwohlbruck.github.io/cat-facts/docs/">API</a>
        <Link to="/add">Add</Link>
      </div>

    </div>
  );
}

export default Navbar;