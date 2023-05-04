import React from 'react';
import NumberForm from './NumberForm';
import NumberListDisplay from './NumberListDisplay';

class NumberLister extends React.Component {

    state = {
        currentNumber: '',
        numbers: []
    }

    onNumberTextboxChange = (e) => {
        this.setState({ currentNumber: e.target.value });
    }

    onClearClick = () => {
        this.setState({ currentNumber: '' });
    }

    onAddClick = () => {
        const copy = [...this.state.numbers];
        copy.push(this.state.currentNumber);
        this.setState({ numbers: copy, currentNumber: '' });
    }

    render() {
        return (
            <div className='container mt-5'>
                <NumberForm currentNumber={this.state.currentNumber}
                    onClearClick={this.onClearClick}
                    onTextChange={this.onNumberTextboxChange}
                    onAddClick={this.onAddClick}
                />

                <NumberListDisplay numbers={this.state.numbers} />
            </div>
        )
    }
}

export default NumberLister;