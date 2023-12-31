import {Link} from "react-router-dom";
const TopPanelComponent = () => {
  return (
    <header className="s-header">
      <div className="header-logo">
        <a className="site-logo" href="index.html">
          <img src="images/logo.svg" alt="Homepage" />
        </a>
      </div>
      <nav className="header-nav-wrap">
        <ul className="header-nav">
          <li className="current"><Link to="/" title="Home">Home</Link></li>
          <li><Link to="/proverbs" title="Proverbs">Proverbs</Link></li>
          <li><Link to="/podcasts" title="Podcasts">Podcasts</Link></li>
          <li><Link to="/testimonies" title="Testimonies">Testimonies</Link></li>
          <li><Link to="/parables" title="Parables">Parables</Link></li>
          <li><Link to="/books" title="Books">Books</Link></li>
          <li><Link to="/blog" title="Blog">Blog</Link></li>
          <li><Link to="/teaching" title="Teaching">Teaching</Link></li>
          <li><Link to="/contact" title="Contact us">Contact</Link></li>
        </ul>
      </nav>
      <a className="header-menu-toggle" href="#0"><span>Menu</span></a>
    </header>
  );
}

export  default TopPanelComponent;
