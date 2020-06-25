import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';

const init = () => {
  const settings = {
    errorCount: 4,
  };

  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
      />,
      document.querySelector(`#root`)
  );
};

init();
