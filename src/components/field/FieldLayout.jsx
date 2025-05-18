// components/field/FieldLayout.jsx
import styles from "./Field.module.css";
import PropTypes from "prop-types";

export const FieldLayout = ({ field, handleCellClick }) => {
  return (
    <div className={styles.field}>
      {field.map((cell, index) => (
        <div
          key={index}
          className={styles.fieldCell}
          onClick={() => handleCellClick(index)}
        >
          {cell}
        </div>
      ))}
    </div>
  );
};

FieldLayout.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCellClick: PropTypes.func.isRequired,
};
