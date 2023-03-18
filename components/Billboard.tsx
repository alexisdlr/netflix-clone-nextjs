import useBillboard from "@/hooks/useBillboard";
import {AiOutlineInfoCircle} from 'react-icons/ai'
const Billboard = () => {
  const { data } = useBillboard();
  return (
    <div className="relative h-[70.25vw] md:h-[45.25vw] w-full">
      <video
        className="w-full object-cover brightness-[60%] h-[70.25vw] md:h-[45.25vw]"
        autoPlay
        muted
        loop
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-2xl md:text-5xl h-full w-[60%] lg:text-6xl font-bold drop-shadow-xl">
          {data?.title}
        </p>
        <p className="text-white text-[10px] md:text-lg mt-3 md:mt-8 md:w-[80%] w-[90%] lg:w-[50%] drop-shadow-xl">
          {data?.description}
        </p>
        <div className="flex items-center gap-3 md:mt-4 mt-3">
          <button className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold hover:bg-opacity-20 transition flex items-center gap-2">
            <AiOutlineInfoCircle /> More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
