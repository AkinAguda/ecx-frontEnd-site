import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Nav';
import SideDrawer from '../SideDrawer';
import Question from '../Question';
import Wrapper from '../../HOCs/Wrapper';

class Week extends Component {
  constructor(props) {
    super(props);
    const { isOpen } = this.props;
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      isOpen,
    };
  }

  render() {
    const {
      openNav, closeNav, isOpen, week,
    } = this.props;
    return (
      <Wrapper>
        <Header open={openNav} close={closeNav} />
        <SideDrawer isOpen={isOpen} close={closeNav} />
        <Question questions={week} />
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

Week.propTypes = {
  openNav: PropTypes.func.isRequired,
  closeNav: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  week: PropTypes.arrayOf(PropTypes.shape({
    question: PropTypes.string.isRequired,
    type: PropTypes.string,
    answerIndex: PropTypes.number.isRequired,
    language: PropTypes.string,
    option: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Week);
