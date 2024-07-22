import React from 'react';

const FileManager = ({ currentFolder }) => {
    if (!currentFolder) {
        return <div>No folder selected</div>;
    }

    const { name, children } = currentFolder;

    return (
        <div className="file-manager">
            <h2>Files in {name}</h2>
            <ul>
                {children && Array.isArray(children) ? (
                    children.map((file, index) => (
                        <li key={index}>
                            <span>{file.name}</span>
                        </li>
                    ))
                ) : (
                    <li>No files found</li>
                )}
            </ul>
        </div>
    );
};

export default FileManager;
