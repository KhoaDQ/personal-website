import React, { Component } from 'react';

export default class QualificationSection extends Component {
  render() {
    return (
      <div>
        {/* <!--Qualfication Sec--> */}
        <section
          id="edu_sec"
          className="col-lg-10 col-md-11 col-sm-11 center-div education-wrap  sec-pad"
        >
          <h6>education</h6>
          <p className="wow fadeInUp" data-wow-duration=".4s">
            I spent 3 years learning Web Design & Development, got my Bachelor
            degree in Communication and Applied Art and started working
            independently. I think one should never stop learning and go through
            a process of acquiring knowledge.
          </p>
          <div className="qualfication-wrap">
            <div
              className="qualfication first-row wow fadeInUp"
              data-wow-duration=".4s"
            >
              <div className="col-sm-2">
                <span className="row-count">
                  <span>1</span>
                </span>
              </div>
              <div className="col-sm-2">
                <span className="yr-pers vertical-align-pad">2014-2017</span>
              </div>
              <div className="col-sm-5">
                <span className="insti vertical-align-pad">
                  Fox Young University, New York
                </span>
              </div>
              <div className="col-sm-3">
                <span className="design vertical-align-pad">
                  Master of Computer Science
                </span>
              </div>
            </div>
            <div className="qualfication wow fadeInUp" data-wow-duration=".4s">
              <div className="col-sm-2">
                <span className="row-count">
                  <span>2</span>
                </span>
              </div>
              <div className="col-sm-2">
                <span className="yr-pers vertical-align-pad">2012-2014</span>
              </div>
              <div className="col-sm-5">
                <span className="insti vertical-align-pad">
                  University of Engineering, New York
                </span>
              </div>
              <div className="col-sm-3">
                <span className="design vertical-align-pad">
                  Bachelor of Computer Science
                </span>
              </div>
            </div>
            <div className="qualfication wow fadeInUp" data-wow-duration=".4s">
              <div className="col-sm-2">
                <span className="row-count">
                  <span>3</span>
                </span>
              </div>
              <div className="col-sm-2">
                <span className="yr-pers vertical-align-pad">2009-2012</span>
              </div>
              <div className="col-sm-5">
                <span className="insti vertical-align-pad">
                  Queensglen Public University, California
                </span>
              </div>
              <div className="col-sm-3">
                <span className="design vertical-align-pad">
                  Web Design Diploma
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* <!--/Qualfication Sec--> */}
      </div>
    );
  }
}
