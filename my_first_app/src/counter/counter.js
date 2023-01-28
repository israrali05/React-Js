import React from 'react';
import Button from '@mui/material/Button';
import classes from './counter.module.css';


class Counter extends React.Component {
    state = {
        counter: 0
    }
    InCounter = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    DeCounter = () => {
        if (this.state.counter > 0) {
            this.setState({ counter: this.state.counter - 1 })
        } else {
            alert('sorry! You have reached at limit Zero')
        }
    }
    render() {
        return (
            <div className={classes.center}>
                <h1>Counter App</h1>
                <h1>{this.state.counter}</h1>
                <button variant="contained" color="success" onClick={this.InCounter}>Increment</button>
                <button variant="outlined" color="error" onClick={this.DeCounter}>Decrement</button>
            </div>
        )
    }
}
export default Counter;