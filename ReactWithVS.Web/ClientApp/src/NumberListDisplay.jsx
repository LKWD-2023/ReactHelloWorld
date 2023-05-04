import React from 'react';
class NumberListDisplay extends React.Component {

    render() {
        return (
            <ul className="list-group">
                {this.props.numbers.map(n => <li className='list-group-item'><h2>{n}</h2></li>)}
            </ul>)
    }
}

export default NumberListDisplay;