import React from 'react'
import renderer from 'react-test-renderer'

import App from '../src/App';

describe('Welcome (Snapshot)', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<App />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
})