import { NextPageContext } from 'next';
import {getSession} from 'next-auth/react'
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import useMovies from '@/hooks/useMovies';
import useFavorites from '@/hooks/useFavorites';
import Head from 'next/head';
import InfoModal from '@/components/InfoModal';
import useModalInfo from '@/hooks/useInfoModal';

export async function getServerSideProps (context: NextPageContext) {
  const session = await getSession(context)
  if(!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}
export default function Home() {
  const { data: movies = [] } = useMovies()
  const {data: favorites = []} = useFavorites()
  const {isOpen, closeModal} = useModalInfo()
  return (
    <>
      <Head>
        <title>Netflix Clone App</title>
      </Head>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title='Trending Now' data={movies}/>
        <MovieList title='My List' data={favorites}/>

      </div>
    </>
  );
}
