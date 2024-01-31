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
    <div onClick={handleClick} style={{ cursor: isConnecting ? 'pointer' : 'default', backgroundColor: 'black', padding: '5px' }}>
      <input 
        type="text"
        value={text}
        onChange={handleChange}
        style={{ color: 'white', backgroundColor: 'black', border: '2px solid #c7fe00', marginLeft: '5px' }}
      />
    </div>
  );
};

export default DroppedTextField;
