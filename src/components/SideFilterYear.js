import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
 
class SideFilterYear extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      value: { min: 1990, max: 2023 },
    };
  }

  handleFilterYear = () => {
    const { value } = this.state;
    this.props.handleFilterYear(value);
  };
 
  render() {
    return (
      <div>
        <h5>YEAR Filter</h5>
        <h5>From : {this.state.value.min} - To : {this.state.value.max}</h5>
        <InputRange
          maxValue={2023}
          minValue={1990}
          value={this.state.value}
          onChange={(value) => {
            this.setState({ value }, this.handleFilterYear);
          }}
        />
      </div>
    );
  }
}

export default SideFilterYear;