import React from 'react';

type SkeletonGridProps = {
  itemCount: number; // Número de itens a serem exibidos no skeleton
};

export default function SkeletonGrid({ itemCount }: SkeletonGridProps) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
      {[...Array(itemCount)].map((_, index) => (
        <div key={index} className="animate-pulse group">
          <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
          <div className="flex items-center bg-gray-100 py-2 px-5 rounded-b-lg">
            <div className="flex flex-col space-y-2 w-full">
              <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
              <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
