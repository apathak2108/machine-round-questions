import TreeData from "./data/navTree.json";
import "./App.css";
import NavigationTree from "./components/NavigationTree";
import { useState } from "react";
import { deleteNodeById } from "./utils";

const App = () => {
  const [treeData, setTreeData] = useState(TreeData?.payload?.level_1 || []);
  const [searchQuery, setSearchQuery] = useState("");

  const onDelete = (idToDelete) => {
    const updatedTree = deleteNodeById(treeData, idToDelete);
    setTreeData(updatedTree);
  };

  return (
    <div className="App">
      <h2>Navigation Tree</h2>
      <input
        placeholder="Search Category"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {treeData?.map((category) => (
        <NavigationTree
          key={category.id}
          data={category}
          searchQuery={searchQuery}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default App;
