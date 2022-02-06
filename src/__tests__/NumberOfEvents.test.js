import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />)
    });

    test('Event number element renders correctly', () => {
        expect(NumberOfEventsWrapper.find('.event-number-container')).toHaveLength(1);
    });

    test('Event number data renders correctly', () => {
        const listLength = NumberOfEventsWrapper.prop('listLength');
        expect(NumberOfEventsWrapper.find('.event-number-input').prop('value')).toBe(listLength);
    });


});