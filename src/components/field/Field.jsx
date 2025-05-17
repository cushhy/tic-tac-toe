import { FieldLayout } from "./FieldLayout";
import PropTypes from "prop-types";

export const Field = ({
  field,
  isDraw,
  isGameEnded,
  currentPlayer,
  setField,
  setCurrentPlayer,
  setIsDraw,
  setIsGameEnded,
}) => {
  return (
    <FieldLayout
      field={field}
      isDraw={isDraw}
      isGameEnded={isGameEnded}
      currentPlayer={currentPlayer}
      setField={setField}
      setCurrentPlayer={setCurrentPlayer}
      setIsGameEnded={setIsGameEnded}
      setIsDraw={setIsDraw}
    />
  );
};

Field.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string),
  isDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool,
  currentPlayer: PropTypes.string,
  setField: PropTypes.func,
  setCurrentPlayer: PropTypes.func,
  setIsDraw: PropTypes.func,
  setIsGameEnded: PropTypes.func,
};
