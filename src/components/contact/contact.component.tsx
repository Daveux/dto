const ContactComponent = () => {
  return (
    <div>
      {/* page header
    ================================================== */}
      <section className="page-header page-header--contact">
        <div className="gradient-overlay" />
        <div className="row page-header__content">
          <div className="column">
            <h1>Contact Us</h1>
          </div>
        </div>
      </section>{" "}
      {/* end page-header */}
      {/* page content
    ================================================== */}
      <section className="page-content">
        <div className="row">
          <div className="column">
            <p className="lead drop-cap">
              Corrupti voluptas sed possimus odio cupiditate. Ut id nemo doloremque
              iusto voluptates placeat esse ut. Voluptatem saepe aut vel ut.
              Perferendis hic voluptates quibusdam animi quis est itaque. Atque
              delectus praesentium voluptas voluptas. Odio voluptatem facilis magni
              magnam quas aut quasi.
            </p>
            <p>
              Nam est quae harum doloribus illum consequatur cupiditate quod rem.
              Error qui culpa. Porro cupiditate veniam assumenda nostrum eius.
              Tempore rerum eos. Est perferendis nesciunt corrupti quia sunt
              reprehenderit id autem. Quis in voluptates perspiciatis. Voluptatem
              saepe aut vel ut reprehenderit id perferendis.
            </p>
            <div className="row">
              <div className="column large-6 tab-full">
                <h3>Main Office.</h3>
                <p>
                  1600 Amphitheatre Parkway
                  <br />
                  Mountain View, CA 94043 US
                  <br />
                  Mon-Thur 8:30am – 4:30pm
                </p>
              </div>
              <div className="column large-6 tab-full">
                <h3>Contact Info.</h3>
                <p>
                  sayhello@hesed.com
                  <br />
                  info@hesed.com <br />
                  Phone: +197 543 2345
                </p>
              </div>
            </div>
            <h2>Get In Touched.</h2>
            <form
              name="contactForm"
              id="contactForm"
              method="post"
              action=""
              autoComplete="off"
            >
              <fieldset>
                <div className="form-field">
                  <input
                    name="cName"
                    id="cName"
                    className="h-full-width h-remove-bottom"
                    placeholder="Your Name"
                    defaultValue=""
                    type="text"
                  />
                </div>
                <div className="form-field">
                  <input
                    name="cEmail"
                    id="cEmail"
                    className="h-full-width h-remove-bottom"
                    placeholder="Your Email"
                    defaultValue=""
                    type="text"
                  />
                </div>
                <div className="form-field">
                  <input
                    name="cWebsite"
                    id="cWebsite"
                    className="h-full-width h-remove-bottom"
                    placeholder="Website"
                    defaultValue=""
                    type="text"
                  />
                </div>
                <div className="message form-field">
              <textarea
                name="cMessage"
                id="cMessage"
                className="h-full-width h-remove-bottom"
                placeholder="Your Message"
                defaultValue={""}
              />
                </div>
                <br />
                <input
                  name="submit"
                  id="submit"
                  className="btn btn--primary btn-wide btn--large h-full-width"
                  defaultValue="Send Message"
                  type="submit"
                />
              </fieldset>
            </form>
          </div>
        </div>
      </section>{" "}
      {/* end page-content */}
      {/* Social
    ================================================== */}
      <section className="s-social">
        <div className="row social-content">
          <div className="column">
            <ul className="social-list">
              <li className="social-list__item">
                <a href="#0" title="">
                  <span className="social-list__icon social-list__icon--facebook" />
                  <span className="social-list__text">Facebook</span>
                </a>
              </li>
              <li className="social-list__item">
                <a href="#0" title="">
                  <span className="social-list__icon social-list__icon--twitter" />
                  <span className="social-list__text">Twitter</span>
                </a>
              </li>
              <li className="social-list__item">
                <a href="#0" title="">
                  <span className="social-list__icon social-list__icon--instagram" />
                  <span className="social-list__text">Instagram</span>
                </a>
              </li>
              <li className="social-list__item">
                <a href="#0" title="">
                  <span className="social-list__icon social-list__icon--email" />
                  <span className="social-list__text">Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* end social-content */}
      </section>{" "}
      {/* end s-social */}
    </div>
  );
}

export  default ContactComponent;
