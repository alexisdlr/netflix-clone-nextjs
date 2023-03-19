import { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PlayButton from "./PlayButton";
import FavoriteButton from "./FavoriteButton";
import useMovie from "@/hooks/useMovie";
import useModalInfo from "@/hooks/useInfoModal";

interface InfoModalProps {
  visible?: boolean;
  onClose: any;
}

const InfoModal = ({ visible, onClose }: InfoModalProps) => {
  const [isVisible, setIsVisible] = useState(!!visible);
  const { movieId } = useModalInfo();
  const { data = {} } = useMovie(movieId);

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!visible) return null;
  return (
    <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
      <div className="relative mx-auto w-auto max-w-xl rounded-md overflow-hidden">
        <div
          className={`${
            isVisible ? "scale-100" : "scale-0"
          } transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}
        >
          <div className="relative h-96">
            <video
              src={data?.videoUrl}
              autoPlay
              muted
              loop
              poster={data?.thumbnailUrl}
              className="w-full brightness-[60%] h-full object-cover"
            />
            <div onClick={handleClose} className="cursor-pointer absolute top-3 right-3 rounded-full w-10 h-10 bg-black bg-opacity-70 flex items-center justify-center">
              <AiOutlineClose className="text-white" size={20} />
            </div>
            <div className="absolute bottom-[10%] left-10">
              <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                {data?.title}
              </p>
              <div className="flex gap-4 items-center">
                <PlayButton movieId={data?.id} />
                <FavoriteButton movieId={data?.id} />
              </div>
            </div>
          </div>
          <div className="px-12 py-8">
            <p className="text-green-400 text-md">New</p>
            <p className="text-white text-lg"><span className="text-green-400 font-bold">Duration:</span> {data?.duration}</p>
            <p className="text-white text-lg"><span className="text-green-400 font-bold">Genre:</span> {data?.genre}</p>
            <p className="text-neutral-500 text-lg">{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
