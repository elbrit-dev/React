import React from 'react';
import './IconButton.css';

export default function IconButton({ icon, label, onClick, size = 'medium' }) {
  return (
    <button className={`sample-icon-button sample-icon-button--${size}`} onClick={onClick}>
      {icon && <span className="sample-icon-button__icon">{icon}</span>}
      {label && <span className="sample-icon-button__label">{label}</span>}
    </button>
  );
}
