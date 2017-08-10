import React, { Component } from 'react';


export default class BHP extends Component {
  componentDidMount() {
    const bhpClose = document.getElementById('bhp_close');
    bhpClose.addEventListener('click', () => {
      const bhp = document.getElementById('bhp');
      bhp.classList.add('not_active');
    });
  }
  render() {
    return (
      <div className="modal_body">
        <div id="bhp" className="container overlay">
          <div id="bhp_close" className="closeBtn"><i className="ion-close" /> </div>
          <div className="modal">
            <img src={require('../../assets/bhp.jpg')} className="logo_Images" alt="big_hearts_pets_logo" />
            {/* <h4> <span className="job_years"> </span> </h4> */}
            <h3> Research Analyst | <span id="bhp_title"> Market Intelligence </span> </h3>
            <ul> <span className="category"> Base Analytics </span>
              <li> Data vendor management </li>
              <li> Data QC optimization and ensuring accuracy of data</li>
              <li> Monthly data production for internal release and ad.hoc projects: competitive and comparative
analysis </li>
              <li> Monthly velocity reports (rank & YOY change) for products in pet specialty channels</li>
              <li> Database expansion; Automation and building of additional process QC reports </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
