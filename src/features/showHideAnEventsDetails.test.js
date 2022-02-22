import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { extractLocations } from '../api';
import { mockData } from '../mock-data';
import CitySearch from '../CitySearch';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    

    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppWrapper;

        given('the user has opened the app', async () => {
            AppWrapper = await mount(<App />);
        });

        when('the user views a specific event', () => {
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);         
        });

        then('the event details should be hidden', () => {
            expect(AppWrapper.find('.event-details')).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {

        let AppWrapper;

        given('the user has opened the app', async () => {
            AppWrapper = await mount(<App />);
        });

        when('the user clicks the show details button', () => {
            AppWrapper.update();
            AppWrapper.find('.details-btn').at(0).simulate('click');
        });

        then('the event details should be visible', () => {
            expect(AppWrapper.find('.event-details')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details', ({ given, and, when, then }) => {

        let AppWrapper;

        given('user has opened the app', async () => {
            AppWrapper = await mount(<App />);
        });

        and('the event details are visible', () => {
            AppWrapper.update();
            AppWrapper.find('.details-btn').at(0).simulate('click');
            expect(AppWrapper.find('.event-details')).toHaveLength(1);
        });

        when('the user clicks the hide details button', () => {
            AppWrapper.find('.details-btn').at(0).simulate('click');
        });

        then('the event details should collapse', () => {
            expect(AppWrapper.find('.event-details')).toHaveLength(0);
        });
    });
});