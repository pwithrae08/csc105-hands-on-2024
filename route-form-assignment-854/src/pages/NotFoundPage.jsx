import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-200 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 text-center max-w-md w-full relative">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-4xl font-bold text-red-500 mt-2">
          Page Not Found⛔
        </h2>
        <p className="text-gray-600 mt-2">
          Opps!🤭 The page you are looking for doesn't exist.😔
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-fuchsia-300 text-white font-semibold text-lg font-medium rounded-lg shadow-md hover:bg-fuchsia-400 transition"
        >
          Go to HOME !🚶🏻‍♂️‍➡️🏡
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
