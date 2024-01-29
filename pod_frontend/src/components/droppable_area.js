import React from 'react';
import { useDrop } from 'react-dnd';
import DroppedPdf from './dropped_pdfs';
import DroppedAnalytics from './dropped_analytics';
import DroppedCsv from './dropped_csv';
import DroppedSearch from './dropped_search';

const renderShape = (type, props) => {
    switch (type) {
      case 'pdf': return DroppedPdf;
      case 'analytics': return DroppedAnalytics;
      case 'csv': return DroppedCsv;
      case 'search': return DroppedSearch;
      default: return null;
    }
};


const DroppableArea = ({ onDrop, items, onSelect, isConnecting }) => {
    const [, dropRef] = useDrop(() => ({
        accept: 'icon',
        drop: (item, monitor) => {
            const offset = monitor.getClientOffset();
            onDrop(item.type, offset);
        },
    }));

    return (
        <div ref={dropRef} className="drag-area full-page">
            {items.map((item) => {
                console.log("Rendering item:", item);

                const Component = renderShape(item.type);
                if (!Component) return null;

                const style = {
                    left: item.position.x + 'px',
                    top: item.position.y + 'px',
                    position: 'absolute',
                };

                return (
                    <div key={item.id} style={style}> {/* Use item.id as key */}
                    <Component id={item.id} onSelect={onSelect} isConnecting={isConnecting} />
                    </div>
                );
            })}
        </div>
    );
};

export default DroppableArea;