import React from "react";
import PropTypes from "prop-types";
import css from "./Section.module.css";

const Section = ({ text, children }) => (
  <div className={css.container}>
    {text && <span className={css.text}>{text}</span>}
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
