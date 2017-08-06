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
                <img className="responsive-img" src={require('../assets/linkedin.png')} />
              </a>
            </div>
          </div>
          <div className="card cardIcons">
            <div className="card-image">
              <a href="mailto:wasiff@gmail.com?Subject=Email%20from%20isosceles%20web" target="_top">
                <img className="responsive-img black" src={require('../assets/email.svg')} />
              </a>
            </div>
          </div>
          <pre className="left"> ∆venues, San Francisco, CA 94121. ©Isosceles MMXVII </pre>
        </section>
      </div>
    );
  }
}
