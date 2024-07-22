import React, { useState } from 'react';

const FileOperation = ({ onCreate, onRename, onDelete }) => {
    const [name, setName] = useState('');

    const handleCreate = () => {
        if (!name.trim()) {
            alert('Name cannot be empty');
            return;
        }
        onCreate(name);
        setName('');
    };

    const handleRename = () => {
        if (!name.trim()) {
            alert('Name cannot be empty');
            return;
        }
        onRename(name);
        setName('');
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            onDelete();
        }
    };

    return (
        <div className="file-operation">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
            />
            <button onClick={handleCreate}>Create</button>
            <button onClick={handleRename}>Rename</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default FileOperation;
