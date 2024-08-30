
const Shimmer = () => {
    return (
        <div className="shimmer-container flex flex-wrap justify-center gap-6 p-4">
            {Array.from({ length: 20 }).map((_, index) => (
                <div key={index} className="shimmer-card w-[250px] h-[280px] bg-gray-200 rounded-lg overflow-hidden relative animate-pulse">
                    <div className="bg-gray-300 w-full h-[150px]"></div>
                    <div className="p-4 space-y-2">
                        <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
                        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                        <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
                        <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
                        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;