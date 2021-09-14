import React, { Component } from 'react';

export default class WorkSection extends Component {
  render() {
    return (
      <div>
        {/* <!--Work Sec--> */}
        <section
          id="work_sec"
          className="col-lg-10 col-md-11 col-sm-11 center-div skills-wrap  sec-pad"
        >
          <h6>work</h6>

          <div id="portfolio-wrap" className="padding-sec-lg">
            <ul
              id="portfolio"
              className="auto-construct  project-gallery"
              data-col="2"
            >
              <li
                className="item"
                data-src="assets/img/mock1.jpg"
                data-sub-html="<h6>DESIGN LAB</h6><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
              >
                <a href="/#">
                  <img
                    className="img-responsive"
                    src="assets/img/mock1.jpg"
                    alt=" descriptio"
                  />
                  <span className="hover-cap">DESIGN LAB</span>
                </a>
              </li>
              <li
                className="item"
                data-src="http://www.youtube.com/watch?v=Pq9yPrLWMyU"
                data-poster="assets/img/mock2.jpg"
                data-sub-html="<h6>MODERN WORK</h6><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
              >
                <a href="/#">
                  <img
                    className="img-responsive"
                    src="assets/img/mock2.jpg"
                    alt="descripti"
                  />
                  <span className="hover-cap">MODERN WORK</span>
                </a>
              </li>
              <li
                className="item"
                data-src="assets/img/mock4.jpg"
                data-sub-html="<h6>UX PLATFORM</h6><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
              >
                <a href="/#">
                  <img
                    className="img-responsive"
                    src="assets/img/mock4.jpg"
                    alt=" descript"
                  />
                  <span className="hover-cap">UX PLATFORM</span>
                </a>
              </li>
              <li
                className="item"
                data-src="http://vimeo.com/1084537"
                data-poster="assets/img/mock3.jpg"
                data-sub-html="<h6>MONOBRANDING</h6><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
              >
                <a href="/#">
                  <img
                    className="img-responsive"
                    src="assets/img/mock3.jpg"
                    alt=" descri"
                  />
                  <span className="hover-cap">MONOBRANDING</span>
                </a>
              </li>

              <li
                className="item"
                data-src="assets/img/mock5.jpg"
                data-sub-html="<h6>FALL/WINTER</h6><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
              >
                <a href="/#">
                  <img
                    className="img-responsive"
                    src="assets/img/mock5.jpg"
                    alt=" desc"
                  />
                  <span className="hover-cap">FALL/WINTER</span>
                </a>
              </li>
              <li
                className="item"
                data-html="#video1"
                data-poster="assets/img/mock6.jpg"
                data-sub-html="<h6>FANTASTIC MAN</h6><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
              >
                <a href="/#">
                  <img
                    className="img-responsive"
                    src="assets/img/mock6.jpg"
                    alt=" descr"
                  />
                  <span className="hover-cap">FANTASTIC MAN</span>
                </a>
              </li>
            </ul>
            {/* <!-- Hidden video div --> */}
            {/* <div style="display:none;" id="video1">
									<video className="lg-video-object lg-html5 video-js vjs-default-skin" controls preload="none">
										<source src="videos/video1.mp4" type="video/webm">
										<source src="videos/video1.webm" type="video/webm">
										 Your browser does not support HTML5 video.
									</video>
								</div> */}
          </div>
        </section>
        {/* <!--/Work Sec--> */}
      </div>
    );
  }
}
