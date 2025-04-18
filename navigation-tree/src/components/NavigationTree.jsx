import { useMemo, useState } from "react";
import DeleteIcon from "./DeleteIcon";
import { doesAnyChildMatch } from "../utils";
import getHighlightedText from "./HighlightText";

const NavigationTree = ({
  data,
  currentLevel = "level_1",
  searchQuery,
  onDelete,
}) => {
  const [isExpand, setIsExpand] = useState(false);

  const nextLevel = Object.keys(data)?.filter((key) =>
    key.startsWith("level_")
  )?.[0];

  const handleCategoryExpand = () => {
    setIsExpand(!isExpand);
  };

  const shouldRender = useMemo(() => {
    return (
      data?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      doesAnyChildMatch(data, searchQuery) ||
      searchQuery === ""
    );
  }, [data, searchQuery]);

  const isSearching = !!searchQuery;

  const shouldExpand = isExpand || isSearching;

  if (!shouldRender) return null;

  return (
    <div className="category-container">
      <div className="category-row">
        {data?.[nextLevel] && data?.[nextLevel]?.length > 0 && (
          <button onClick={handleCategoryExpand}>{isExpand ? "-" : "+"}</button>
        )}{" "}
        {data?.category_icon ? (
          <img src={data?.category_icon} alt="category icon" height={24} />
        ) : (
          <span>❓</span>
        )}
        {currentLevel === "level_3" ? (
          <a
            href={`https://www.meesho.com/${data?.page?.slug}/pl/${data?.page?.page_id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {getHighlightedText(data.title, searchQuery)}
          </a>
        ) : (
          getHighlightedText(data.title, searchQuery)
        )}
        <DeleteIcon id={data.id} onClick={onDelete} />
      </div>
      {shouldExpand && nextLevel && data?.[nextLevel] && (
        <div style={{ marginLeft: "20px" }}>
          {data[nextLevel]?.map((subCategory) => (
            <NavigationTree
              key={subCategory.id}
              data={subCategory}
              currentLevel={nextLevel}
              searchQuery={searchQuery}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NavigationTree;
