const getHighlightedText = (text, query) => {
  if (!query) return text;

  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const matchIndex = lowerText.indexOf(lowerQuery);

  if (matchIndex === -1) return text;

  const before = text.slice(0, matchIndex);
  const match = text.slice(matchIndex, matchIndex + query.length);
  const after = text.slice(matchIndex + query.length);

  return (
    <>
      {before}
      <span style={{ backgroundColor: "yellow", fontWeight: "bold" }}>
        {match}
      </span>
      {after}
    </>
  );
};

export default getHighlightedText;
