import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import questions from './mocks/questions.js';

const init = () => {
  const settings = {
    errorCount: 3,
  };

  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        questions={questions}
      />,
      document.querySelector(`#root`)
  );
};

init();
