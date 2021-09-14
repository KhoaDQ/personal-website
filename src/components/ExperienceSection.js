import React, { Component } from 'react';

export default class ExperienceSection extends Component {
  render() {
    return (
      <div>
        {/* <!--Experience Sec--> */}
        <section
          id="exp_sec"
          className="col-lg-10 col-md-11 col-sm-11 center-div experience-wrap  sec-pad"
        >
          <h6>experience</h6>
          <div className="exp-timeline-wrap">
            <div className="row exp-timeline timeline-active">
              <div className="col-xs-2">
                <div className="timeline-st"></div>
              </div>
              <div className="col-xs-10 exp-content-wrap">
                <div className="row">
                  <div
                    className="wow fadeInRight"
                    data-wow-duration=".4s"
                    data-wow-delay="0s"
                  >
                    <div className="col-sm-3 duration">
                      <span>mar 2014 - present</span>
                    </div>
                    <div className="col-sm-9">
                      <span className="job-desn">UI Developer</span>
                      <span className="job-loc">Fakebook Studio, New York</span>
                      <p className="job-summary p-small">
                        In this small yet expanding company, I had the
                        opportunity to turn my passion for the web in a job
                        right after graduation. Being the only designer in the
                        company I have often dealt with the whole process of
                        designing for our customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row exp-timeline">
              <div className="col-xs-2">
                <div className="timeline-st"></div>
              </div>
              <div className="col-xs-10 exp-content-wrap">
                <div className="row">
                  <div
                    className="wow fadeInRight"
                    data-wow-duration=".4s"
                    data-wow-delay="0.2s"
                  >
                    <div className="col-sm-3 duration">
                      <span>Jul 2013 — Mar 2014</span>
                    </div>
                    <div className="col-sm-9">
                      <span className="job-desn">
                        Visual Communication Designer
                      </span>
                      <span className="job-loc">Dropzone, NYC</span>
                      <p className="job-summary p-small">
                        Being in a very well structured company, with clear and
                        defined work procedures, helped me grow both personally
                        and professionally, as well as enjoying a young and
                        international working environment. I had the opportunity
                        to redefine the way I work in a more intelligent way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row exp-timeline">
              <div className="col-xs-2">
                <div className="timeline-st"></div>
              </div>
              <div className="col-xs-10 exp-content-wrap">
                <div className="row">
                  <div
                    className="wow fadeInRight"
                    data-wow-duration=".4s"
                    data-wow-delay="0.4s"
                  >
                    <div className="col-sm-3 duration">
                      <span>Jan 2013 – Jul 2013</span>
                    </div>
                    <div className="col-sm-9">
                      <span className="job-desn">Web Publishing</span>
                      <span className="job-loc">Daisystreet, NYC</span>
                      <p className="job-summary p-small">
                        Being the first design agency in my career and being one
                        among the best in New York, I've learned to be
                        proficient in a fast-paced work environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row exp-timeline">
              <div className="col-xs-2">
                <div className="timeline-st"></div>
              </div>
              <div className="col-xs-10 exp-content-wrap">
                <div className="row">
                  <div
                    className="wow fadeInRight"
                    data-wow-duration=".4s"
                    data-wow-delay="0.6s"
                  >
                    <div className="col-sm-3 duration">
                      <span>Oct 2011 – Jan 2013</span>
                    </div>
                    <div className="col-sm-9">
                      <span className="job-desn">Intern Developer</span>
                      <span className="job-loc">Oxwalk Ducks, California</span>
                      <p className="job-summary p-small">
                        Create frameworks to guide critical thinking, to
                        streamline the ideation process and to visualize complex
                        concepts. Uses various graphic approaches to make
                        complex ideas more tangible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--/Experience Sec--> */}
      </div>
    );
  }
}
