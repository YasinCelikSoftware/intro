import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import CartSummary from './CartSummary';
import {Link, as} from 'react-router-dom';

export default class Navi extends React.Component {
  constructor (props) {
    super (props);

    this.toggle = this.toggle.bind (this);
    this.state = {
      isOpen: false,
    };
  }

  toggle () {
    this.setState ({
      isOpen: !this.state.isOpen,
    });
  }

  isEmpty = () => {
    console.log (this);
  };

  render () {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <Link to="/">Northwind</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <Link to="/form1">
                  Form Demo
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/form2">
                  Form Demo 2
                </Link>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/YasinCelikSoftware"
                  target="_blank"
                >
                  GitHub
                </NavLink>
              </NavItem>
              <CartSummary
                cart={this.props.cart}
                removeFromCart={this.props.removeFromCart}
              />
            </Nav>
          </Collapse>

        </Navbar>
      </div>
    );
  }
}
