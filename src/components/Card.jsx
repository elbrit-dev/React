import React from 'react';
import './Card.css';

export default function Card({ title, children }) {
  return (
    <div className="sample-card">
      {title && <h3 className="sample-card__title">{title}</h3>}
      <div className="sample-card__body">{children}</div>
    </div>
  );
}
