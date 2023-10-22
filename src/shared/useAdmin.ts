import { useEffect, useState } from 'react';

export const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window) return;
    const hansinAdmin = localStorage.getItem('hansinAdmin');

    setIsClient(true);
    setIsAdmin(hansinAdmin === 'true');
  }, []);

  const logout = () => {
    localStorage.removeItem('hansinAdmin');
    setIsAdmin(false);
  };

  return {
    isAdmin,
    isClient,
    logout,
  };
};
