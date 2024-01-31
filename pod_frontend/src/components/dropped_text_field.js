import React, { useState } from 'react';

const DroppedTextField = ({ id, onSelect, isConnecting }) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
    // any additional logic
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (isConnecting) {
      console.log(`Component ${id} clicked for connecting.`);
      onSelect(id);
    }
  };

  return (
    <div onClick={handleClick} style={{ cursor: isConnecting ? 'pointer' : 'default' }}>
      <input 
        type="text"
        value={text}
        onChange={handleChange}
        style={{ marginLeft: '5px' }}
      />
    </div>
  );
};

export default DroppedTextField;
