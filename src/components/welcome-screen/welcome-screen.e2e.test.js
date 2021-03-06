import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen.jsx';


Enzyme.configure({
  adapter: new Adapter(),
});


it(`Welcome Screen play button can be pressed`, () => {
  const handleWelcomeButtonClick = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen
        errorCount={3}
        onWelcomeButtonClick={handleWelcomeButtonClick}
      />
  );

  const welcomeButton = welcomeScreen.find(`button.welcome__button`);

  welcomeButton.props().onClick();

  expect(handleWelcomeButtonClick.mock.calls.length).toBe(1);
});
