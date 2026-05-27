import { useState } from 'react';
import './App.css'
import { explorerData } from './constants';
import FileExplorer from './components/FileExplorer';

function App() {
  const [data, setData] = useState(explorerData);

  const editNode = (tree, id, newName) => {
    if (tree.id === id) {
      return {
        ...tree,
        name: newName,
      };
    }
    if (tree.children) {
      return {
        ...tree,
        children: tree.children.map((child) => editNode(child, id, newName))
      };
    }
    return tree;
  };

  const addNode = (tree, parentId, newNode) => {
    if (tree.id === parentId) {
      return {
        ...tree,
        children: [...tree.children, newNode]
      }
    }
    if (tree.children) {
      return {
        ...tree,
        children: tree.children.map((child) => addNode(child, parentId, newNode))
      }
    }
    return tree;
  }

  const deleteNode = (tree, id) => {
    if (tree.id === id) {
      return null;
    }
    if (tree.children) {
      return {
        ...tree,
        children: tree.children.filter((node) => node.id !== id).map((child) => deleteNode(child, id))
      }
    }
    return tree;
  }

  const handleEdit = (id) => {
    const newName = prompt('Enter new name');
    if (!newName) return;

    setData((prev) => editNode(prev, id, newName));
  };

  const handleAddNode = (type, parentId) => {
    const newName = prompt('Enter node name');
    if (!newName) return;

    const newNode = {
      id: Date.now(),
      name: newName,
      type,
      ...(type === 'folder' ? { children: [] } : {})
    }

    setData((prev) => addNode(prev, parentId, newNode));
  }

  const handleDeleteNode = (id) => {
    setData((prev) => deleteNode(prev, id));
  }

  return (
    <>
      <h2>File Explorer</h2>
      <FileExplorer data={data} onEditNode={handleEdit} onAddNode={handleAddNode} onDeleteNode={handleDeleteNode} />
    </>
  );
}

export default App;
