import React, { Component } from 'react';
// import { ErrorAlert } from './Alert'

class NumberOfEvents extends Component {
    state = { 
        listLength: 32,
        // errorMessage: ''
    }
    
    handleListInput = (e) => {
        const value = e.target.value;
        if(value < 1 || value > 32) {
            this.setState({
                listLength: '',
                // errorMessage: 'Please enter a number from 1 to 32.'
            })
        } else {
            this.setState({
                listLength: value,
                // errorMessage: ''
            })
        }
        this.props.update(NumberOfEvents(e.target.value));
    };


    render() { 
        return (
            <div className='event-number-container'>
                <h2 className='event-number-title'>Number of Events:</h2>
                <input
                    type='number'
                    className='event-number-input'
                    value={this.props.listLength}
                    onChange={(e) => this.handleListInput(e)}
                />
                {/* <ErrorAlert text={this.state.errorMessage} /> */}
            </div>
        );
    }
}
 
export default NumberOfEvents;