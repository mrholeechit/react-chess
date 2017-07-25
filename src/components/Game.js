import React, { Component } from 'react';
import { object, node } from 'prop-types';
import { Provider } from 'react-redux';
import Board from './Board';

export default class Game extends Component {
  render() {
    const { store } = this.props;
    console.log(store.getState().gameReducer.board);
    return (
      <Provider store={store}>
        <Board boardPieces={store.getState().gameReducer.board} />
      </Provider>
    );
  }
}

Game.propTypes = {
  store: object.isRequired,
  children: node,
};
