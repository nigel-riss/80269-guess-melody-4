import PropTypes from 'prop-types';
import React from 'react';
import {WelcomeScreen} from '../welcome-screen/welcome-screen.jsx';


const handleWelcomeButtonClick = () => {};


export const App = (props) => {
  const {errorCount, questions} = props;

  return <WelcomeScreen
    errorCount={errorCount}
    onWelcomeButtonClick={handleWelcomeButtonClick}
  />;
};


App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};
