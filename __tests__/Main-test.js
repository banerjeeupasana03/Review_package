import 'react-native';
import React from 'react';
// import Bot from '../Comps/Bot';
import Main from '../Comps/Main';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  // renderer.create(<Bot />);
  renderer.create(<Main />);
});
