import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const { data } = useMovie(movieId as string);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex items-center gap-8 bg-black bg-opacity-30">
        <AiOutlineArrowLeft className="text-white cursor-pointer" size={30} onClick={() => router.push('/')} />
        <p className="text-white text-xl md:text-3xl font-light">
          Watching: <span className="text-white font-bold">{data?.title}</span>
        </p>
      </nav>
      <video
        className="w-full object-cover brightness-[60%] h-[100vh]"
        autoPlay
        controls
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
      ></video>
    </div>
  );
};

export default Watch;
