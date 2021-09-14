import React, { Component } from 'react';

export default class Introduction extends Component {
  render() {
    return (
      <div>
        {/* <!--Introduction Sec--> */}
        <section
          id="intro_content_sec"
          className="col-lg-10 col-md-11 col-sm-11 center-div intro-content-wrap sec-pad"
        >
          <div className="person-img margin-bottom-xs"></div>
          <h1 className="text-white">
            Hey!<span id="typed"></span>
          </h1>
          <h6>about</h6>
          <p className="pad-bottom-35 wow fadeInUp" data-wow-duration=".6s">
            Award winning interdisciplinary Designer and Photographer. Currently
            pursuing a perfect blend of style and function for a wide range of
            interactive graphic design. For the past 6 years I've helped global
            companies, organizations and start-ups reach business goals with
            user focused, interactive design. I enjoy bringing clarity to
            complex problems with a people first approach.
          </p>
          <p className="wow fadeInUp" data-wow-duration=".4s">
            I am a complete social animal. Find my work on
            <a className="goto-social" href="/#" target="_blank">
              Behance
            </a>
            <a href="/#" className="goto-social" target="_blank">
              Dribbble
            </a>
            . Experience my photography skills on
            <a href="/#" className="goto-social" target="_blank">
              Instagram
            </a>
            <a className="goto-social" href="/#" target="_blank">
              Flickr
            </a>
            .
          </p>
          <div
            className="per-signature margin-top-sm wow fadeInUp"
            data-wow-duration=".4s"
          >
            <img
              className="img-responsive"
              src="assets/img/signature.png"
              alt="signature"
            />
          </div>
        </section>
        {/* <!--/Introduction Sec--> */}
      </div>
    );
  }
}
