import React from 'react';
import ReactDOM from 'react-dom';

class BigEvenDigitWithoutHook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: '',
            result: 0
        };
    }

    calculateBiggestEvenDigit = () => {
        let x = parseInt(this.state.number);
        let big = 0;

        while (x > 0) {
            let rem = x % 10;
            if (rem % 2 === 0 && rem > big) {
                big = rem;
            }
            x = Math.floor(x / 10);
        }

        this.setState({ result: big });
    };

    handleInputChange = (e) => {
        this.setState({ number: e.target.value });
    };

    render() {
        return (
            <div>
                <b>Enter a Number</b>
                <input
                    type="text"
                    value={this.state.number}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.calculateBiggestEvenDigit}>GetEvenBig</button>
                {this.state.result !== 0 && <p>Biggest Even Digit: {this.state.result}</p>}
            </div>
        );
    }
}

export default BigEvenDigitWithoutHook;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BigEvenDigitWithoutHook />);