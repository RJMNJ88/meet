BASIC APP INFORMATION

Name: Meet App

Functionality: Allow a user to search for upcoming events in a city of their choice by entering the city and country into the app's search bar. The app will give a list of city suggestions as the user types. Once the user has chosen his or her city,  a list of upcoming events will be displayed. These events will initially be displayed in an abbreviated format (only showing a summary of a particular event). By clicking the app's "Show Details" button, the user can see a more comprehensive summary of the events details. These details can then be hidden again when the user has finished by clicking the "hide Details" button. The user will also have the ability to filter visible events up to a maximum of 32 events for a given city. Finally, there will be graphical representations of the number of events for a chosen city.

Additional Information: App will use the Google Calendar API to fetch upcoming events. App will be built using React and Test-Driven Development (TDD). It will also be a serverless, progressive web-application (PWA).


User Stories:

As a [role],
I should be able to [action]
So that [benefit]

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

As a user,
I should be able to expand or collapse an events details
so that I can view more specific details - when necessary - and hide those details
when they aren't needed or are taking up too much space on my screen.

FEATURE 3: SPECIFY NUMBER OF EVENTS

As a user, 
I should be able to specify/filter the number of visible events in my app
so that I can view a more manageable number of events in a particular city
and not be overwhelmed by a comprehensive/exhaustive list of events.

FEATURE 4: USE THE APP WHEN OFFLINE

As a user,
I should be able to view cached data when offline
so that I can reference previously searched events as needed, even without
an internet connection.

FEATURE 5: DATA VISUALIZATION

As a user,
I should be able to view a graphical representation of upcoming events in a city
so that I can determine visually the number of events taking place in a particular
city.


Scenarios:

Given,
When,
Then

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

Given the user has searched a particular city and is viewing a list of events in that city, when the user clicks on the "show details" button of a specific event,
then the event container should expanding, showing the user more details about said event.

Given the user has already viewed event details and would like to hide the details container, when the user clicks "hide details", then the details container should close, showing only the event summary as opposed to full event details.

FEATURE 3: SPECIFY NUMBER OF EVENTS

Given the user has searched for and chosen a city and is nown viewing the full list of 32 events, when the user changes the event number in the filter box, then the app should change the number of visible events to whatever number the user has chosen.

FEATURE 4: USE THE APP WHEN OFFLINE

Given the user no longer has internet access, when the user would like to view events for a previously searched city, then the app should have that data cached and available for viewing, even without an internet connection.

Given the user no longer has internet access, when the user tries to view a new city for a list of events, then the app should display an error message informing the viewer that the information requested has not been cached and is unavailable wile offline.

FEATURE 5: DATA VISUALIZATION

Given the user would like to see a visual representation of upcoming events, when the user searches for and chooses a city, then the app should load a graphical representation of upcoming events along with the event details.


