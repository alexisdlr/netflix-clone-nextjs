import {signOut} from 'next-auth/react'
import useCurrentUser from "@/hooks/useCurrentUser"
import NavbarItem from './NavbarItem'
const Navbar = () => {
  const {data: user, error, isLoading} = useCurrentUser()

  return (
    <nav className='w-full fixed z-40'>
      <div className='px-4 md:px-15 py-6 flex items-center transition duration-500 bg-zinc-900 bg-opacity-90'>
        <img src="/images/logo.png" alt="logo" className='h-4 lg:h-7' />
        <ul className='flex-row ml-8 gap-7 hidden lg:flex'>
         {
          ['Home', 'Favorites', 'Profile'].map((item, i) => ( <NavbarItem key={i} label={item} />))
         }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar