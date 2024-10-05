import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Element = ({ element, index, handleElementClick }) => {
    return (
        <Draggable draggableId={element.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="draggable-element"
                    onClick={() => handleElementClick(element.id)}
                >
                    {element.content}
                </div>
            )}
        </Draggable>
    );
};

export default Element;
