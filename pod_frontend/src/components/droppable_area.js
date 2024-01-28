import React from 'react';
import { useDrop } from 'react-dnd';
import DroppedPdf from './dropped_pdfs';
import DroppedAnalytics from './dropped_analytics';
import DroppedCsv from './dropped_csv';
import DroppedSearch from './dropped_search';

const renderShape = (type) => {
    switch (type) {
      case 'pdf': return <DroppedPdf />;
      case 'analytics': return <DroppedAnalytics />;
      case 'csv': return <DroppedCsv />;
      case 'search': return <DroppedSearch />;
      default: return null;
    }
};

const DroppableArea = ({ onDrop, items }) => {
    const [, dropRef] = useDrop(() => ({
        accept: 'icon',
        drop: (item, monitor) => {
            const offset = monitor.getClientOffset();
            onDrop(item.type, offset);
        },
    }));

    return (
        <div ref={dropRef} className="drag-area full-page">
            {items.map((item, index) => {
                const style = {
                    left: item.position.x + 'px',
                    top: item.position.y + 'px',
                    position: 'absolute',
                };

                return (
                    <div key={index} style={style}>
                        {renderShape(item.type)}
                    </div>
                );
            })}
        </div>
    );
};

export default DroppableArea;