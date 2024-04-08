import { NavLink } from 'react-router-dom'

function Nav() {

  const menuitems = [
    { path: '/', navtitle: "Home" },
    { path: '/about', navtitle: "About" },
    { path: '/gallery', navtitle: "Gallery" },
    { path: '/contact', navtitle: "Contact" }
  ]

  return (
    <>
      {
        menuitems.map((menuitem, id) => {
          return (
            <NavLink to={menuitem.path} key={id} className='text-3xl sm:text-4xl mb-5 md:mb-0 md:text-xl font-semibold text-white md:text-black hover:text-[#da4a03] hover:bg-gray-200 md:hover:bg-transparent hover:px-20 md:hover:px-0 hover:py-2 md:hover:py-0 duration-300'> {menuitem.navtitle}</NavLink>
          )
        })
      }
    </>
  )
}

export default Nav;