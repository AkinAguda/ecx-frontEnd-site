import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Paths } from '../../routes';
import Cl from './SideDrawer.module.css';

class SideDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div className={Cl.SideDrawer}>
        hey
      </div>
    );
  }
}

export default SideDrawer;
