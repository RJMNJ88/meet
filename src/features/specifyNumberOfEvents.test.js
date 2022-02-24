import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { extractLocations } from '../api';
import { mockData } from '../mock-data';
import CitySearch from '../CitySearch';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {

        let AppWrapper;

        given('the user has not searched for a city', async () => {
            AppWrapper = await mount(<App />);
        });

        when('the user opens the app', async () => {
            AppWrapper.update();
        });

        then('the user should see an events list limited to 32 events', (arg0) => {
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length); 
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {

        let AppWrapper;

        given('the main page is open', async () => {
            AppWrapper = await mount(<App />);
        });

        when('the user enters a number into the number of events box', () => {
            AppWrapper.find('.event-number-input').simulate('change', { target: { value: '1' } });
        });

        then('the number of events displayed should update to match that input', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(1);
        });
    });

});