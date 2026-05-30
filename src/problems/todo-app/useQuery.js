import { useEffect, useState } from "react";

const cache = {};

const useQuery = (key, queyFn) => {
  const [isLoading, setIsLoading] = useState(!cache[key]);
  const [data, setData] = useState(cache?.[key] || null);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setIsLoading(true);
    setError('');
    try {
      const response = await queyFn();
      cache[key] = response;
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (cache?.[key]) return;
    fetchData();
  }, [key])

  return {
    data,
    error,
    isLoading,
    refetch: fetchData
  }
};

export default useQuery;