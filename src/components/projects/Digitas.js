import React, { Component } from 'react';


export default class Digitas extends Component {
  componentDidMount() {
    const digitasClose = document.getElementById('digitas_close');
    digitasClose.addEventListener('click', () => {
      const digitas = document.getElementById('digitas');
      digitas.classList.add('not_active');
    });
  }
  render() {
    return (
      <div className="modal_body">
        <div id="digitas" className="container overlay">
          <div id="digitas_close" className="closeBtn"><i className="ion-close" /> </div>
          <div className="modal">
            <img src={require('../../assets/digitas.png')} className="logo_Images" alt="digitas_logo" />
            {/* <h4> <span className="job_years"> </span> </h4> */}
            <h3> Sr. Research Analyst | <span id="digitas_title"> Strategies & Analytics </span> </h3>
            <ul>
              <li> Built marketing & KPI measurement tools for for pharmaceutical client, Kaiser Permanente's senior marketing and finance managers to be able to guage </li>
              <ul>
                <li> budget tracking </li>
                <li> forecasting and projections </li>
                <li> media campaigns </li>
              </ul>
              <li> Developed dashboards to track:</li>
              <ul>
                <li> media campaigns </li>
                <li> media campaign performance </li>
                <li> high-level marketing campaign planning </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
