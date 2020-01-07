import { useState } from 'react';

function useAuthService() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return [
    isAuthenticated
  ];
}

export default useAuthService;
