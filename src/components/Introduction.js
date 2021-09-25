import React, { Component } from "react";

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
            With my efforts and will to strive in the university, I repeatedly
            achieved excellent results at the end of the semester and was
            rewarded by the university. Besides, with the position of Software
            Engineer at NashTech, I will constantly learn, try to develop my
            knowledge, skills and experience to bring value to the company and
            help the company reach business goals in Microsoft .NET domain. I
            enjoy bringing clarity to complex problems with a people first
            approach.
          </p>
          <p className="wow fadeInUp" data-wow-duration=".4s">
            I am a complete social person. Find my work on &nbsp;
            <a
              className="goto-social"
              href="https://www.linkedin.com/in/khoadq-2705"
            >
              Linkedin
            </a>
            &nbsp; & &nbsp;
            <a href="https://github.com/KhoaDQ" className="goto-social">
              Github
            </a>
            . Experience my social networking activities on &nbsp;
            <a href="https://www.instagram.com/khoadq/" className="goto-social">
              Instagram
            </a>
            &nbsp; & &nbsp;
            <a
              className="goto-social"
              href="https://www.facebook.com/1ngaykhongxa"
            >
              Facebook
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
