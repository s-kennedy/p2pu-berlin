import React from "react";
// import { Link } from "gatsby";


const Footer = (props) => {
  return(
    <footer className="home-footer">
      <div className="contact-info">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-5 col-sm-6 col-12 newsletter">
              <div className="title">
                <h3>Newsletter</h3>
              </div>
              <div className="content" id="mc_embed_signup">
                <form action="//p2pu.us2.list-manage.com/subscribe/post?u=f080ec78070523d59ef613eda&amp;id=06e9c4ece8" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                  <div id="mc_embed_signup_scroll">
                    <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true"><input type="text" name="b_f080ec78070523d59ef613eda_06e9c4ece8" tabIndex="-1" defaultValue="" /></div>
                    <input type="email" defaultValue="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Your email address" required />
                    <input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn light rounded-0" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="toc">
        <div className="container">
          <div className="col-12">
            <div className="notes">
              <span>
                Unless otherwise noted, all the materials on this site are licensed under CC BY-SA 4.0.
              </span>
              <span>
                P2PU is a U.S. 501(c)3 registered in California.
              </span>
            </div>

            <div className="links">
              <span>
                <a href="https://www.p2pu.org/en/terms/" className="underline">Terms of Service</a>
              </span>
              <span>
                <a href="https://www.p2pu.org/en/privacy/" className="underline">Privacy Policy</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
