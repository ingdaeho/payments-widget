import { useState, useEffect } from 'react';

export const useQueryParams = () => {
  const [params, setParams] = useState(new URLSearchParams(location.search));

  const setQueryParams = (newParams: { [key: string]: string } | null) => {
    const searchParams = new URLSearchParams();

    if (newParams === null) {
      const url = new URL(location.href);
      const newUrl = `${url.origin}${url.pathname}`;
      window.history.pushState({}, '', newUrl);
      return;
    }

    for (const key in newParams) {
      if (
        Object.prototype.hasOwnProperty.call(newParams, key) &&
        newParams[key]
      ) {
        searchParams.set(key, newParams[key]);
      }
    }

    history.pushState({}, '', '?' + searchParams.toString());
    setParams(searchParams);
  };

  useEffect(() => {
    const handlePopState = () => {
      const newParams = new URLSearchParams(location.search);
      setParams(newParams);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return { params, setQueryParams };
};
