import { InformationLayout } from "./InformationLayout";
import PropTypes from "prop-types";

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
  let status;
  if (isDraw) {
    status = "Ничья";
  } else if (!isDraw && isGameEnded) {
    status = `Победа: ${currentPlayer}`;
  } else {
    status = `Ходит: ${currentPlayer}`;
  }
  return <InformationLayout status={status} />;
};

Information.propTypes = {
  isDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool,
  currentPlayer: PropTypes.string,
};
