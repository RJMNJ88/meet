import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import { WarningAlert } from './Alert';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import EventGenre from './EventGenre';

class App extends Component {

  state = {
    events: [],
    locations: [],
    currentLocation: 'all',
    listLength: 32,
    errorText: '',
    warningMessage: ''
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = 
        (location === 'all') 
        ? events
        : events.filter((event) => event.location === location)
      if(this.mounted) {
        this.setState({
          events: locationEvents.slice(0, this.state.listLength),
          currentLocation: location
        });
      }        
    });
  }

  updateNumberOfEvents = e => {
    const newNumber = e.target.value ? parseInt(e.target.value) : 32;
    if(newNumber < 1 || newNumber > 32) {
      return this.setState({
        listLength: 0,
        errorText: 'Please enter a number from 1 to 32'
      });
    } else {
      this.setState({
        listLength: newNumber,
        errorText: ''
      });
      this.updateEvents(this.state.currentLocation, this.state.listLength);
    }
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
      if(!navigator.onLine) {
        this.setState({
          warningMessage: 'You are not connected to the internet'
        })
      } else {
        this.setState({
          warningMessage: ''
        });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

  render() {

    const { warningMessage } = this.state;

    return (
      <div className="App">
        <WarningAlert text={ warningMessage } />
        <CitySearch 
          locations={this.state.locations}  
          updateEvents={this.updateEvents} 
        />
        <NumberOfEvents 
          listLength={this.state.listLength}
          updateNumberOfEvents={this.updateNumberOfEvents}
          errorText={this.state.errorText}
          handleListInput={this.handleListInput}
        />
        <div className='data-vis-wrapper'>
          <EventGenre events={this.state.events} />
          <ResponsiveContainer
            height={400}
          >
            <ScatterChart
              margin={{
                top: 20, right: 20, bottom: 20, left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis type="number" dataKey="number" name="number fo events" allowDecimals={false} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList 
          events={this.state.events} 
        />
      </div>
    );
  }
}

export default App;