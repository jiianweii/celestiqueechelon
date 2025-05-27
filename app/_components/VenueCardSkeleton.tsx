export default function VenueCardSkeleton() {
  return (
    <div className="flex items-center w-full h-[500px] gap-8 animate-pulse">
      <div className="w-[600px] h-[80%] relative bg-gray-300 rounded"></div>
      <div className="flex w-full flex-col justify-around h-[80%]">
        <div className="bg-gray-300 h-12 w-full rounded"></div>
        <div className="bg-gray-300 h-8 w-full rounded mt-2"></div>
        <div className="flex gap-12 w-full">
          <div className="flex flex-col w-full">
            <div className="bg-gray-300 h-8 w-[100px] rounded"></div>
            <div className="flex flex-wrap gap-x-3.5 gap-y-1.5 mt-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-300 h-8 w-[100px] rounded"
                ></div>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="bg-gray-300 h-8 w-[100px] rounded"></div>
            <div className="flex flex-wrap gap-x-3.5 gap-y-1.5 mt-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-300 h-8 w-[100px] rounded"
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-300 h-8 w-[100px] rounded"></div>
      </div>
    </div>
  );
}
