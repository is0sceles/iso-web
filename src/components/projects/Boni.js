import React, { Component } from 'react';


export default class Boni extends Component {
  componentDidMount() {
    const boniClose = document.getElementById('boni_close');
    boniClose.addEventListener('click', () => {
      const boni = document.getElementById('boni');
      boni.classList.add('not_active');
    });
  }
  render() {
    return (
      <div className="modal_body">
        <div id="boni" className="container overlay">
          <div id="boni_close" className="closeBtn"><i className="ion-close" /> </div>
          <div className="modal">
            <img src={require('../../assets/boni.png')} className="logo_Images" alt="boni_logo" />
            {/* <h4> <span className="job_years"> </span> </h4> */}
            <h3> PM | <span id="boni_title"> Project Management & Web Analytics </span> </h3>
            <ul>
              <li> Web development & SEO set-up for e-commerce start-ups online presence </li>
              <li> Implementation of web tracking with Google Analytics to understand: </li>
              <ul>
                <li> client segmentation </li>
                <li> funnel path & </li>
                <li> conversion measurement for content optimization </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
