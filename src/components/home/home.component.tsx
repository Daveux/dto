import home from "./assets/dto.jpg"
const HomeComponent = () => {
  return (
    <div>
      {/* hero
    ================================================== */}
      <section className="s-hero" data-parallax="scroll" style={{backgroundImage: `url(${home})`,backgroundRepeat: "none", backgroundSize: "cover"}}>
        <div className="hero-left-bar" />
        <div className="row hero-content">
          <div className="column large-full hero-content__text">
            <h1>
              We Exist For <br />
              Mercy and Truth <br />
            </h1>
            {/*<div className="hero-content__buttons">*/}
            {/*  <a href="events.html" className="btn btn--stroke">Upcoming Events</a>*/}
            {/*  <a href="about.html" className="btn btn--stroke">About Us</a>*/}
            {/*</div>*/}
          </div> {/* end hero-content__text */}
        </div> {/* end hero-content */}
        <ul className="hero-social">
          <li className="hero-social__title">Follow Us</li>
          <li>
            <a href="#0">Facebook</a>
          </li>
          <li>
            <a href="#0">YouTube</a>
          </li>
          <li>
            <a href="#0">Instagram</a>
          </li>
        </ul> {/* end hero-social */}
        <div className="hero-scroll">
          <a href="#about" className="scroll-link smoothscroll">
            Scroll For More
          </a>
        </div> {/* end hero-scroll */}
      </section> {/* end s-hero */}
      {/* about
    ================================================== */}
      <section id="about" className="s-about">
        <div className="row row-y-center about-content">
            <h3 className="subhead">About Dr. Toluwanimi Osinowo</h3>
            <p className="lead">
              Dr. Toluwanimi Osinowo is a Coach, Teacher & Advisor: coaching high-potential leaders, advising organisations and originating breakthrough ideas.

              He works closely with leaders and organisations to solve their most pressing problems and to unlock their potential by developing and deploying cutting edge thinking. He is often called upon when there is evident need for a shift in mind-set. He has worked with not-for-profits, government agencies, commercial entities as well as individuals.

              Toluwanimi also works in education – working with schools to raise the level of thinking and breadth of mind of students. He has developed a ground-breaking curriculum which exactly this objective.

              He has a BA and MB BChir (Medicine) from Gonville and Caius College, University of Cambridge where he was a Cambridge Commonwealth Scholar.
            </p>
            {/*<a href="about.html" className="btn btn--primary btn--about">More About Hesed</a>*/}
          {/*<div className="column large-half medium-full">*/}
          {/*  <ul className="about-sched">*/}
          {/*    <li>*/}
          {/*      <h4>Main Church Service</h4>*/}
          {/*      <p>*/}
          {/*        Sunday - 9:00 AM | 1:00 PM | 4:30 PM <br />*/}
          {/*        1600 Amphitheatre Parkway, Mt. View, CA, 94043*/}
          {/*      </p>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <h4>Kids Church</h4>*/}
          {/*      <p>*/}
          {/*        Sunday - 9:00 AM | 1:00 PM | 4:30 PM <br />*/}
          {/*        1600 Amphitheatre Parkway, Mt. View, CA, 94043*/}
          {/*      </p>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <h4>Prayer Meeting</h4>*/}
          {/*      <p>*/}
          {/*        Saturday - 7:00 PM <br />*/}
          {/*        1600 Amphitheatre Parkway, Mt. View, CA, 94043*/}
          {/*      </p>*/}
          {/*    </li>*/}
          {/*  </ul> /!* end about-sched*!/*/}
          {/*</div>*/}
        </div> {/* end about-content */}
      </section> {/* end s-about */}
      {/* connect
    ================================================== */}
      <section className="s-connect">
        <div className="row connect-content">
          <div className="column large-half tab-full">
            <h3 className="display-1">Forgiveness.</h3>
            <p>
              Forgiveness is our preservation, if you don't forgive
              others you are not preserved, it is your forgiveness of
              others that preserves you.
              You can only give what you have. What you have is what you give.
              The saviour is the one who, being saved can give salvation.
              The forgiver is one who, being forgiven gives forgiveness.
            </p>
            <a href="https://www.instagram.com/p/CjTFuv9NBEK/" className="btn btn--primary h-full-width">Learn more</a>
          </div>
          <div className="column large-half tab-full">
            <h3 className="display-1">Hearing</h3>
            <p>
              God hears [and favourably answers] the person who has faith
              but faith comes because that person [listens to and] hears God
              and therefore knows God. The secret, therefore, is drawing near to God to UNDERSTAND HIM.
              How do you feel about a friend who seeks to understand you and actually gets you.
            </p>
            <a href="https://www.instagram.com/p/Ch4fpESNvph/" className="btn btn--primary h-full-width">Learn More</a>
          </div>
        </div> {/* end connect-content  */}
      </section> {/* end s-connect */}
      <section className="s-connect">
        <div className="row connect-content">
          <div className="column large-half tab-full">
            <h3 className="display-1">Your right?</h3>
            <p>
              You can be "right" and wrong at the same time.
              You can stand on YOUR right and by so doing choose death.
              The only way to choose life is to stand on GOD'S right and so choose forgiveness every time!
              “Do not judge, and you will not be judged. Do not condemn, and you will not be condemned.
              Forgive, and you will be forgiven. [Luke 6:37]
              Don’t grumble against one another, brothers and sisters, or you will be judged.
              The Judge is standing at the door! [James 5:9]
            </p>
            <a href="https://www.instagram.com/p/Cic0GXstdGJ/" className="btn btn--primary h-full-width">Learn more</a>
          </div>
          <div className="column large-half tab-full">
            <h3 className="display-1">Good news</h3>
            <p>
              Good news, not bad news, turns bas people good.
              he gospel is good news. Who is the gospel for? Bad people!
              Bad news for bad people does no good. Good news for bad people is true goodness!
              God's way of setting the world right (i.e. His righteousness) is goodness for the worst of us!
              For in the gospel the righteousness of God is revealed.. [Romans 1:17a]
            </p>
            <a href="https://www.instagram.com/p/Ch9twSBtwhG/" className="btn btn--primary h-full-width">Learn More</a>
          </div>
        </div> {/* end connect-content  */}
      </section> {/* end s-connect */}

      {/* events
    ================================================== */}
      {/*<section className="s-events">*/}
      {/*  <div className="row events-header">*/}
      {/*    <div className="column">*/}
      {/*      <h2 className="subhead">Upcoming Events.</h2>*/}
      {/*    </div>*/}
      {/*  </div> /!* end event-header *!/*/}
      {/*  <div className="row block-large-1-2 block-900-full events-list">*/}
      {/*    <div className="column events-list__item">*/}
      {/*      <h3 className="display-1 events-list__item-title">*/}
      {/*        <a href="#0">2019 Kids Church Camp.</a>*/}
      {/*      </h3>*/}
      {/*      <p>*/}
      {/*        Et consequatur nihil odio odit voluptatem qui. Dolores doloribus*/}
      {/*        cupiditate totam esse dolores quod. Magni aut incidunt fugiat*/}
      {/*        labore est ut non ipsam nihil. Voluptate rerum dolores unde*/}
      {/*        voluptas. Et similique praesentium dolor. Et quod*/}
      {/*        eius sint at quae est dolores. Beatae quo facere hic.*/}
      {/*      </p>*/}
      {/*      <ul className="events-list__meta">*/}
      {/*        <li className="events-list__meta-date">Saturday, September 28, 2019</li>*/}
      {/*        <li className="events-list__meta-time">8:00AM - 5:30PM</li>*/}
      {/*        <li className="events-list__meta-location">1600 Amphitheatre Parkway, Mt. View</li>*/}
      {/*      </ul>*/}
      {/*    </div> /!* end events-list__item *!/*/}
      {/*    <div className="column events-list__item">*/}
      {/*      <h3 className="display-1 events-list__item-title">*/}
      {/*        <a href="#0">Prayer Meeting.</a>*/}
      {/*      </h3>*/}
      {/*      <p>*/}
      {/*        Laborum distinctio minima doloribus reiciendis aut aliquid.*/}
      {/*        Deleniti est adipisci ut quo ducimus eum ratione voluptas.*/}
      {/*        Voluptatem tenetur rem ratione velit ut. Repudiandae atque*/}
      {/*        perspiciatis est similique rerum nam qui iusto minus. Sapiente*/}
      {/*        porro dolores consequatur optio animi aut facere.*/}
      {/*      </p>*/}
      {/*      <ul className="events-list__meta">*/}
      {/*        <li className="events-list__meta-date">Saturday, July 27, 2019</li>*/}
      {/*        <li className="events-list__meta-time">6:00PM - 8:30PM</li>*/}
      {/*        <li className="events-list__meta-location">1600 Amphitheatre Parkway, Mt. View</li>*/}
      {/*      </ul>*/}
      {/*    </div> /!* end events-list__item *!/*/}
      {/*    <div className="column events-list__item">*/}
      {/*      <h3 className="display-1 events-list__item-title">*/}
      {/*        <a href="#0">Youth Convergence.</a>*/}
      {/*      </h3>*/}
      {/*      <p>*/}
      {/*        Laborum distinctio minima doloribus reiciendis aut aliquid.*/}
      {/*        Deleniti est adipisci ut quo ducimus eum ratione voluptas.*/}
      {/*        Voluptatem tenetur rem ratione velit ut. Repudiandae atque*/}
      {/*        perspiciatis est similique rerum nam qui iusto minus. Sapiente*/}
      {/*        porro dolores consequatur optio animi aut facere.*/}
      {/*      </p>*/}
      {/*      <ul className="events-list__meta">*/}
      {/*        <li className="events-list__meta-date">Friday, July 26, 2019</li>*/}
      {/*        <li className="events-list__meta-time">5:00PM - 6:30PM</li>*/}
      {/*        <li className="events-list__meta-location">1600 Amphitheatre Parkway, Mt. View</li>*/}
      {/*      </ul>*/}
      {/*    </div> /!* end events-list__item *!/*/}
      {/*    <div className="column events-list__item">*/}
      {/*      <h3 className="display-1 events-list__item-title">*/}
      {/*        <a href="#0">Leadership Conference.</a>*/}
      {/*      </h3>*/}
      {/*      <p>*/}
      {/*        Optio temporibus suscipit magnam. Consequatur doloribus sed.*/}
      {/*        Explicabo molestiae est minima. Distinctio quis optio architecto*/}
      {/*        molestiae officia molestiae qui veniam minima. Nemo placeat ex*/}
      {/*        dolor ratione qui autem eius vel. In dolorem aut enim aspernatur*/}
      {/*        molestias nostrum.*/}
      {/*      </p>*/}
      {/*      <ul className="events-list__meta">*/}
      {/*        <li className="events-list__meta-date">Sunday, July 28, 2019</li>*/}
      {/*        <li className="events-list__meta-time">2:00PM - 5:30PM</li>*/}
      {/*        <li className="events-list__meta-location">1600 Amphitheatre Parkway, Mt. View</li>*/}
      {/*      </ul>*/}
      {/*    </div> /!* end events-list__item *!/*/}
      {/*  </div> /!* end events-list *!/*/}
      {/*</section> /!* end s-events *!/*/}
      {/* series
    ================================================== */}
      <section className="s-series">
        <div className="series-img" style={{backgroundImage: 'url("images/doves.webp")'}} />
        <div className="row row-y-center series-content">
          <div className="column large-half medium-full">
            <h3 className="subhead">Podcasts</h3>
            <h2>Shape Your Life with the Words of Life.</h2>
            <p>
              The Life Podcast - giving life to all!
              The Life Podcast is a means of proclaiming the eternal truth of God's word
              to a modern audience. The message is simple: God, who is perfectly seen in Jesus Christ,
              is perfectly good, and is giving life to all today.
              He wants us all to receive and live this life to the full!
            </p>
          </div> {/* end column */}
          <div className="column large-half medium-full">
            <div className="series-content__buttons">
              <a className="btn btn--large h-full-width" href={"https://www.youtube.com/@thelifepodcast007"}>Watch the Videos</a>
              <a className="btn btn--large h-full-width" href={"https://open.spotify.com/show/15lPTcbiYsKT9BhgavAx2s?si=aC0ToMBjQEy8mwyHjJiyKg"}>Listen To the Messages</a>
            </div>
            <div className="series-content__subscribe">
              <p>
                Never miss a message. Subscribe to our YouTube and Spotify channels.
              </p>
              <ul className="series-content__subscribe-links">
                {/*<li className="ss-apple-podcast"><a href="#0">Apple Podcast</a></li>*/}
                <li className="ss-spotify"><a href="https://open.spotify.com/show/15lPTcbiYsKT9BhgavAx2s?si=aC0ToMBjQEy8mwyHjJiyKg">Spotify</a></li>
                {/*<li className="ss-soundcloud"><a href="#0">SoundCloud</a></li>*/}
                <li className="ss-youtube"><a href="https://www.youtube.com/@thelifepodcast007">Youtube</a></li>
              </ul>
            </div>
          </div> {/* end column */}
        </div> {/* series-content */}
      </section> {/* end s-series */}
      {/* Social
    ================================================== */}
      <section className="s-social">
        <div className="row social-content">
          <div className="column">
            <ul className="social-list">
              {/*<li className="social-list__item">*/}
              {/*  <a href="#0">*/}
              {/*    <span className="social-list__icon social-list__icon--facebook" />*/}
              {/*    <span className="social-list__text">Facebook</span>*/}
              {/*  </a>*/}
              {/*</li>*/}
              {/*<li className="social-list__item">*/}
              {/*  <a href="#0">*/}
              {/*    <span className="social-list__icon social-list__icon--twitter" />*/}
              {/*    <span className="social-list__text">Twitter</span>*/}
              {/*  </a>*/}
              {/*</li>*/}
              <li className="social-list__item">
                <a href="https://instagram.com/tolu.osinowo?igshid=MzRlODBiNWFlZA==">
                  <span className="social-list__icon social-list__icon--instagram" />
                  <span className="social-list__text">Instagram</span>
                </a>
              </li>
              <li className="social-list__item">
                <a href="mailto:t.osinowo@cantab-associates.com">
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

export  default HomeComponent;
