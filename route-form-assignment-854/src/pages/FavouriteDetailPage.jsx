import { useParams, useSearchParams } from "react-router-dom";

const FavouriteDetailPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q") || "unknown";
  const size = searchParams.get("size") || "unknown";

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-200">
    <div className="bg-white p-7 rounded-lg shadow-md w-96 text-center">
      <h1 className="text-2xl font-bold ">💗Favourite Detail Page💗</h1>
      <p className="mt-4 text-lg text-gray-700">
        Your favourite post is <span className="font-semibold">{query}</span>. Post ID is <span className="font-semibold">{id}</span>. Size is <span className="font-semibold">{size}</span>.
      </p>
    </div></div>
  );
};

export default FavouriteDetailPage;
