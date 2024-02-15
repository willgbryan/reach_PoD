import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable } from '@fortawesome/free-solid-svg-icons';

const DroppedCsv = ({ id, onSelect, isConnecting }) => {
    const handleClick = () => {
      if (isConnecting) {
        console.log(`Component ${id} clicked for connecting.`);
        onSelect(id);
      }
    };
  
    return (
      <div onClick={handleClick} style={{ cursor: isConnecting ? 'pointer' : 'default' }}>
        <FontAwesomeIcon icon={faTable} size="2x" color="white" />
      </div>
    );
  };
  
  export default DroppedCsv;