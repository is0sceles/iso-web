import React, { Component } from 'react';


export default class Music extends Component {
  render() {
    return (
      <div>
        <div className="pimg5">
          <div className="ptext">
            <span className="border">
      music
      </span>
          </div>
        </div>
        <section id="music" className="section section-dark">
          <h2 className="bands"> the basement.als </h2>
          <p> The Basementals are a rock and roll band from San Francisco, California. </p>
          <div className="card cardIcons">
            <div className="card-image">
              <a href="http://www.facebook.com/thebasementals">
                <img className="responsive-img" src="https://cdn.worldvectorlogo.com/logos/facebook-3.svg" />
              </a>
            </div>
          </div>
          <div className="card cardIcons">
            <div className="card-image">
              <a href="###">
                <img className="responsive-img" src="https://www.software.de/media/image/thumbnail/soundcloud-icon_1280x1280@2x.png" />
              </a>
            </div>
          </div>
          <hr  />
          <h2> Other Side Projects </h2>
          <hr  />
          <h4 className="bands"> the scandanvian swimmers </h4>
          <h4 className="bands"> blueberry survival mechanism </h4>
        </section>
      </div>
    );
  }
}
