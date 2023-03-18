import { useRouter } from "next/router";
import { BsFillPlayFill } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";

interface MovieCardProps {
  movie: Record<string, any>;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const router = useRouter()
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <img
        src={movie.thumbnailUrl}
        alt={movie.title}
        className="cursor-pointer object-cover shadow-xl transition rounded-md group-hover:opacity-80 sm:group-hover:opacity-0 delay-200 w-full h-[12vw]"
      />
      <div className="absolute opacity-0 top-0 transition duration-200 z-10 invisible sm:visible delay-200 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vh] group-hover:opacity-100">
        <img
          src={movie.thumbnailUrl}
          alt={movie.title}
          className="cursor-pointer object-cover shadow-xl transition rounded-md w-full h-[12vw]"
        />
        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex items-center gap-3">
            <div
              className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full hover:bg-neutral-300 flex items-center justify-center transition"
              onClick={() => router.push(`/watch/${movie.id}`)}
            >
              <BsFillPlayFill size={20} />

            </div>
            <FavoriteButton movieId={movie?.id} />
            <div>
              <h3 className="text-white">{movie.title}</h3>
            </div>
          </div>
          <p className="text-green-400 font-semibold mt-4">New <span className="text-white">2023</span></p>
          <div className="flex gap-2 mt-3 items-center" >
            <p className="text-white text-[10px] lg:text-sm">{movie.duration}</p>
            <p className="text-white text-[10px] lg:text-sm">{movie.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
