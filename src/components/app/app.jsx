import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import {GameType} from '../../const.js';


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1,
    };

    this._handleWelcomeButtonClick = this._handleWelcomeButtonClick.bind(this);
  }

  render() {
    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>
          <Route exact path="/dev-artist">
            <ArtistQuestionScreen
              onAnswer={() => {}}
              question={questions[1]}
            />
          </Route>
          <Route exact path="/dev-genre">
            <GenreQuestionScreen
              onAnswer={() => {}}
              question={questions[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderGameScreen() {
    return <WelcomeScreen
      errorCount={13}
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
