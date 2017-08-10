import React, { Component } from 'react';


export default class Carat extends Component {
  componentDidMount() {
    const caratClose = document.getElementById('carat_close');
    caratClose.addEventListener('click', () => {
      const carat = document.getElementById('carat');
      carat.classList.add('not_active');
    });
  }
  render() {
    return (
      <div className="modal_body">
        <div id="carat" className="container overlay">
          <div id="carat_close" className="closeBtn"><i className="ion-close" /> </div>
          <div className="modal">
            <img src={require('../../assets/carat.png')} className="logo_Images" alt="carat_logo" />
            {/* <h4> <span className="job_years"> </span> </h4> */}
            <h3> Research Analyst | <span id="carat_title"> Consumer Insights </span> </h3>
            <ul>
              <li> Analysis of media trends & making actionable recommendations to client groups and new client prospects </li>
              <li> Tracking studies, media effectiveness tests and market/media mix modeling </li>
              <li> Supporting media planning and buying groups with day-to-day requests </li>
              <li> Leverage syndicated data sources; 4A’s, Simmons, Mintel, CCS, Rentrak, etc. to develop consumer & media insights for clients </li>
              <li> Market intelligence; gathering and information analysis primarily related to the digital media space </li>
              <li> Competitive analysis using SPSS, Telmar suite and other analytical tools </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
