import styles from "./Information.module.css";
import PropTypes from "prop-types";

export const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
  let status;
  if (isDraw) {
    status = "Ничья";
  } else if (!isDraw && isGameEnded) {
    status = `Победа: ${currentPlayer}`;
  } else {
    status = `Ходит: ${currentPlayer}`;
  }
  return (
    <>
      <h1>Крестики-нолики</h1>
      <div className={styles.information}>{status}</div>
    </>
  );
};

InformationLayout.propTypes = {
  isDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool,
  currentPlayer: PropTypes.string,
};
