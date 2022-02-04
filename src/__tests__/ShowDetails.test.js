import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import ShowDetails from '../ShowDetails';

describe('<App /> component', () => {
    let ShowDetailsWrapper;
    beforeAll(() => {
        ShowDetailsWrapper = shallow(<ShowDetails />)
    });

    test('show details of selected event', () => {
        // expect(ShowDetailsWrapper.find('.city')).toHaveLength(1);
    });
});