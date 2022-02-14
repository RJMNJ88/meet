import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';

class App extends Component {

  state = {
    events: [],
    locations: [],
    listLength: 32
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = 
        (location === 'all') 
        ? events
        : events.filter((event) => event.location === location)
      if(this.mounted) {
        this.setState({
          events: locationEvents.events.slice(0, this.state.listLength),
          currentLocation: location
        });
      }        
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ 
          events, 
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <CitySearch 
          locations={this.state.locations}  
          updateEvents={this.updateEvents} 
        />
        <NumberOfEvents 
          listLength={this.state.listLength}
          updateEvents={this.updateEvents}
        />
        <EventList 
          events={this.state.events} 
        />
      </div>
    );
  }
}

export default App;