import React, { Component } from 'react';


export default class Tivo extends Component {
  componentDidMount() {
    const tivoClose = document.getElementById('tivo_close');
    tivoClose.addEventListener('click', () => {
      console.log('tivo close listener');
      const tivo = document.getElementById('tivo');
      tivo.classList.add('not_active');
    });
  }
  render() {
    return (
      <div className="modal_body">
        <div id="tivo" className="container overlay">
          <div id="tivo_close" className="closeBtn"><i className="ion-close" /> </div>
          <div className="modal">
            <img src={require('../../assets/tivo.png')} className="logo_Images" alt="tivo_logo" />
            {/* <h4> <span className="job_years"> </span> </h4> */}
            <h3> Research Analyst | <span id="tivo_title"> Market Research & Account Management </span> </h3>
            <ul> <span className="category"> Ad- Sales </span>
              <li> Support and research capacity; worked with Ad Data Express, MRI, IBISWorld, Sales Force to support the Ad-Sales teams </li>
            </ul>
            <ul> <span className="category"> User Research </span>
              <li> Worked with UI and Engineering led teams to quantify user feedback for: </li>
              <ul>
                <li> Hard/Software, online and app. usability, product design & testing </li>
                <li> Exploratory research for next generation product(s) </li>
                <li> Qualitative research, focus groups, usability and A/B testing </li>
              </ul>
            </ul>
            <ul> <span className="category"> Market Research </span>
              <li> Survey analysis for prospect modeling, studies in brand perception for data clients with SPSS </li>
              <li> Projections for potential markets as part of business and product development </li>
              <li> Measurement of DVR/Telco. Industry reach & penetration across media platforms </li>
              <li> Industry trending and pricing segmentation studies incorporating third party vendors; Acxiom,
eMarketer, Forrester, etc. </li>
            </ul>
            <ul> <span className="category"> Audience Research Measurement </span>
              <li> Managing new and existing client accounts for TiVo portals </li>
              <li> Live vs. Time-shifted viewership for cable and broadcast TV & client creative(s) </li>
              <li> Brand & commercial retention, program ranking, second by second viewership, promo- conversation, segmentation behavior </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
