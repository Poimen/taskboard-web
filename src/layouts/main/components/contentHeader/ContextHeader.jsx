import React from 'react';

export function ContextHeader({ children }) {
  return (
    <div className="mx-4">
      <div className="pt-3 pb-2 flex flex-row flex-auto mx-auto justify-between bg-white- border-b-2- border-gray-300">
        {children}
      </div>
    </div>
  );
}
