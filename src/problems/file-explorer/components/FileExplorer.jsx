import { useState } from "react";

const FileExplorer = ({ data, onEditNode, onAddNode, onDeleteNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="file-explorer">
      <div className="file-explorer-item">
        {data.type === 'folder' && <button onClick={handleOpen}>{isOpen ? '-' : '+'}</button>}
        <span>{data.type === 'folder' ? '📁' : '📄'}</span>
        <span>{data.name}</span>
        <button onClick={() => onEditNode(data.id)}>Edit</button>
        <button onClick={() => onDeleteNode(data.id)}>Delete</button>
        {data.type === 'folder' && (
          <>
            <button onClick={() => onAddNode('folder', data.id)}>Folder</button>
            <button onClick={() => onAddNode('file', data.id)}>File</button>
          </>
        )}
      </div>
      {isOpen && data.children && data.children?.map((node) =>
        <FileExplorer key={node.id} data={node} onEditNode={onEditNode} onAddNode={onAddNode} onDeleteNode={onDeleteNode} />)}
    </div>
  );
};

export default FileExplorer;
