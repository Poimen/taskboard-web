import React from 'react';

type User = {
  id: number
  name: string;
}

type Store = {
  currentUser: User;
}

export const store = React.createContext<Partial<Store>>({});
