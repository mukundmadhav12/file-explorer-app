const fileSystem = {
    name: 'root',
    type: 'folder',
    children: [
        {
            name: 'documents',
            type: 'folder',
            children: [
                { name: 'resume.pdf', type: 'file' },
                { name: 'expenses.xls', type: 'file' }
            ]
        },
        {
            name: 'photos',
            type: 'folder',
            children: [
                { name: 'beach.jpg', type: 'file' },
                { name: 'family.png', type: 'file' }
            ]
        }
    ]
};

export default fileSystem;
