import { useState } from 'react';

export function useAuthService() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return [
    isAuthenticated
  ];
}
