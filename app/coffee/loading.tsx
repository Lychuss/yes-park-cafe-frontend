export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black/80 px-4 text-center text-gray-200">
      <div className="mb-4 h-16 w-16 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
      <p className="text-base sm:text-lg">Loading please wait...</p>
    </div>
  );
}
