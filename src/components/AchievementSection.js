import React, { Component } from 'react';

export default class AchievementSection extends Component {
  render() {
    return (
      <div>
        {/* <!--Achivement Sec--> */}
        <section
          id="achivement_sec"
          className="col-lg-10 col-md-11 col-sm-11 center-div achivement-wrap  sec-pad-top sec-pad-bottom-sm"
        >
          <h6>achivements</h6>
          <p className="wow fadeInUp text-justify" data-wow-duration=".4s">
            At the moment is a 4th year student of the University of Information
            Technology. Through my own efforts, I have achieved several
            achievements both inside and outside of school. Besides, I also
            participated in NashTech's internship program in .NET position (this
            was an important turning point for me to be exposed to reality).
          </p>
          <div className="achivement-list-wrap margin-top-40">
            <ul className="row">
              <li className="col-sm-6">
                <ul>
                  <li
                    className="margin-bottom-xs wow fadeInUp"
                    data-wow-duration=".4s"
                    data-wow-delay="0s"
                  >
                    <span className="dash-pointer">-</span>
                    <span className="achive-pts">
                      First Price for Logo Design in Berman Design Award
                    </span>
                  </li>
                  <li
                    className="margin-bottom-xs wow fadeInUp"
                    data-wow-duration=".4s"
                    data-wow-delay=".2s"
                  >
                    <span className="dash-pointer">-</span>
                    <span className="achive-pts">
                      Honorable Mention at International Design Awards
                    </span>
                  </li>
                  <li
                    className="margin-bottom-xs wow fadeInUp"
                    data-wow-duration=".4s"
                    data-wow-delay=".4s"
                  >
                    <span className="dash-pointer">-</span>
                    <span className="achive-pts">AICB New York, USA</span>
                  </li>
                  <li
                    className="margin-bottom-xs wow fadeInUp"
                    data-wow-duration=".4s"
                    data-wow-delay=".6s"
                  >
                    <span className="dash-pointer">-</span>
                    <span className="achive-pts">
                      International CNDY Awards New York, USA
                    </span>
                  </li>
                </ul>
              </li>
              <li className="col-sm-6">
                <ul>
                  <li
                    className="margin-bottom-xs wow fadeInUp"
                    data-wow-duration=".4s"
                    data-wow-delay="0s"
                  >
                    <span className="dash-pointer">-</span>
                    <span className="achive-pts">
                      Drix Club des Directeurs Artistiques Paris, France
                    </span>
                  </li>
                  <li
                    className="margin-bottom-xs wow fadeInUp"
                    data-wow-duration=".4s"
                    data-wow-delay="0.2s"
                  >
                    <span className="dash-pointer">-</span>
                    <span className="achive-pts">
                      A&AD Awards (Yellow & Black Pencils) London, UK
                    </span>
                  </li>
                  <li
                    className="margin-bottom-xs wow fadeInUp"
                    data-wow-duration=".4s"
                    data-wow-delay=".4s"
                  >
                    <span className="dash-pointer">-</span>
                    <span className="achive-pts">
                      Global Dffie Awards New York, USA
                    </span>
                  </li>
                  <li
                    className="margin-bottom-xs wow fadeInUp"
                    data-wow-duration=".6s"
                    data-wow-delay=".6s"
                  >
                    <span className="dash-pointer">-</span>
                    <span className="achive-pts">
                      The Intercontinental Advertising Award (The Cup) (ICAA)
                      Spain
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        {/* <!--/Achivement Sec--> */}
      </div>
    );
  }
}
