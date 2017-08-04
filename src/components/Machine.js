import React, { Component } from 'react';


export default class Machine extends Component {
  render() {
    return (
      <div>
        <div className="pimg3">
          <div className="ptext">
            <span className="border">
      machine
      </span>
          </div>
        </div>
        <section id="machine" className="section section-light">
          <h5>
    JavaScript. NodeJS. Ruby. Rails.
  </h5>
          <p>
    It always takes longer than you expect, even when you take into account Hofstadter's Law.
  </p>
          <pre> - Hofstadter's Law </pre>
          <div className="card cardIcons">
            <div className="card-image">
              <a href="https://github.com/is0sceles">
                <img className="responsive-img" src="http://www.agricultureslastingheritage.org/wp-content/uploads/2017/05/githubpurple.png" />
              </a>
            </div>
          </div>
          <div className="card cardIcons">
            <div className="card-image">
              <a href="http://www.codepen.io">
                <img className="responsive-img" src="http://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png" />
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
