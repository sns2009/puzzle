import React from 'react';
import Gamefield from './Gamefield';
import Result from './Result';
import Fieldsize from './Fieldsize';
import Samecards from './Samecards';
import Startbutton from './Startbutton';

export default class Welcome extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const startBlockWidth = this.props.windowWidth - this.props.gameFieldSize.width;

    return (
      <div className="app clearfix">
        <Gamefield cards={this.props.store.cards}
          gameFieldSize={this.props.gameFieldSize}
          gameParams={this.props.store.gameParams}
          currentlyOpened={this.props.store.currentlyOpened}
          triggerGameField={this.props.triggerGameField}
          changeCardStatus={this.props.changeCardStatus}
          deleteCurrentlyOpened={this.props.deleteCurrentlyOpened}
          incrementTries={this.props.incrementTries}
          gameOver={this.props.gameOver}
          addToCurrentlyOpened={this.props.addToCurrentlyOpened}
          firstCardClicked={this.props.firstCardClicked}
        />
        <div style={{
          float: 'right',
          width: `${startBlockWidth - 20}px`,
          height: 'auto',
        }}
        >
          <div style={{
            margin: '0 auto',
            width: '200px',
            display: 'block',
            textAlign: 'center',
          }}
          >

            <Result gameResult={this.props.store.gameResult}
              gameOver={this.props.store.gameParams.gameOver}
            />

            <Fieldsize setPrevFieldSize={this.props.setPrevFieldSize}
              setSameCards={this.props.setSameCards}
            />

            <Samecards sameCards={this.props.store.gameParams.sameCards}
              chosenSameCardQuantity={this.props.store.gameParams.chosenSameCardQuantity}
              sameCardChose={this.props.sameCardChose}
            />

            <Startbutton gameParams={this.props.store.gameParams}
              setFieldSize={this.props.setFieldSize}
              startGame={this.props.startGame}
              gameOver={this.props.gameOver}
              setPerfectTriesNumber={this.props.setPerfectTriesNumber}
              resetTries={this.props.resetTries}
              deleteCurrentlyOpened={this.props.deleteCurrentlyOpened}
              firstCardClicked={this.props.firstCardClicked}
              generateGame={this.props.generateGame}
            />

          </div>
        </div>
      </div>
        );
  }
}
Welcome.defaultProps = {
  gameFieldSize: {
    width: document.documentElement.clientHeight - 2,
    height: document.documentElement.clientHeight - 2,
  },
  windowWidth: document.documentElement.clientWidth,
};
