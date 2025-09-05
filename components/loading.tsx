export default function Loading() {
  return (
    <div className="flex items-center justify-center mt-8 w-full">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#8f3a09]"></div>
    </div>
  );
}

const CompanionSkeleton = () => {
  return (
    <div className="animate-pulse border rounded-4xl p-4 h-60 bg-gray-100">
      <div className="h-6 w-3/4 bg-gray-300 mb-4"></div>
      <div className="h-4 w-1/2 bg-gray-300 mb-2"></div>
      <div className="h-4 w-1/3 bg-gray-300"></div>
    </div>
  );
};

export const CompanionSkeletonLoading = () => (
  <div className="grid grid-cols-3 gap-4">
    {[...Array(6)].map((_, i) => (
      <CompanionSkeleton key={i} />
    ))}
  </div>
);
