import React, { Component } from 'react';

export default class SkillsSection extends Component {
  render() {
    return (
      <div>
        {/* <!--Skills Sec--> */}
        <section
          id="skill_sec"
          className="col-lg-10 col-md-11 col-sm-11 center-div skills-wrap  sec-pad-top sec-pad-bottom-xs"
        >
          <h6>technical skills</h6>
          <p className="wow fadeInUp" data-wow-duration=".4s">
            As a reluctant developer, I fled from a traditional path and
            explored my creativity, trough trying my hands on various techniques
            and software. Software is more than just a tool, and I try to dig
            deep into it. Today, I knack for critical thinking, empathy and
            creativity to create viable and impactful solutions using these
            technologies.
          </p>
          <div className="row margin-top-40">
            <div className="col-sm-5 margin-bottom-sm">
              <span className="progress-cat">HTML 5</span>
              <div className="progress-bar-graph">
                <div className="progress-bar-wrap">
                  <div className="bar-wrap">
                    <span data-width="97">
                      <strong>
                        <i>97</i>%
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-5 margin-bottom-sm">
              <span className="progress-cat">ANGULAR JS</span>
              <div className="progress-bar-graph">
                <div className="progress-bar-wrap">
                  <div className="bar-wrap">
                    <span data-width="98">
                      <strong>
                        <i>98</i>%
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="col-sm-5 margin-bottom-sm">
              <span className="progress-cat">BOOTSTRAP</span>
              <div className="progress-bar-graph">
                <div className="progress-bar-wrap">
                  <div className="bar-wrap">
                    <span data-width="100">
                      <strong>
                        <i>100</i>%
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-5 margin-bottom-sm">
              <span className="progress-cat">AJAX</span>
              <div className="progress-bar-graph">
                <div className="progress-bar-wrap">
                  <div className="bar-wrap">
                    <span data-width="90">
                      <strong>
                        <i>90</i>%
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="col-sm-5 margin-bottom-sm">
              <span className="progress-cat">JQUERY</span>
              <div className="progress-bar-graph">
                <div className="progress-bar-wrap">
                  <div className="bar-wrap">
                    <span data-width="86">
                      <strong>
                        <i>86</i>%
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-5 margin-bottom-sm">
              <span className="progress-cat">PHP</span>
              <div className="progress-bar-graph">
                <div className="progress-bar-wrap">
                  <div className="bar-wrap">
                    <div className="bar-wrap">
                      <span data-width="70">
                        <strong>
                          <i>70</i>%
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </section>
        {/* <!--/Skills Sec--> */}
      </div>
    );
  }
}
