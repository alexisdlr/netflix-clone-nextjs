interface NavbarItemProps {
  label: string
}
const NavbarItem = ( {label}: NavbarItemProps) => {
  return (
    <li className="text-white cursor-pointer transition hover:text-gray-300">{label}</li>
  )
}

export default NavbarItem