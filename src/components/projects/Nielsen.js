import React, { Component } from 'react';


export default class Nielsen extends Component {
  componentDidMount() {
    const nielsenClose = document.getElementById('nielsen_close');
    nielsenClose.addEventListener('click', () => {
      const nielsen = document.getElementById('nielsen');
      nielsen.classList.add('not_active');
    });
  }
  render() {
    return (
      <div className="modal_body">
        <div id="nielsen" className="container overlay">
          <div id="nielsen_close" className="closeBtn"><i className="ion-close" /> </div>
          <div className="modal">
            <img src="https://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/0015/8334/brand.gif?itok=IgwBPBI7" className="logo_Images" alt="nielsen_logo" />
            {/* <h4> <span className="job_years"> </span> </h4> */}
            <h3>Research Manager | <span id="nielsen_title"> Consumer Insights </span> </h3>
            <ul> <span className="category">Media Survey: </span>
              <li> Work with proposal and business development teams</li>
              <li> Management and supervision of client reporting through entire cycle</li>
              <li> Work with proposal and business development teams & as SME for user researchers on media research methodologies</li>
              <li> Managed mobile media product releases for U.S, Europe and Canada</li>
              <li> Measured reach & market penetration, demographics, user preferences, ranking, usage and browsing behavior</li>
            </ul>
            <ul><span className="category"> Consumer Research: </span>
              <li> Production – support for offshore team(s)</li>
              <li> Qualitative & quantitative survey studies</li>
              <li> Online consumer insight surveys; mobile, wire line, broadband</li>
              <li> Analytics & statistics utilizing MarketView, NetView, SQL and Oracle databases</li>
              <li> Analytics with mobile & online data, mapping & testing: w/ proprietary software & ETL application(s)</li>
              <li> Toll gate data analyses to client companies w/ MarketSight & proprietary Mobile Media applications</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
