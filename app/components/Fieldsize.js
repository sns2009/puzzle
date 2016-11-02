import React from 'react';
import R from 'ramda';
import CSSModules from 'react-css-modules';
import gameConfig from '../gameConfig';
import styles from '../../css/style.css';

const sizesToOptions = R.map(size => (<option key={size} value={size}>{size}x{size}</option>));

class Fieldsize extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);  
  }

  onChange(e) {
    const dimention = +e.target.value;
    this.props.setPrevFieldSize(dimention);
    this.props.setSameCards();
  }

  render() {
    const options = sizesToOptions(R.range(gameConfig.smallestField, gameConfig.biggestField + 1));
    return (<div>
      <h3>Choose game field size:</h3>

      <select styleName="chooseBlock" size="4" onChange={this.onChange}
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
export default CSSModules(Fieldsize, styles);