import { Information } from "./components/information/Information";
import { Field } from "./components/field/Field";
import PropTypes from "prop-types";

export const AppLayout = ({
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
    <>
      <Information
        isDraw={isDraw}
        isGameEnded={isGameEnded}
        currentPlayer={currentPlayer}
      />
      <Field
        setIsGameEnded={setIsGameEnded}
        setIsDraw={setIsDraw}
        field={field}
        isDraw={isDraw}
        isGameEnded={isGameEnded}
        currentPlayer={currentPlayer}
        setField={setField}
        setCurrentPlayer={setCurrentPlayer}
      />
      <button
        onClick={() => {
          setCurrentPlayer("X");
          setIsDraw(false);
          setIsGameEnded(false);
          const newField = ["", "", "", "", "", "", "", "", ""];
          setField(newField);
        }}
        style={{ marginTop: 30 }}
      >
        Начать заново
      </button>
    </>
  );
};

AppLayout.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string),
  isDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool,
  currentPlayer: PropTypes.string,
  setField: PropTypes.func,
  setCurrentPlayer: PropTypes.func,
  setIsDraw: PropTypes.func,
  setIsGameEnded: PropTypes.func,
};
