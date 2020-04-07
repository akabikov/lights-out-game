/* eslint-disable react/require-render-return */
import React from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
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

class Board extends React.Component {

  state = {board: this.createBoard(), hasWon: false}

  static defaultProps = {ncols: 5, nrows: 5, chanceLightStartsOn: 0.3}

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


    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    
    let flipCoords = [[y, x], [y - 1, x], [y, x + 1], [y + 1, x], [y, x - 1]];

    flipCoords.forEach(([y, x]) => flipCell(y, x));
    
    // win when every cell is turned off
    // TODO: determine is the game has been won

    this.setState({board, hasWon});
  }


  /** Render game board or winning message. */

  render() {

    // if the game is won, just show a winning msg & render nothing else
    // TODO
    // make table board
    // TODO
    let {board} = this.state;

    let cells = board.map((row, y) => (
      <tr key={y}>
        {row.map((cell, x) => (
          <Cell key={`${y}-${x}`} isLit={cell} flipCellsAroundMe={this.flipCellsAround} coord={`${y}-${x}`} />
        ))}
      </tr>
    ));

    return (
      <div>
        <h1>It works!</h1>
        <table>
          <tbody>
            {cells}
          </tbody>
        </table>
      </div>
    );
  }
}


export default Board;
