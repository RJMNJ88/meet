Feature: SHOW/HIDE AN EVENT'S DETAILS

Scenario: An event element is collapsed by default
Given the user has opened the app
When the user views a specific event
Then the event details should be hidden

Scenario: User can expand an event to see its details
Given the user has opened the app
When the user clicks the show details button
Then the event details should be visible

Scenario:  User can collapse an event to hide its details
Given user has opened the app
And the event details are visible
When the user clicks the hide details button
Then the event details should collapse