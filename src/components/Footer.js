import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* <!--Footer--> */}
        <footer className="col-lg-10 col-md-11 col-sm-11 center-div contact-wrap  sec-pad">
          <div className="row">
            <div className="col-sm-6 available-wrap">
              <span className="available-pointer"></span>
              <span className="available-tag">
                Available for Freelance Projects.
              </span>
            </div>
            <div className="col-sm-6">
              <div className="social-icons-wrap float-right">
                {/* <!--Social Icons--> */}
                <ul className="social-icons float-right">
                  <li>
                    <a href="/#" className="social-icon">
                      <span className="fa" data-hover="&#xf09a;">
                        &#xf09a;
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="social-icon">
                      <span className="fa" data-hover="&#xf099;">
                        &#xf099;
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="social-icon">
                      <span className="fa" data-hover="&#xf16e;">
                        &#xf16e;
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="social-icon">
                      <span className="fa" data-hover="&#xf16d;">
                        &#xf16d;
                      </span>
                    </a>
                  </li>
                </ul>
                {/* <!--/Social Icons--> */}
              </div>
              <div className="goto-top text-right float-right">
                <a data-scroll href="#body">
                  <span data-hover="top">top</span>
                </a>
              </div>
              <div className="copywrite-wrap text-right float-right">
                <p className="copywrite">
                  Fabricated by <b>Khoadq &copy; 2021.</b> Updated &nbsp;
                  <b>June, 2017.</b>
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/* <!--/Footer--> */}
      </div>
    );
  }
}
