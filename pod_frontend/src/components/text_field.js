import React, { useState } from 'react';

const TextField = ({ id, onSelect, isConnecting, onTextChange }) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
    if (onTextChange) {
      onTextChange(id, event.target.value);
    }
  };

  return (
    <input 
      type="text" 
      value={text} 
      onChange={handleChange} 
      style={{ cursor: isConnecting ? 'pointer' : 'default' }}
      onClick={(e) => isConnecting && onSelect(id)}
    />
  );
};

export default TextField;
