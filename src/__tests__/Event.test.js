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
        expect(EventWrapper.find('.event-time')).toHaveLength(1);
    });

    test('Start-time data renders correctly', () => {
        expect(EventWrapper.find('.event-time').at(0).text()).toBe('2020-05-19T16:00:00+02:00 (Europe/Berlin)');
    });

    test('Details button renders correctly', () => {
        expect(EventWrapper.find('.details-btn')).toHaveLength(1);
    });


    //Collapse-expand functionality

    test('state.collapsed true on load', () => {
        expect(EventWrapper.state('collapsed')).toBe(true);
    });

    test('state.collapsed changes from true to false when clicked', () => {
        const detailsBtn = EventWrapper.find('.details-btn').first();
        EventWrapper.setState({collapsed: true});
        detailsBtn.at(0).simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(false);
    });

    test('state.collapsed changes from false to true when clicked', () => {
        const detailsBtn = EventWrapper.find('.details-btn').first();
        EventWrapper.setState({collapsed: false});
        detailsBtn.at(0).simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(true);
    });

    test('Event details are hidden on load', () => {
        EventWrapper.setState({collapsed: true});
        expect(EventWrapper.find('.event-details')).toHaveLength(0);
    });

    test('Event details is rendered when clicking on details button', () => {
        const detailsBtn = EventWrapper.find('.details-btn').first();
        detailsBtn.at(0).simulate('click');
        expect(EventWrapper.find('.event-details')).toHaveLength(1);
    });

    test('If event details are rendered, they should be hidden when details button is clicked', () => {
        EventWrapper.setState({collapsed: false});
        const detailsBtn = EventWrapper.find('.details-btn').first();
        detailsBtn.at(0).simulate('click');
        expect(EventWrapper.find('.event-details')).toHaveLength(0);
    });


    //Expanded component functionality

    test('Description element renders correctly', () => {
        EventWrapper.setState({collapsed: false});
        expect(EventWrapper.find('.event-description')).toHaveLength(1);
    });

    test('Description data renders correctly', () => {
        EventWrapper.setState({collapsed: false});
        expect(EventWrapper.find('.event-description').at(0).text()).toBe('Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.');
    });

    test('Event end element renders correctly', () => {
        EventWrapper.setState({collapsed: false});
        expect(EventWrapper.find('.event-end')).toHaveLength(1);
    });

    test('Event end data renders correctly', () => {
        EventWrapper.setState({collapsed: false});
        expect(EventWrapper.find('.event-end').at(0).text()).toBe('2020-05-19T17:00:00+02:00');
    });

    test('HTML link element renders correctly', () => {
        EventWrapper.setState({collapsed: false});
        expect(EventWrapper.find('.event-link')).toHaveLength(1);
    });

    test('HTML link data renders correctly', () => {
        EventWrapper.setState({collapsed: false});
        expect(EventWrapper.find('.event-link').at(0).text()).toBe('More Info');
    });

    // Details button label
    test('Details button reads, "Show Details" on load', () => {
        EventWrapper.setState({collapsed: true});
        expect(EventWrapper.find('.details-btn').at(0).text()).toBe('Show Details');
    });

    test('Details button reads, "Hide Details" when event is expanded', () => {
        EventWrapper.setState({collapsed: true});
        const detailsBtn = EventWrapper.find('.details-btn').first();
        detailsBtn.at(0).simulate('click');
        expect(EventWrapper.find('.details-btn').text()).toBe('Hide Details');
    });

    test('Details button reads, "Show Details" when event is collapsed', () => {
        EventWrapper.setState({collapsed: true});
        const detailsBtn = EventWrapper.find('.details-btn').first();
        detailsBtn.at(0).simulate('click');
        detailsBtn.at(0).simulate('click');
        expect(EventWrapper.find('.details-btn').text()).toBe('Show Details');
    });







  });