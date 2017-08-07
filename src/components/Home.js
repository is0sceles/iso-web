import React, { Component } from 'react';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="pimg1">
          <div className="ptext">
            <span className="border">
            ∆isosceles
            </span>
          </div>
        </div>
        <section className="section section-dark">
          <div className="row">
            <a href="#about" className="waves-effect waves-teal btn-flat">About</a>
            <a href="#machine" className="waves-effect waves-teal btn-flat">Computer Science</a>
            <a href="#marketresearch" className="waves-effect waves-teal btn-flat">Market Research</a>
            <a href="#music" className="waves-effect waves-teal btn-flat">Music</a>
            <a href="#contact" className="waves-effect waves-teal btn-flat">Contact</a>
          </div>
        </section>
      </div>
    );
  }
}
