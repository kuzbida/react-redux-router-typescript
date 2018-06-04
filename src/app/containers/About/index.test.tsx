import * as React from 'react';
import { shallow } from 'enzyme';
import { About } from './index';

test('About', () => {
    const AboutConteiner = shallow(<About />);
    expect(AboutConteiner.find('h1').text()).toEqual('About');

    // Snapshot demo 
    expect(shallow).toMatchSnapshot();
});