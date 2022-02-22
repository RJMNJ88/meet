Feature: SPECIFY NUMBER OF EVENTS

Scenario: When user hasn’t specified a number, 32 is the default number
Given the user has not searched for a city
When the user opens the app
Then the user should see an events list limited to 32 events

Scenario: User can change the number of events they want to see
Given the main page is open
When the user enters a number into the number of events box
Then the number of events displayed should update to match that input
