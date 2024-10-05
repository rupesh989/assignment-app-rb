import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Element from './Element';

const Canvas = ({ canvasElements, handleElementClick }) => {
    return (
        <Droppable droppableId="canvas">
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="canvas"
                >
                    <h2>Canvas Area</h2>
                    {canvasElements.map((element, index) => (
                        <Element 
                            key={element.id} 
                            element={element} 
                            index={index} 
                            handleElementClick={handleElementClick}
                        />
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default Canvas;
