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
            <NavLink to={menuitem.path} key={id} className='text-xl font-semibold text-[#21383e] hover:text-[#da4a03] duration-300'> {menuitem.navtitle}</NavLink>
          )
        })
      }
    </>
  )
}

export default Nav;