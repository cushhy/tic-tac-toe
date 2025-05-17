import styles from "./Field.module.css";
import PropTypes from "prop-types";

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Варианты побед по горизонтали
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Варианты побед по вертикали
  [0, 4, 8],
  [2, 4, 6], // Варианты побед по диагонали
];

export const FieldLayout = ({
  field,
  isDraw,
  isGameEnded,
  currentPlayer,
  setField,
  setCurrentPlayer,
  setIsDraw,
  setIsGameEnded,
}) => {
  const checkWinner = (field) => {
    for (const pattern of WIN_PATTERNS) {
      const [i1, i2, i3] = pattern;

      if (
        field[i1] !== "" &&
        field[i1] === field[i2] &&
        field[i2] === field[i3]
      ) {
        return field[i1];
      }
    }
  };

  const setSymbolInCell = (cell, index) => {
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

  return (
    <div className={styles.field}>
      {field.map((cell, index) => (
        <div
          onClick={() => setSymbolInCell(cell, index)}
          key={index}
          className={styles.fieldCell}
        >
          {cell}
        </div>
      ))}
    </div>
  );
};

FieldLayout.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string),
  isDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool,
  currentPlayer: PropTypes.string,
  setField: PropTypes.func,
  setCurrentPlayer: PropTypes.func,
  setIsDraw: PropTypes.func,
  setIsGameEnded: PropTypes.func,
};
