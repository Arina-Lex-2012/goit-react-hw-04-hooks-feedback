import React from "react";
import PropTypes from "prop-types";
// import css from "./Notification.module.css";

const Notification = ({ message }) => (
  <div>
    <span>{message}</span>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
