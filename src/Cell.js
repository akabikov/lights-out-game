import React, {Component} from 'react'
import "./Cell.css"

class Cell extends Component {

  handleClick = evt => {
    this.props.flipCellsAroundMe(this.props.coord);
  }

  render() {
    let classes = "Cell";

    if (this.props.isLit) {
      classes += " Cell-lit";
    }

    return (
        <div className={classes} onClick={this.handleClick} />
    )
  }
}


export default Cell