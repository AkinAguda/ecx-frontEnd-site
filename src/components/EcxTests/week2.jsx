import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Items/Nav';
import SideDrawer from '../Items/SideDrawer';
import Question from '../Items/Question';
import Wrapper from '../HOCs/Wrapper';
import { week2 } from '../../utils';

class weekTwo extends Component {
  constructor(props) {
    super(props);
    const { isOpen } = this.props;
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      isOpen,
    };
  }

  render() {
    const { openNav, closeNav, isOpen } = this.props;
    return (
      <Wrapper>
        <Header open={openNav} close={closeNav} />
        <SideDrawer isOpen={isOpen} close={closeNav} />
        <Question questions={week2} />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  isOpen: state.isOpen,
});

const mapDispatchToProps = dispatch => ({
  openNav: () => dispatch({ type: 'OPEN SIDE DRAWER' }),
  closeNav: () => dispatch({ type: 'CLOSE SIDE DRAWER' }),
});

weekTwo.propTypes = {
  openNav: PropTypes.string.isRequired,
  closeNav: PropTypes.string.isRequired,
  isOpen: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(weekTwo);
