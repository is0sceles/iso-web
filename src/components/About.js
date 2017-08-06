import React, { Component } from 'react';


export default class About extends Component {
  render() {
    return (
      <div>
        <div className="pimg2">
          <div className="ptext">
            <span className="border">
            about
            </span>
          </div>
        </div>
        <section id="about" className="section section-dark">
          <h2> about </h2>
          <hr />
          <table className="about_table">
            <tbody>
              <tr>
                <td>Kingdom:</td>
                <td>Animalia</td>
              </tr>
              <tr>
                <td>Phylum:</td>
                <td>Chordata</td>
              </tr>
              <tr>
                <td>Class:</td>
                <td>Mammalia</td>
              </tr>
              <tr>
                <td>Order:</td>
                <td>Primates</td>
              </tr>
              <tr>
                <td>Family:</td>
                <td>Hominidae</td>
              </tr>
              <tr>
                <td>Tribe:</td>
                <td>Hominini</td>
              </tr>
              <tr>
                <td>Genus:</td>
                <td>Homo</td>
              </tr>
              <tr>
                <td>Species:</td>
                <td>Homo Sapien</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}
