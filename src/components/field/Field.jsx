// components/field/Field.jsx
import { FieldLayout } from "./FieldLayout";
import PropTypes from "prop-types";

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const Field = ({
  field,
  isGameEnded,
  currentPlayer,
  setField,
  setCurrentPlayer,
  setIsGameEnded,
  setIsDraw,
}) => {
  const checkWinner = (field) => {
    for (const [i1, i2, i3] of WIN_PATTERNS) {
      if (
        field[i1] !== "" &&
        field[i1] === field[i2] &&
        field[i2] === field[i3]
      ) {
        return field[i1];
      }
    }
    return null;
  };

  const handleCellClick = (index) => {
    if (field[index] !== "" || isGameEnded) return;

    const newField = [...field];
    newField[index] = currentPlayer;
    setField(newField);

    const winner = checkWinner(newField);

    if (winner) {
      setIsGameEnded(true);
    } else if (!newField.includes("")) {
      setIsDraw(true);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};

Field.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  isDraw: PropTypes.bool.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  currentPlayer: PropTypes.string.isRequired,
  setField: PropTypes.func.isRequired,
  setCurrentPlayer: PropTypes.func.isRequired,
  setIsDraw: PropTypes.func.isRequired,
  setIsGameEnded: PropTypes.func.isRequired,
};
