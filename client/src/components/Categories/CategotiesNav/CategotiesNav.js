import { Link } from 'react-router-dom';


function CategotiesNav() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/catrgories/all" className="linkUrl">All</Link></li>
        <li><Link to="/categories/cats" className="linkUrl">Cats</Link></li>
        <li><Link to="/categories/dogs" className="linkUrl">Dogs</Link></li>
        <li><Link to="/categories/parrots" className="linkUrl">Parrots</Link></li>
        <li><Link to="/categories/reptiles" className="linkUrl">Reptiles</Link></li>
        <li><Link to="/categories/other" className="linkUrl">Other</Link></li>
      </ul>
    </nav>
  );
};

export default CategotiesNav;