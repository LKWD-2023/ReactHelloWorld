//main.jsx
//import { add, subtract } from './my-module';

//import { multiply } from './newfolder/other-thing';

////const sum = multiply(2, 5);
////console.log(sum);

//import hello, { fancyLog } from './basic';

//hello("hello")

import React from 'react';
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

import NumberLister from './NumberLister';


class MyFirstComponent extends React.Component {

    state = {
        count: 0,
        textValue: ''
    }

    onButtonClick = () => {
        this.setState({ count: this.state.count + 1 });
    }

    getSpecialData = () => {
        if (this.state.count % 10 === 0) {
            return <h3 className='text-danger'>YAY!!</h3>
        }
    }

    onTextChange = (e) => {
        this.setState({textValue: e.target.value});
    }

    onClearClick = () => {
        this.setState({textValue: ''})
    }

    render() {
        return (
            <div className='container mt-5'>

                {this.getSpecialData()}

                <button className="btn btn-primary" onClick={this.onButtonClick}>Click me!</button>
                <h1>Count: {this.state.count}</h1>
                <div className="row">
                    <div className="col-md-6">
                        <input type="text" value={this.state.textValue} onChange={this.onTextChange} className='form-control' placeholder='Type stuff' />
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-warning' onClick={this.onClearClick}>Clear</button>
                    </div>
                </div>
                <h2>{this.state.textValue}</h2>
                {/*<MySecondComponent theName={this.props.name} count={this.state.count } />*/}
            </div>);

    }
}

class MySecondComponent extends React.Component {
    render() {
        return (<>
            <h2>The name passed from MyFirstComponent is {this.props.theName}</h2>
            <h2>the count value is {this.props.count}</h2>
        </>);
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(
   <NumberLister />
)