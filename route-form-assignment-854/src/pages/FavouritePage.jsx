import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const favSchema = z.object({
  number: z.number().min(1, "Number must be at least 1").max(100, "Number must be at most 100"),
  q: z.enum(["love", "like"]),
  size: z.enum(["small", "medium", "large"]),
});

const FavouritesPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(favSchema),
    defaultValues: { number: "", q: "love", size: "medium" },
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { number, q, size } = data;
    navigate(`/fav/${number}?q=${q}&size=${size}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-20 bg-pink-200">
      <h1 className="text-2xl text-gray-800 font-bold mb-4">Favourites Page !</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md w-96  ">
        <div className="mb-4">
          <label className="block text-gray-700">Number :</label>
          <input
            type="number"
            {...register("number", { valueAsNumber: true })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-200"
          />
          {errors.number && <p className="text-red-500 text-sm">{errors.number.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Q : </label>
          <select {...register("q")} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-200">
            <option value="love">Love🩷</option>
            <option value="like">Like👍</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Size :</label>
          <select {...register("size")} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-200">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-fuchsia-300 text-white font-semibold py-2 rounded-lg hover:bg-fuchsia-400">
          SUBMIT!
        </button>
      </form>
    </div>
  );
};

export default FavouritesPage;
