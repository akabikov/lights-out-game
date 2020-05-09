import React from "react";
import Cell from "./Cell";
import './Board.css';


class Board extends React.Component {

  genCells() {
    const {board, flipCellsAround} = this.props;

    return board.map((row, y) => (
        row.map((cell, x) => {
          const coord=`${y}-${x}`;
          return (
            <Cell 
              key={coord} 
              isLit={cell} 
              flipCellsAroundMe={flipCellsAround} 
              coord={coord} 
            />)
        })
    ));
  }


  render() {
    return (
      <div className="board">
        {this.genCells()}
      </div>
    );
  }
}


export default Board;