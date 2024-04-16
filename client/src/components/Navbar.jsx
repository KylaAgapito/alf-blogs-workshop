import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="alfblogs">Alf<span>Blogs</span></a>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">Articles</a>
        <a href="#">News</a>
      </div>
      <button variant="primary">Subscribe</button>
    </nav>
  );
};

export default Navbar;