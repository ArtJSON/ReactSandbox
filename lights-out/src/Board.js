import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

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

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard(),
    };

    // TODO: set initial state
  }

  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.5,
  };

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    for (let i = 0; i < this.props.nrows; i++) {
      let row = [];
      for (let j = 0; j < this.props.ncols; j++) {
        row.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }

    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [x, y] = coord.split("-").map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it
    flipCell(x, y);
    flipCell(x + 1, y);
    flipCell(x, y + 1);
    flipCell(x - 1, y);
    flipCell(x, y - 1);

    // win when every cell is turned off
    // TODO: determine is the game has been won

    function hasWon() {
      for (let row of board) {
        for (let cell of row) {
          if (cell === true) {
            return false;
          }
        }
      }
      return true;
    }

    console.log();

    this.setState({ board: board, hasWon: hasWon() });
  }

  /** Render game board or winning message. */

  render() {
    return !this.state.hasWon ? (
      <table className="Board">
        <tbody>
          {this.state.board.map((r, indexrow) => {
            return (
              <tr key={indexrow}>
                {r.map((c, indexcell) => {
                  return (
                    <Cell
                      key={indexrow + "-" + indexcell}
                      isLit={c}
                      flipCellsAroundMe={() =>
                        this.flipCellsAround(indexrow + "-" + indexcell)
                      }
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    ) : (
      <div>
        <h1>You've won! </h1>
      </div>
    );

    // if the game is won, just show a winning msg & render nothing else

    // TODO

    // make table board

    // TODO
  }
}

export default Board;
