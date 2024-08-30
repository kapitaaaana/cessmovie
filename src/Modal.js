import React from 'react';
import './Modal.css';

const Modal = ({ videoId, onClose }) => {
  if (!videoId) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <iframe
          width="800"
          height="450"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
