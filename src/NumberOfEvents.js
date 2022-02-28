import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    // state = { 
    //     listLength: 32,
    //     errorText: ''
    // }

    render() { 
        return (
            <div className='event-number-container'>
                <h3 className='event-number-title'>Number of Events:</h3>
                <input
                    type='number'
                    className='event-number-input'
                    value={this.props.listLength}
                    onChange={(e) => this.props.updateNumberOfEvents(e)}
                />
                <ErrorAlert text={this.props.errorText} />
            </div>
        );
    }
}
 
export default NumberOfEvents;