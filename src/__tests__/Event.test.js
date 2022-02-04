import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';
import '@testing-library/jest-dom';

describe('<Event /> component', () => {
let EventWrapper;
const mockEvent = mockData[0];

    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockEvent} />);
    });

    // Collapsed component functionality
    test('Summary element renders correctly', () => {
      expect(EventWrapper.find('.event-summary')).toHaveLength(1);
    });
    test('Summary data renders correctly', () => {
        expect(EventWrapper.find('.event-summary').at(0).text()).toBe('Learn JavaScript');
    });

    test('Location element renders correctly', () => {
        expect(EventWrapper.find('.event-location')).toHaveLength(1);
    });
    test('Location data renders correctly', () => {
        expect(EventWrapper.find('.event-location').at(0).text()).toBe('London, UK');
    });

    test('Start-time element renders correctly', () => {
        expect(EventWrapper.find('.event-start')).toHaveLength(1);
    });
    test('Start-time data renders correctly', () => {
        expect(EventWrapper.find('.event-start').at(0).text()).toBe('2020-05-19T16:00:00+02:00');
    });

    test(' Details button renders correctly', () => {
        expect(EventWrapper.find('.event-btn')).toHaveLength(1);
    });

    //Collapse-expand functionality
    test('state.expanded false on load', () => {
        expect(EventWrapper.state('expanded')).toBe(false);
    });
    test('state.expanded changes from true to false when clicked', () => {
        const detailsBtn = EventWrapper.find('.event-btn').first();
        EventWrapper.setState({expanded: true});
        detailsBtn.at(0).simulate('click');
        expect(EventWrapper.state('expanded')).toBe(false);
    });
    test('state.expanded changes from false to true when clicked', () => {
        const detailsBtn = EventWrapper.find('.event-btn').first();
        EventWrapper.setState({expanded: false});
        detailsBtn.at(0).simulate('click');
        expect(EventWrapper.state('expanded')).toBe(true);
    });

    test('Event details are hidden on load', () => {
        EventWrapper.setState({expanded: false});
        expect(EventWrapper.find('.event-details')).toHaveLength(0);
    });
    test('.event-details is rendered when clicking on details button', () => {
        const detailsBtn = EventWrapper.find('.event-btn').first();
        detailsBtn.at(0).simulate('click');
        expect(EventWrapper.find('.event-details')).toHaveLength(1);
    });
    test('If .event-details are rendered, they should be hidden when details button is clicked', () => {
        EventWrapper.setState({expanded: true});
        const detailsBtn = EventWrapper.find('.event-btn').first();
        detailsBtn.at(0).simulate('click');
        expect(EventWrapper.find('.event-details')).toHaveLength(0);
    });


    


    //Expanded component functionality
    test('Description element renders correctly', () => {
        expect(EventWrapper.find('.event-descr')).toHaveLength(1);
    });
    test('Description data renders correctly', () => {
        expect(EventWrapper.find('.event-descr').at(0).text()).toBe('Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.');
    });

    test('Ending time element renders correctly', () => {
        expect(EventWrapper.find('.event-end')).toHaveLength(1);
    });
    test('Ending time data renders correctly', () => {
        expect(EventWrapper.find('.event-end').at(0).text()).toBe('2020-05-19T17:00:00+02:00');
    });

    test('Timezone element renders correctly', () => {
        expect(EventWrapper.find('.event-zone')).toHaveLength(1);
    });
    test('Timezone data renders correctly', () => {
        expect(EventWrapper.find('.event-zone').at(0).text()).toBe('Europe/Berlin');
    });

    test('HTML link element renders correctly', () => {
        expect(EventWrapper.find('.event-link')).toHaveLength(1);
    });
    test('HTML link data renders correctly', () => {
        expect(EventWrapper.find('.event-link').at(0).text()).toBe('Europe/Berlin');
    });

    // Details button label
    test('Details button reads, "Show Details" on load', () => {
        expect(EventWrapper.find('.event-btn').at(0).text()).toBe('Show Details');
    });

    test('Details button reads, "Hide Details" when event is expanded', () => {
        EventWrapper.setState({expanded: false});
        const detailsBtn = EventWrapper.find('.event-btn').first();
        detailsBtn.at(0).simulate('click');
        expect(EventWrapper.find('.event-btn').text()).toBe('Hide Details');
    });

    test('Details button reads, "Show Details" when event is collapsed', () => {
        EventWrapper.setState({expanded: false});
        const detailsBtn = EventWrapper.find('.event-btn').first();
        detailsBtn.at(0).simulate('click');
        detailsBtn.at(0).simulate('click');
        expect(EventWrapper.find('.event-btn').text()).toBe('Show Details');
    });







  });