import React, { Component } from 'react';


export default class InputV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            result: null
        };
    }

    handleChange = (e) => {
        this.setState({ inputValue: e.target.value });
    };

    handleAdd = () => {
        const number = parseFloat(this.state.inputValue);
        if (!isNaN(number)) {
            this.setState({ result: number * 5 });
        } else {
            this.setState({ result: 'Please enter a valid number' });
        }
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    placeholder="Enter number"
                />
                <button onClick={this.handleAdd}>Add</button>
                <h1>Result: {this.state.result}</h1>
            </div>
        );
    }
}
