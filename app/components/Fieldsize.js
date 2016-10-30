import React from 'react';
import R from 'ramda';
import gameConfig from '../gameConfig';


export default class Fieldsize extends React.Component {

  onChange(e) {
    const dimention = e.target.value;
    this.props.setPrevFieldSize(dimention);
    this.props.setSameCards();
  }

  render() {
    const sizesToOptions = R.map(size => (<option key={size} value={size}>{size}x{size}</option>));
    const options = sizesToOptions(R.range(gameConfig.smallestField, gameConfig.biggestField + 1));
    return (<div>
      <h4>Choose game field size:</h4>

      <select style={{
        margin: '0 auto',
        width: '100px',
      }} size="4" onChange={this.onChange.bind(this)}
      >
        {options}
      </select>
    </div>);
  }

}
Fieldsize.propTypes = {
  setPrevFieldSize: React.PropTypes.func,
  setSameCards: React.PropTypes.func,
};
