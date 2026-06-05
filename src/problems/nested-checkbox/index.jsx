import { useState } from "react";
import Checkboxes from "./components/Checkboxes";
import { checkboxData } from "./constants";

const NestedCheckbox = () => {
  const [checkboxTree, setCheckboxTree] = useState(checkboxData);

  const updateChildren = (node, checked) => {
    return {
      ...node,
      checked,
      indeterminate: false,
      children: node?.children?.map((child) => updateChildren(child, checked)),
    }
  };

  const changeCheckboxValue = (tree, targetId, isChecked) => {
    return tree?.map((node) => {
      if (node.id === targetId) {
        return updateChildren(node, !isChecked);
      }
      if (node?.children?.length > 0) {
        const updatedChildren = changeCheckboxValue(node.children, targetId, isChecked);

        const allChecked = updatedChildren.every((child) => child.checked);

        const someChecked = updatedChildren.some((child) => child.indeterminate || child.checked);

        return {
          ...node,
          checked: allChecked,
          indeterminate: !allChecked && someChecked,
          children: updatedChildren,
        }
      }
      return node;
    })
  }

  const handleCheckboxChange = (checkboxId, isChecked) => {
    setCheckboxTree((prev) => changeCheckboxValue(prev, checkboxId, isChecked));
  }

  return (
    <div>
      {checkboxTree?.map((checkbox, index) =>
        <Checkboxes key={index} checkbox={checkbox} onCheckedChange={handleCheckboxChange} />
      )}
    </div>
  )
};

export default NestedCheckbox;