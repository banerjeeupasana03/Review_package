/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../Comps/App';
// import Bot from '../Comps/Bot';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
  // renderer.create(<Bot />);
});
