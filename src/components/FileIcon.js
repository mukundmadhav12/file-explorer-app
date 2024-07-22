import React from 'react';

const FileIcon = ({ type }) => {
    return (
        <span>
            {type === 'folder' ? '📁' : '📄'}
        </span>
    );
};

export default FileIcon;
