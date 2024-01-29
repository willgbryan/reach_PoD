import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const DroppedPdf = ({ id, onSelect, isConnecting }) => {
    const handleClick = () => {
      if (isConnecting) {
        console.log(`Component ${id} clicked for connecting.`);
        onSelect(id);
      }
    };
  
    return (
      <div onClick={handleClick} style={{ cursor: isConnecting ? 'pointer' : 'default' }}>
        <FontAwesomeIcon icon={faFilePdf} size="2x" color="white"/>
      </div>
    );
  };
  
  export default DroppedPdf;
  