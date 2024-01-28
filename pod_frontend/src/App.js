import './App.css';
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DroppableArea from './components/droppable_area';
import DraggableIcon from './components/draggable_icons';


function App() {
  const [droppedItems, setDroppedItems] = useState([]);

    const handleDrop = (iconType, position) => {
        setDroppedItems((prevItems) => [
            ...prevItems,
            { type: iconType, position: position }
        ]);
    };
  return (
    <DndProvider backend={HTML5Backend}>
        <div className="icon-container">
          <DraggableIcon type="pdf" />
          <DraggableIcon type="csv" />
          <DraggableIcon type="analytics" />
          <DraggableIcon type="search" />
        </div>
        <div className="drag-area">
          {/* This is where users can drag icons */}
        </div>
        <DroppableArea onDrop={handleDrop} items={droppedItems} />
    </DndProvider>
  );
}

export default App;
