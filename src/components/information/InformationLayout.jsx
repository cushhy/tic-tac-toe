import styles from "./Information.module.css";

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
