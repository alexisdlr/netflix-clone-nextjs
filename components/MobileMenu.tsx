interface MobileMenuProps{
  visible?: boolean
}
const MobileMenu = ({visible}: MobileMenuProps) => {
  if(!visible) return null
  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div className="text-white px-3 text-center transition hover:underline">
            Home
        </div>
        <div className="text-white px-3 text-center transition hover:underline">
            Series
        </div>
        <div className="text-white px-3 text-center transition hover:underline">
            Films
        </div>
        <div className="text-white px-3 text-center transition hover:underline">
            New & Popular
        </div>
        <div className="text-white px-3 text-center transition hover:underline">
            My List
        </div>
      </div>
    </div>
  )
}

export default MobileMenu