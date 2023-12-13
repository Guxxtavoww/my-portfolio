import React from 'react';

export default function SectionHeading({
  children,
  isLoading,
}: WithChildren<{ isLoading?: boolean }>) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {isLoading ? (
        <div className="flex items-center justify-center w-full animate-pulse">
          <div className="w-1/2 rounded-lg bg-gray-400 h-12" />
        </div>
      ) : (
        children
      )}
    </h2>
  );
}
