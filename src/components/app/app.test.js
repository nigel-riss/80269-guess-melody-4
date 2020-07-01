import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

const questions = {
  // TODO: add questions mocks
};


it(`App renders correctly`, () => {
  const tree = renderer
    .create(<App
      errorCount={3}
      questions={questions}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
