import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debonucedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debonucedValue;
};

export default useDebounce;
