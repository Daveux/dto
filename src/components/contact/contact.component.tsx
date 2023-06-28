const ContactComponent = () => {
  return (
    <div>
      {/* page header
    ================================================== */}
      <section className="page-header page-header--events">
        <div className="gradient-overlay" />
        <div className="row page-header__content">
          <div className="column">
            <h1>Upcoming Events</h1>
          </div>
        </div>
      </section> {/* end page-header */}
      {/* page content
    ================================================== */}
      <section className="page-content">
        <div className="row wide block-large-1-2 block-900-full events-list">
          <div className="column events-list__item">
            <h3 className="display-1 events-list__item-title">
              <a href="events-single.html">2019 Kids Church Camp.</a>
            </h3>
            <p>
              Et consequatur nihil odio odit voluptatem qui. Dolores doloribus
              cupiditate totam esse dolores quod. Magni aut incidunt fugiat
              labore est ut non ipsam nihil. Voluptate rerum dolores unde
              voluptas. Et similique praesentium dolor. Et quod
              eius sint at quae est dolores. Beatae quo facere hic.
            </p>
            <ul className="events-list__meta">
              <li className="events-list__meta-date">Saturday, September 28, 2019</li>
              <li className="events-list__meta-time">8:00AM - 5:30PM</li>
              <li className="events-list__meta-location">1600 Amphitheatre Parkway, Mt. View</li>
            </ul>
          </div>
          <div className="column events-list__item">
            <h3 className="display-1 events-list__item-title">
              <a href="events-single.html">Prayer Meeting.</a>
            </h3>
            <p>
              Laborum distinctio minima doloribus reiciendis aut aliquid.
              Deleniti est adipisci ut quo ducimus eum ratione voluptas.
              Voluptatem tenetur rem ratione velit ut. Repudiandae atque
              perspiciatis est similique rerum nam qui iusto minus. Sapiente
              porro dolores consequatur optio animi aut facere.
            </p>
            <ul className="events-list__meta">
              <li className="events-list__meta-date">Saturday, July 27, 2019</li>
              <li className="events-list__meta-time">6:00PM - 8:30PM</li>
              <li className="events-list__meta-location">1600 Amphitheatre Parkway, Mt. View</li>
            </ul>
          </div>
          <div className="column events-list__item">
            <h3 className="display-1 events-list__item-title">
              <a href="events-single.html">Youth Convergence.</a>
            </h3>
            <p>
              Laborum distinctio minima doloribus reiciendis aut aliquid.
              Deleniti est adipisci ut quo ducimus eum ratione voluptas.
              Voluptatem tenetur rem ratione velit ut. Repudiandae atque
              perspiciatis est similique rerum nam qui iusto minus. Sapiente
              porro dolores consequatur optio animi aut facere.
            </p>
            <ul className="events-list__meta">
              <li className="events-list__meta-date">Friday, July 26, 2019</li>
              <li className="events-list__meta-time">5:00PM - 6:30PM</li>
              <li className="events-list__meta-location">1600 Amphitheatre Parkway, Mt. View</li>
            </ul>
          </div>
          <div className="column events-list__item">
            <h3 className="display-1 events-list__item-title">
              <a href="events-single.html">Leadership Conference.</a>
            </h3>
            <p>
              Optio temporibus suscipit magnam. Consequatur doloribus sed.
              Explicabo molestiae est minima. Distinctio quis optio architecto
              molestiae officia molestiae qui veniam minima. Nemo placeat ex
              dolor ratione qui autem eius vel. In dolorem aut enim aspernatur
              molestias nostrum.
            </p>
            <ul className="events-list__meta">
              <li className="events-list__meta-date">Sunday, July 28, 2019</li>
              <li className="events-list__meta-time">2:00PM - 5:30PM</li>
              <li className="events-list__meta-location">1600 Amphitheatre Parkway, Mt. View</li>
            </ul>
          </div>
          <div className="column events-list__item">
            <h3 className="display-1 events-list__item-title">
              <a href="events-single.html">Baptism Sunday.</a>
            </h3>
            <p>
              Et consequatur nihil odio odit voluptatem qui. Dolores doloribus
              cupiditate totam esse dolores quod. Magni aut incidunt fugiat
              labore est ut non ipsam nihil. Voluptate rerum dolores unde
              voluptas. Et similique praesentium dolor. Et quod
              eius sint at quae est dolores. Beatae quo facere hic.
            </p>
            <ul className="events-list__meta">
              <li className="events-list__meta-date">Sunday, July 21, 2019</li>
              <li className="events-list__meta-time">2:00PM - 4:00PM</li>
              <li className="events-list__meta-location">1600 Amphitheatre Parkway, Mt. View</li>
            </ul>
          </div>
          <div className="column events-list__item">
            <h3 className="display-1 events-list__item-title">
              <a href="events-single.html">Men's Conference.</a>
            </h3>
            <p>
              Laborum distinctio minima doloribus reiciendis aut aliquid.
              Deleniti est adipisci ut quo ducimus eum ratione voluptas.
              Voluptatem tenetur rem ratione velit ut. Repudiandae atque
              perspiciatis est similique rerum nam qui iusto minus. Sapiente
              porro dolores consequatur optio animi aut facere.
            </p>
            <ul className="events-list__meta">
              <li className="events-list__meta-date">Saturday, August 03, 2019</li>
              <li className="events-list__meta-time">8:00AM - 5:30PM</li>
              <li className="events-list__meta-location">1600 Amphitheatre Parkway, Mt. View</li>
            </ul>
          </div>
        </div> {/* end events-list */}
        <div className="row">
          <div className="column large-full">
            <nav className="pgn">
              <ul>
                <li><a className="pgn__prev" href="#0">Prev</a></li>
                <li><a className="pgn__num" href="#0">1</a></li>
                <li><span className="pgn__num current">2</span></li>
                <li><a className="pgn__num" href="#0">3</a></li>
                <li><a className="pgn__num" href="#0">4</a></li>
                <li><a className="pgn__num" href="#0">5</a></li>
                <li><span className="pgn__num dots">…</span></li>
                <li><a className="pgn__num" href="#0">8</a></li>
                <li><a className="pgn__next" href="#0">Next</a></li>
              </ul>
            </nav> {/* end pgn */}
          </div>
        </div>
      </section> {/* end page content */}
      {/* Social
    ================================================== */}
      <section className="s-social">
        <div className="row social-content">
          <div className="column">
            <ul className="social-list">
              <li className="social-list__item">
                <a href="#0">
                  <span className="social-list__icon social-list__icon--facebook" />
                  <span className="social-list__text">Facebook</span>
                </a>
              </li>
              <li className="social-list__item">
                <a href="#0">
                  <span className="social-list__icon social-list__icon--twitter" />
                  <span className="social-list__text">Twitter</span>
                </a>
              </li>
              <li className="social-list__item">
                <a href="#0">
                  <span className="social-list__icon social-list__icon--instagram" />
                  <span className="social-list__text">Instagram</span>
                </a>
              </li>
              <li className="social-list__item">
                <a href="#0">
                  <span className="social-list__icon social-list__icon--email" />
                  <span className="social-list__text">Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div> {/* end social-content */}
      </section> {/* end s-social */}
    </div>
  );
}

export  default ContactComponent;
