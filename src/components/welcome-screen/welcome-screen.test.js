import React from 'react';
import renderer from 'react-test-renderer';
import {WelcomeScreen} from './welcome-screen.jsx';

it(`Render WelcomeScreen correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      errorCount={3}
      onWelcomeButtonClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
