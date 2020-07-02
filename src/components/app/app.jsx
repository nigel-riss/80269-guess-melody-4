import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
// import {Switch, Route, BrowserRouter} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';


class App extends PureComponent {
  constructor(props) {
    super(props);

    this._handleWelcomeButtonClick = this._handleWelcomeButtonClick.bind(this);
  }

  render() {
    const {errorCount} = this.props;

    return <WelcomeScreen
      errorCount={errorCount}
      onWelcomeButtonClick={this._handleWelcomeButtonClick}
    />;
  }

  _handleWelcomeButtonClick() {}
}


App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};


export default App;
