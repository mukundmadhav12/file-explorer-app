import React, { useState } from 'react';
import TreeNode from './TreeNode';
import FileManager from './FileManager';
import FileOperation from './FileOperation';
import fileSystem from '../data/fileSystem';

const FileExplorer = () => {
    const [fileSystemData, setFileSystemData] = useState(fileSystem);
    const [currentFolder, setCurrentFolder] = useState(fileSystem);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleFolderClick = (folder) => {
        setCurrentFolder(folder);
        setSelectedItem(null);
    };

    const findParent = (node, id) => {
        if (node.children) {
            for (const child of node.children) {
                if (child.id === id) return node;
                const result = findParent(child, id);
                if (result) return result;
            }
        }
        return null;
    };

    const updateFileSystem = (newFileSystem) => {
        setFileSystemData(newFileSystem);
        if (currentFolder.id) {
            const parent = findParent(newFileSystem, currentFolder.id);
            setCurrentFolder(parent ? parent.children.find(child => child.id === currentFolder.id) : newFileSystem);
        }
    };

    const handleCreate = (name) => {
        if (!currentFolder.children) {
            currentFolder.children = [];
        }
        const newFile = { name, type: 'file', id: Date.now() };
        currentFolder.children.push(newFile);
        updateFileSystem({ ...fileSystemData });
    };

    const handleRename = (newName) => {
        if (selectedItem) {
            selectedItem.name = newName;
            updateFileSystem({ ...fileSystemData });
        }
    };

    const handleDelete = () => {
        if (selectedItem) {
            const parent = findParent(fileSystemData, selectedItem.id);
            if (parent) {
                parent.children = parent.children.filter(child => child.id !== selectedItem.id);
                updateFileSystem({ ...fileSystemData });
                setSelectedItem(null);
            }
        }
    };

    return (
        <div className="file-explorer">
            <div className="tree">
                <TreeNode node={fileSystemData} onFolderClick={handleFolderClick} setSelectedItem={setSelectedItem} />
            </div>
            <div className="content">
                <FileManager currentFolder={currentFolder} />
                <FileOperation onCreate={handleCreate} onRename={handleRename} onDelete={handleDelete} />
            </div>
        </div>
    );
};

export default FileExplorer;
