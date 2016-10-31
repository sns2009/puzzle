import React from 'react';
import R from 'ramda';


export default class Samecards extends React.Component {

  onChange(e) {
    this.props.sameCardChose(+e.target.value);
  }

  render() {
    const sameCards = this.props.sameCards;
    let sameCardsOption = [];
    sameCardsOption = sameCards.map((card, i) => {
      return (<option onClick={this.onChange.bind(this)} key={i} value={card}>{card}</option>);
    });

    return (<div>
      <h4>Choose quantity of same tiles to find:</h4>

      <select value={this.props.chosenSameCardQuantity} style={{
        margin: '0 auto',
        width: '100px',
      }} id="sameCards" size="2">
        {sameCardsOption}
      </select>
    </div>);
  }

}
Samecards.propTypes = {
  sameCards: React.PropTypes.array,
  chosenSameCardQuantity: React.PropTypes.number,
  sameCardChose: React.PropTypes.func,
};
