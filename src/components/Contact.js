import React, { Component } from 'react';


export default class Music extends Component {
  render() {
    return (
      <div>
        <div className="pimg6">
          <div className="ptext">
            <span className="border">
      contact
      </span>
          </div>
        </div>
        <section id="contact" className="section section-dark">
          <h2> contact </h2>

          <p> What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
          <div className="card cardIcons">
            <div className="card-image">
              <a href="http://www.linkedin.com/in/wasiff">
                <img className="responsive-img" src="https://static1.squarespace.com/static/55c672ece4b029ac822d96b7/56090346e4b017614f898862/56090346e4b0ab90b55396cc/1443431309639/linkedin.png?format=300w" />
              </a>
            </div>
          </div>
          <div className="card cardIcons">
            <div className="card-image">
              <a href="mailto:wasiff@gmail.com?Subject=Email%20from%20isosceles%20web" target="_top">
                <img className="responsive-img black" src="https://jsis.washington.edu/cwes-euc/wp-content/uploads/sites/11/2016/03/email.png" />
              </a>
            </div>
          </div>
          <pre className="left"> ∆venues, San Francisco, CA 94121. ©Isosceles MMXVII </pre>
        </section>
      </div>
    );
  }
}
