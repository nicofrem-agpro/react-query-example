import { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const fetching = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setError(undefined);
    } catch (error) {
      setError(error.toString());
    }

    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    fetching();
  }, [fetching]);

  return {
    data,
    isLoading,
    error,
    refetch: fetching,
  };
};

export default useFetch;
