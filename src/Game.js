import React from "react";
import Board from "./Board";
import WinMessage from "./WinMessage";

/** Game Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

const RULES_LINK = "https://en.wikipedia.org/wiki/Lights_Out_(game)#Gameplay";

class Game extends React.Component {

  state = {board: this.createBoard(), hasWon: false}

  static defaultProps = {ncols: 5, nrows: 5, chanceLightStartsOn: 0.25}

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  createBoard() {
    let {ncols, nrows, chanceLightStartsOn} = this.props;
    
    let board = Array(nrows);

    for (let y = 0; y < nrows; y++) {
      board[y] = Array(ncols);

      for (let x = 0; x < ncols; x++) {
        board[y][x] = (Math.random() < chanceLightStartsOn);
      }
    }
    
    return board;
  }

  /** handle changing a cell: update board & determine if winner */
  flipCellsAround = coord => {
    let {ncols, nrows} = this.props;
    let {board, hasWon} = this.state;
    let [y, x] = coord.split("-").map(Number);
    
    let flipCoords = [
      [y, x], 
      [y + 1, x], 
      [y - 1, x], 
      [y, x + 1], 
      [y, x - 1], 
    ];

    flipCoords.forEach(([y, x]) => {
       const isOnBoard = (x >= 0 && x < ncols && y >= 0 && y < nrows);
       if (isOnBoard) board[y][x] = !board[y][x];
    });
    
    hasWon = board.every(row => row.every(cell => !cell));

    this.setState({board, hasWon});
  }

  
  render() {

    const {board, hasWon} = this.state;

    let output = <>
      <Board 
        board={board} 
        flipCellsAround={this.flipCellsAround} 
      />
      <div className="rules">
        <a href={RULES_LINK}>Rules</a>
      </div>
    </>

    if (hasWon) output = <WinMessage />;

    return output;
  }
}


export default Game;