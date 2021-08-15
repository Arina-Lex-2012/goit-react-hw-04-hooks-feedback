import React from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage = 0 }) => {
  return (
    <div>
      <p className={css.p}>Statistics: </p>
      <span>Good: {good}</span> <br></br>
      <span>Neutral: {neutral}</span> <br></br>
      <span>Bad: {bad}</span> <br></br>
      <span>Total: {total}</span> <br></br>
      <span>Positive feedback: {positivePercentage} % </span>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
