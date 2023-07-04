import {Link} from "react-router-dom";

const FooterComponent = () => {
  return (
    <footer className="s-footer">
      <div className="row footer-top">
        <div className="column large-4 medium-5 tab-full">
          <div className="footer-logo">
            <a className="site-footer-logo" href="index.html">
              <img src="images/logo.svg" alt="Homepage" />
            </a>
          </div>  {/* footer-logo */}
          <p>
          </p>
        </div>
        <div className="column large-half tab-full">
          <div className="row">
            <div className="column large-7 medium-full">
              <h4 className="h6">Our Location</h4>
              <p>
               ZION
              </p>
              <p>
                <a href="https://goo.gl/maps/bc7C7eYtSmnNs6216" target="_blank" className="btn btn--footer">Get Direction</a>
              </p>
            </div>
            <div className="column large-5 medium-full">
              <h4 className="h6">Quick Links</h4>
              <ul className="footer-list">
                <li className="current"><Link to="/" title="Home">Home</Link></li>
                <li><Link to="/proverbs" title="Proverbs">Proverbs</Link></li>
                <li><Link to="/podcasts" title="Podcasts">Podcasts</Link></li>
                <li><Link to="/testimonies" title="Testimonies">Testimonies</Link></li>
                <li><Link to="/parables" title="Parables">Parables</Link></li>
                <li><Link to="/books" title="Books">Books</Link></li>
                <li><Link to="/blog" title="Blog">Blog</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div> {/* end footer-top */}
      <div className="row footer-bottom">
        <div className="column ss-copyright">
          <span>© Copyright Hesed 2019</span>
          <span>Design by <a href="https://www.styleshout.com/">StyleShout</a></span>
        </div>
      </div> {/* footer-bottom */}
      <div className="ss-go-top">
        <a className="smoothscroll" title="Back to Top" href="#top">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M12 0l8 9h-6v15h-4v-15h-6z" /></svg>
        </a>
      </div> {/* ss-go-top */}
    </footer>
  );
}

export  default FooterComponent;
