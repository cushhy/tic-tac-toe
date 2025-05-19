import styles from "./Information.module.css";
import PropTypes from "prop-types";

export const InformationLayout = ({ status }) => {
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
