import React from 'react';
import './Modal.css';

export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="sample-modal__backdrop" onClick={onClose}>
      <div className="sample-modal" onClick={(e) => e.stopPropagation()}>
        <header className="sample-modal__header">
          <h3 className="sample-modal__title">{title}</h3>
          <button className="sample-modal__close" onClick={onClose} aria-label="Close">×</button>
        </header>
        <div className="sample-modal__body">{children}</div>
      </div>
    </div>
  );
}
