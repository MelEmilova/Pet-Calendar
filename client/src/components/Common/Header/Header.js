import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header id="site-header">
      <nav className="navbar">
        <section className="navbar-dashboard">
          <div className="first-bar">
            <Link to="/" className="linkUrl">Dashboard</Link>
            <Link className="button linkUrl" to="/my-pets">My Pets</Link>
            <Link className="button linkUrl" to="/create">Add Pet</Link>
          </div>
          <div className="second-bar">
            <ul>
              <li>Welcome, { }!</li>
              <li><Link to="/logout" className="linkUrl"><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
            </ul>
          </div>
        </section>
        <section className="navbar-anonymous">
          <ul>
            <li><Link to="/register" className="linkUrl"><i className="fas fa-user-plus"></i> Register</Link></li>
            <li><Link to="/login" className="linkUrl"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
          </ul>
        </section>
      </nav>
    </header>
  );
}

export default Header;