import React, { Component } from "react";

class Event extends Component {

  state = {
    collapsed: true
  };

  handleClick = ()  => {
    this.setState({
        collapsed: !this.state.collapsed
    });
  };


  render() {
    const { event} = this.props;
    const { collapsed } = this.state;

    return (
      <div className="event">

        <h2 className="event-summary">{ event.summary }</h2>
        <p className="event-location">{ event.location }</p>
        <p className="event-time">{ event.start.dateTime } ({ event.start.timeZone })</p>

        {!collapsed && (
          <div className="event-details">
            <p className="event-end">{ event.end.dateTime }</p>
            <p className="event-description">{ event.description }</p>
            <a className="event-link" href={event.htmlLink} >More Info</a>
          </div>
        )}

        <button className="detials-btn" onClick={this.handleClick}>
          {collapsed ? "Show Details" : "Hide Details"}
        </button>

      </div>

    )
  }
}
export default Event;