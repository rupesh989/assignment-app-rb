import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const Sidebar = ({ elements }) => {
    return (
        <Droppable droppableId="sidebar">
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="sidebar"
                >
                    {elements.map((element, index) => (
                        <Draggable key={element.id} draggableId={element.id} index={index}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="draggable-element"
                                >
                                    {element.content}
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default Sidebar;
