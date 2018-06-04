import * as React from 'react';
import { shallow } from 'enzyme';
import { App } from './index';

test('basic',async () => {
    expect(true).toBe(true);
  });

// test('App should render', () => {
//   const app = shallow(<App />);

//   // Interacton demo 
//   expect(app).toBeDefined();
//   // Snapshot demo 
//   expect(shallow).toMatchSnapshot();
// });