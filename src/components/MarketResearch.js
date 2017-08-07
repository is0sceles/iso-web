import React, { Component } from 'react';
import Nielsen from './projects/Nielsen';
import Digitas from './projects/Digitas';
import BHP from './projects/BHP';
import Tivo from './projects/Tivo';

export default class MarketResearch extends Component {
  render() {
    return (
      <div>
        <div className="pimg4">
          <div className="ptext">
            <span className="border">
      market.reseach | data.analytics
      </span>
          </div>
        </div>
        <section id="marketresearch" className="section section-light">
          <h4> 2009 - 2015 </h4>
          <div className="card cardIcons">
            <div className="card-image">
              <a href="#">
                <img className="responsive-img" src="https://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/0015/8334/brand.gif?itok=IgwBPBI7" />
              </a>
            </div>
          </div>
          <div className="card cardIcons">
            <div className="card-image">
              <a href="#">
                <img className="responsive-img black" src="https://vignette1.wikia.nocookie.net/logopedia/images/8/8a/TiVo.svg/revision/latest/scale-to-width-down/200?cb=20170610071046" />
              </a>
            </div>
          </div>
          <div className="card cardIcons">
            <div className="card-image">
              <a href="#">
                <img className="responsive-img" src="https://media.glassdoor.com/sqll/35841/carat-squarelogo-1437377252222.png" />
              </a>
            </div>
          </div>
          <div className="card cardIcons">
            <div className="card-image">
              <a href="#">
                <img className="responsive-img" src="https://www.digitaslbi.com/globalassets/mediakit/logos/logo2/digitaslbi-logo-2.png" />
              </a>
            </div>
          </div>
          <div className="card cardIcons">
            <div className="card-image">
              <a href="#">
                <img className="responsive-img" src="http://mms.businesswire.com/media/20140219005924/en/403827/4/Big_Heart_Pet_Brands_Logo_FINAL.jpg" />
              </a>
            </div>
          </div>
          <div className="card cardIcons">
            <div className="card-image">
              <a href="#">
                <img className="responsive-img" src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-1/p480x480/1497808_293911220733977_1394441085_n.png?oh=4ec0cf90a4ae32b5543e1bc8e085caf3&oe=59C7DABA" />
              </a>
            </div>
          </div>
          <p>
    The alchemists in their search for gold discovered many other things of greater value.
  </p>
          <pre> - Arthur Schopenhauer </pre>
        </section>
        <Nielsen />
      </div>
    );
  }
}
