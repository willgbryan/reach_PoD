import { useDrag } from 'react-dnd';
import React from 'react';
import Pdf from './pdfs';
import Analytics from './analytics';
import Csv from './flat_files';
import Search from './search';
import TextField from './text_field';


const shapeComponents = {
    pdf: Pdf,
    analytics: Analytics,
    csv: Csv,
    search: Search,
    text_field: TextField,
};

const DraggableIcon = ({ type }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'icon',
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const ShapeComponent = shapeComponents[type];
  return (
    <div ref={dragRef} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <ShapeComponent />
    </div>
  );
};

export default DraggableIcon;
