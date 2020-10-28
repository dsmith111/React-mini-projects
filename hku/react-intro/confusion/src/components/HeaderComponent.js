import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'react-bootstrap';

class Header extends Component{

  render(){
    return(
      <React.Fragment>
        <Navbar className = "navbar-dark">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="containter">
            <div className="row row-header">
              <div className = "col-12 col-sm-6">
                <h1>Ristorante Con Fusion</h1>
                <p> We take inspiration from the World's best cuisines, and
                 create a unique fusion experience. Our lipsmacking creations
                 will tickle your culinary senses! </p>

              </div>
            </div>
          </div>
        </Jumbotron>


      </React.Fragment>
    );
  }
}

export default Header;
