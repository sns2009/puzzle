import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../css/style.css';


class Samecards extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);  
  }

  onChange(e) {
    this.props.sameCardChose(+e.target.value);
  }

  render() {
    const sameCards = this.props.sameCards;
    const sameCardsOption = sameCards.map((card, i) => {
      return (<option onClick={this.onChange} key={i} value={card}>{card}</option>);
    });

    return (<div>
      <h4>Choose quantity of same tiles to find:</h4>

      <select value={this.props.chosenSameCardQuantity} styleName="chooseBlock" size="2">
        {sameCardsOption}
      </select>
    </div>);
  }

}
Samecards.propTypes = {
  sameCards: React.PropTypes.arrayOf(React.PropTypes.number),
  chosenSameCardQuantity: React.PropTypes.number,
  sameCardChose: React.PropTypes.func,
};

export default CSSModules(Samecards, styles);