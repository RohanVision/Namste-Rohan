import React from 'react'

const RestaurantMenuShimmer = () => {
    return (
        <div className="space-y-4 pt-10">
            {Array(8).fill("").map((_, index) => (
                <div key={index} className="flex justify-center items-center cursor-pointer px-4">
                    {/* Shimmer for the title */}
                    <div className="w-1/3 h-6 bg-gray-300 rounded-md shimmer"></div>

                    {/* Shimmer for the dropdown arrow */}
                    <div className="w-6 h-6 bg-gray-300 rounded-full shimmer ml-4"></div>
                </div>
            ))}
        </div>
    );
};

export default RestaurantMenuShimmer
