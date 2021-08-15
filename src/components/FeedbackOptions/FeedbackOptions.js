import React from "react";
import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";

const FeedbackOptions = ({
  goodHandleIncrement,
  neutralHandleIncrement,
  badHandleIncrement,
}) => (
  <div className={css.container}>
    <button className={css.button} type="button" onClick={goodHandleIncrement}>
      Good
    </button>

    <button
      className={css.button}
      type="button"
      onClick={neutralHandleIncrement}
    >
      Neutral
    </button>

    <button className={css.button} type="button" onClick={badHandleIncrement}>
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  goodHandleIncrement: PropTypes.func.isRequired,
  neutralHandleIncrement: PropTypes.func.isRequired,
  badHandleIncrement: PropTypes.func.isRequired,
};

export default FeedbackOptions;
