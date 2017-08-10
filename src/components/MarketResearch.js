import React, { Component } from 'react';
import Nielsen from './projects/Nielsen';
import Digitas from './projects/Digitas';
import BHP from './projects/BHP';
import Tivo from './projects/Tivo';
import Carat from './projects/Carat';
import Boni from './projects/Boni';

export default class MarketResearch extends Component {
  componentDidMount() {
    const containers = document.getElementsByClassName('overlay');
    const projects = document.getElementsByClassName('projects');

    function setActiveClass(name) {
      containers[name].classList.remove('not_active');
      containers[name].classList.add('is_active');
    }

    for (let i = 0; i < projects.length; i += 1) {
      projects[i].addEventListener('click', (e) => {
        e.preventDefault();
        switch (e.target.alt) {
          case 'nielsen':
            for (let i = 0; i < containers.length; i += 1) {
              if (containers[i].id === e.target.alt) {
                setActiveClass(i);
              }
            }
            break;
          case 'digitas':
            for (let i = 0; i < containers.length; i += 1) {
              if (containers[i].id === e.target.alt) {
                setActiveClass(i);
              }
            }
            break;
          case 'tivo':
            for (let i = 0; i < containers.length; i += 1) {
              if (containers[i].id === e.target.alt) {
                setActiveClass(i);
              }
            }
            break;
          case 'bhp':
            for (let i = 0; i < containers.length; i += 1) {
              if (containers[i].id === e.target.alt) {
                setActiveClass(i);
              }
            }
            break;
          case 'carat':
            for (let i = 0; i < containers.length; i += 1) {
              if (containers[i].id === e.target.alt) {
                setActiveClass(i);
              }
            }
            break;
          case 'boni':
            for (let i = 0; i < containers.length; i += 1) {
              if (containers[i].id === e.target.alt) {
                setActiveClass(i);
              }
            }
            break;
        }
      });
    }
  }
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
              <img className="responsive-img projects" src="https://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/0015/8334/brand.gif?itok=IgwBPBI7" alt="nielsen" />
            </div>
          </div>
          <div className="card cardIcons">
            <div className="card-image">
              <img className="responsive-img projects" src="https://vignette1.wikia.nocookie.net/logopedia/images/8/8a/TiVo.svg/revision/latest/scale-to-width-down/200?cb=20170610071046" alt="tivo" />
            </div>
          </div>
          <div className="card cardIcons">
            <div className="card-image">
              <img className="responsive-img projects" src="https://media.glassdoor.com/sqll/35841/carat-squarelogo-1437377252222.png" alt="carat" />
            </div>
          </div>
          <div className="card cardIcons">
            <div className="card-image">
              <img className="responsive-img projects" src="https://www.digitaslbi.com/globalassets/mediakit/logos/logo2/digitaslbi-logo-2.png" alt="digitas" />
            </div>
          </div>
          <div className="card cardIcons">
            <div className="card-image">
              <img className="responsive-img projects" src="http://mms.businesswire.com/media/20140219005924/en/403827/4/Big_Heart_Pet_Brands_Logo_FINAL.jpg" alt="bhp" />
            </div>
          </div>
          <div className="card cardIcons">
            <div className="card-image">
              <img className="responsive-img projects" src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-1/p480x480/1497808_293911220733977_1394441085_n.png?oh=4ec0cf90a4ae32b5543e1bc8e085caf3&oe=59C7DABA" alt="boni" />
            </div>
          </div>
          <p> The alchemists in their search for gold discovered many other things of greater value </p>
          <pre> - Arthur Schopenhauer </pre>
        </section>
        <Nielsen />
        <Tivo />
        <BHP />
        <Digitas />
        <Carat />
        <Boni />
      </div>
    );
  }
}
