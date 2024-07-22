import React, { useState } from 'react';
import FileIcon from './FileIcon';

const TreeNode = ({ node, onFolderClick, setSelectedItem }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleFolderClick = () => {
        setIsOpen(!isOpen);
        onFolderClick(node);
    };

    const handleItemClick = () => {
        setSelectedItem(node);
    };

    return (
        <ul>
            <li>
                <span
                    onClick={node.type === 'folder' ? handleFolderClick : handleItemClick}
                    style={{ cursor: 'pointer' }}
                >
                    {node.type === 'folder' && (isOpen ? '[-] ' : '[+] ')}
                    <FileIcon type={node.type} />
                    {node.name}
                </span>
                {isOpen && node.type === 'folder' && (
                    <ul>
                        {node.children.map((child, index) => (
                            <TreeNode key={index} node={child} onFolderClick={onFolderClick} setSelectedItem={setSelectedItem} />
                        ))}
                    </ul>
                )}
            </li>
        </ul>
    );
};

export default TreeNode;
