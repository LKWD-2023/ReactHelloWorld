import React from 'react';

class NumberForm extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-6'>
                    <input value={this.props.currentNumber} onChange={this.props.onTextChange} type='text' placeholder='Number' className='form-control' />
                </div>
                <div className='col-md-1'>
                    <button onClick={this.props.onAddClick} className='btn btn-dark w-100'>Add</button>

                </div>
                <div className='col-md-1'>
                    <button onClick={this.props.onClearClick} className='btn btn-warning w-100'>Clear</button>
                </div>

            </div>
        );
    }
}

export default NumberForm;