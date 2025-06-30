/**
 * Medical Form Modal Component
 * Provides consistent modal structure for all medical form interactions
 */

import React from 'react';
// Forms and buttons now use Mantine styling

const MedicalFormModal = ({
  isOpen,
  onClose,
  title,
  children,
  className = '',
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="medical-form-overlay" onClick={handleOverlayClick}>
      <div
        className={`medical-form-modal ${className}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="form-header">
          <h3>{title}</h3>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="medical-form-content">{children}</div>
      </div>
    </div>
  );
};

export default MedicalFormModal;
