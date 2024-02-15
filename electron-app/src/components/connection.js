import React from 'react';

const calculateLinePoints = (sourcePos, targetPos, sourceSize, targetSize) => {
    let x1, y1, x2, y2;
  
    if (sourcePos.x < targetPos.x) {
      x1 = sourcePos.x + sourceSize.width;
      x2 = targetPos.x;
    } else {
      x1 = sourcePos.x;
      x2 = targetPos.x + targetSize.width;
    }
  
    y1 = sourcePos.y + sourceSize.height / 2;
    y2 = targetPos.y + targetSize.height / 2;
  
    return { x1, y1, x2, y2 };
  };
  

const Connection = ({ sourcePos, targetPos, sourceSize, targetSize }) => {
  console.log("Drawing connection from:", sourcePos, "to:", targetPos);
  const { x1, y1, x2, y2 } = calculateLinePoints(sourcePos, targetPos, sourceSize, targetSize);
  const markerId = `arrowhead`;

  return (
    <svg style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      <defs>
        <marker
          id={markerId}
          markerWidth="10"
          markerHeight="7"
          refX="0"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#c7fe00" />
        </marker>
      </defs>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#c7fe00"
        strokeWidth="2"
        markerEnd={`url(#${markerId})`}
      />
    </svg>
  );
};

export default Connection;
