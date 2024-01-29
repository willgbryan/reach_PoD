import './App.css';
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DroppableArea from './components/droppable_area';
import DraggableIcon from './components/draggable_icons';
import Connection from './components/connection';

function App() {
  const [droppedItems, setDroppedItems] = useState([]);
  const [connections, setConnections] = useState([]);
  const [isConnecting, setIsConnecting] = useState(false);
  const [selectedComponents, setSelectedComponents] = useState([]);
  const standardComponentSize = { width: 20, height: 20 };


  const handleDrop = (iconType, position) => {
    setDroppedItems(prevItems => {
      const newId = `component-${prevItems.length}`; // Generate ID based on the length of the current items
      const newItem = {
        id: newId,
        type: iconType,
        position: position
      };
      return [...prevItems, newItem];
    });
  };

  const handleSelectComponent = (componentId) => {
    setSelectedComponents(prevSelected => {
      // Check if the component is already selected
      if (prevSelected.includes(componentId)) {
        return prevSelected; // Return the existing selection if clicked again
      }
      // Update the selection, allowing only two components to be selected
      return [...prevSelected, componentId].slice(-2); // Keeps the last two selections
    });
  };

  const addConnection = (sourceId, targetId, sourcePos, targetPos) => {
    const newConnection = { sourceId, targetId, sourcePos, targetPos };
    setConnections([...connections, newConnection]);
  };

  const toggleConnectionMode = () => {
    console.log("Toggling connection mode. Current state:", isConnecting);

    if (droppedItems.length < 2) {
      alert('You need at least two components to create a connection.');
      return;
    }
    if (isConnecting && selectedComponents.length === 2) {
      const [sourceId, targetId] = selectedComponents;
      const sourceComponent = droppedItems.find(item => item.id === sourceId);
      const targetComponent = droppedItems.find(item => item.id === targetId);
  
      if (sourceComponent && targetComponent) {
        // Assuming positions are in the format { x, y }
        addConnection(sourceId, targetId, sourceComponent.position, targetComponent.position);
      }
    }
    setIsConnecting(!isConnecting);
    setSelectedComponents([]); // Reset the selection after connection is made
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="icon-container">
        <DraggableIcon type="pdf" />
        <DraggableIcon type="csv" />
        <DraggableIcon type="analytics" />
        <DraggableIcon type="search" />
        <button onClick={toggleConnectionMode} className="connect-button">&gt;</button>
      </div>
      <div className="drag-area">
        <DroppableArea onDrop={handleDrop} items={droppedItems} onSelect={handleSelectComponent} isConnecting={isConnecting} />
      </div>
      {connections.map((conn, index) => (
        <Connection
          key={index}
          sourcePos={conn.sourcePos}
          targetPos={conn.targetPos}
          sourceSize={standardComponentSize}
          targetSize={standardComponentSize}
        />
      ))}
    </DndProvider>
  );
}

export default App;
