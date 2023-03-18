import {BsFillPlayFill} from 'react-icons/bs'
import { useRouter } from 'next/router'

interface PlayButtonProps {
  movieId: string
}

const PlayButton = ({movieId}: PlayButtonProps) => {
  const router = useRouter()
  return (
    <button 
    onClick={() => router.push(`/watch/${movieId}`)}
    className='bg-white cursor-pointer rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold hover:bg-opacity-20 transition flex items-center gap-2'>
      <BsFillPlayFill size={25} /> Play
    </button>
  )
}

export default PlayButton