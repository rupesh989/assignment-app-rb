import React, { useState } from 'react';

const PropertyPanel = ({ selectedElement, updateElement }) => {
    const [content, setContent] = useState(selectedElement.content);

    const handleUpdate = () => {
        updateElement(selectedElement.id, content);
    };

    return (
        <div className="property-panel">
            <h3>Properties</h3>
            <div>
                <label>Content:</label>
                <input 
                    type="text" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                />
                <button onClick={handleUpdate}>Update</button>
            </div>
        </div>
    );
};

export default PropertyPanel;
