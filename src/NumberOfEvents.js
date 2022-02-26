import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = { 
        listLength: 32,
        errorText: ''
    }
    
    // handleListInput = (e) => {
    //     const value = e.target.value;
    //     if(value < 1 || value > 32) {
    //         this.setState({
    //             listLength: '',
    //             errorText: 'Please enter a number from 1 to 32.'
    //         })
    //     } else {
    //         this.setState({
    //             listLength: value,
    //             errorText: ''
    //         })
    //     }
    //     this.props.update(NumberOfEvents(e.target.value));
    // };


    render() { 
        return (
            <div className='event-number-container'>
                <h3 className='event-number-title'>Number of Events:</h3>
                <input
                    type='number'
                    className='event-number-input'
                    value={this.props.listLength}
                    // onChange={(e) => this.handleListInput(e)}
                    onChange={(e) => this.props.updateNumberOfEvents(e)}
                />
                <ErrorAlert text={this.state.errorText} />
            </div>
        );
    }
}
 
export default NumberOfEvents;