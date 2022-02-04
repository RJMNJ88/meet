import React, { Component } from "react";

class Event extends Component {

  state = {
    collapsed: true
  };

  handleClick= ()  => {
    this.setState({
        collapsed: !this.state.collapsed
    });
  };


  render() {
    const { event} = this.props;
    const { collapsed } = this.state;

    return (
      <>
        <div className="event">
          <div className="event-preview">
            <h3 className="event-summary">{event.summary}</h3>
            <p className="event-location">{event.location}</p>
            <p className="event-start">{event.start.dateTime}</p>
          </div>
          <div className="event-details">
            <p className="event-end">{event.end.dateTime}</p>
            <p className="event-zone">{event.end.timeZone}</p>
            <p className="event-descr">{event.description}</p>
            <p className="event-link">{event.htmlLink}</p>
          </div>
        </div>
      </>
    )
  }
}
export default Event;