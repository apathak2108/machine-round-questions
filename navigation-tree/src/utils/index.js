// function to check title match and nested levels match
export const doesAnyChildMatch = (node, searchQuery) => {
  if (!node || typeof node !== "object") return false;

  const titleMatch = node?.title
    ?.toLowerCase()
    ?.includes(searchQuery?.toLowerCase());

  const nestedLevels = Object.keys(node).filter((key) =>
    key.startsWith("level_")
  );

  return (
    titleMatch ||
    nestedLevels.some((levelKey) =>
      node[levelKey]?.some((child) => doesAnyChildMatch(child, searchQuery))
    )
  );
};

// function to delete node by id
export const deleteNodeById = (nodes, idToDelete) => {
  if (!Array.isArray(nodes)) return [];

  return nodes
    .map((node) => {
      const newNode = { ...node };
      const childLevels = Object.keys(newNode)?.filter((key) =>
        key.startsWith("level_")
      );

      childLevels?.forEach((level) => {
        newNode[level] = deleteNodeById(newNode[level], idToDelete);
      });

      return newNode;
    })
    .filter((node) => node.id !== idToDelete);
};
