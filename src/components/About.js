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
          <span className="name"> <h2> <span className="first_letter"> W</span>asiff Afzal </h2> </span>
          <hr />
          <div className="section_container">
            <div className="Left">
              <h4 className="pannel_title">Education</h4>
              <h3 className="school"><a href="">EPFLx</a></h3> <span className="school_year">2017</span><span className="degree">
Computer Science: Biology in JavaScript - Genetic & epidemic modeling</span>

              <h3 className="school"><a href="">Hack Reactor</a></h3> <span className="school_year">2017</span><span className="degree">
Immersive Software Engineering</span>

              <h3 className="school"><a href="">CodePath</a></h3> <span className="school_year">2016</span><span className="degree">
Android Development</span>

              <h3 className="school"><a href="">MIT (OCW)</a></h3> <span className="school_year">2016</span><span className="degree">
Introduction to Algorithms</span>

              <h3 className="school"><a href="">CCSF</a></h3> <span className="school_year">2015</span><span className="degree">
Computer Science: Java</span>

              <h3 className="school"><a href="">SFSU</a></h3> <span className="school_year">2008</span><span className="degree">
BSc. Corporate Finance & Financial Services</span>
            </div>
            <div className="Middle">
              <h4 className="pannel_title">Origin</h4>
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
                    <td>Primate</td>
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
            </div>
            <div className="Right">
              <h4 className="pannel_title">Technologies</h4>
              <h3 className="school">Languages:</h3> <span className="degree">
JavaScript, Java, Ruby, PHP, Bash, HTML/XML, CSS, SQL, Git</span>
              <h3 className="school">Frontend Frameworks:
</h3> <span className="degree">
Angular, Backbone, React, Redux, Vue, Vuex, jQuery, D3 </span>
              <h3 className="school">Backend Frameworks:
</h3> <span className="degree">
Node, Express</span>
              <h3 className="school">Databases & ORMs:
</h3> <span className="degree">
MongoDB, Mongoose, MySQL, Bookshelf, SQLite, ActiveRecord </span>
              <h3 className="school">Mobile Frameworks:
</h3> <span className="degree">
Android, Grails</span>
              <h3 className="school">Other Technologies:
</h3> <span className="degree">
AJAX, Observables, Promises, Sass, Flexbox, WAMP, Photoshop</span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
