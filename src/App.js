import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Canvas from './components/Canvas';
import Sidebar from './components/Sidebar';
import PropertyPanel from './components/PropertyPanel';
import './styles.css';

const initialElements = [
  { id: 'text', content: 'Text' },
  { id: 'image', content: 'Image' },
  { id: 'button', content: 'Button' },
];

const App = () => {
  const [canvasElements, setCanvasElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    if (result.source.droppableId === "sidebar" && result.destination.droppableId === "canvas") {
      const newElement = { id: result.draggableId, content: result.draggableId };
      setCanvasElements((prev) => [...prev, newElement]);
    } else {
      const newElements = Array.from(canvasElements);
      const [removed] = newElements.splice(result.source.index, 1);
      newElements.splice(result.destination.index, 0, removed);
      setCanvasElements(newElements);
    }
  };

  const updateElement = (id, newContent) => {
    setCanvasElements((prevElements) =>
      prevElements.map((elem) => (elem.id === id ? { ...elem, content: newContent } : elem))
    );
  };

  const handleElementClick = (id) => {
    const selected = canvasElements.find((element) => element.id === id);
    setSelectedElement(selected);
  };

  return (
    <div className="app">
      <DragDropContext onDragEnd={onDragEnd}>
        <Sidebar elements={initialElements} />
        <Canvas 
          canvasElements={canvasElements} 
          handleElementClick={handleElementClick} 
        />
      </DragDropContext>
      {selectedElement && (
        <PropertyPanel 
          selectedElement={selectedElement} 
          updateElement={updateElement} 
        />
      )}
    </div>
  );
};

export default App;
