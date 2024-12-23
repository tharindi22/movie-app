import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const navigation = [
    {
      lable : "Tv Shows",
      href : 'tv'
    },
    {
      lable : "Movies",
      href : 'movie'
    }
  ]
    
  return (
    
    <header className='fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75'>
        <div className='container mx-auto px-3 flex items-center h-full'>
          <div className=''>
            <img src={logo} alt='logo' width={120} />
          </div>

          <nav className='hidden lg:flex items-center gap-1 ml-5'>
              {
                navigation.map((nav,index)=>{
                  return(
                    <div>
                      <NavLink key={nav.lable+"header"+index} to={nav.href} className={({isActive})=>`px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`} >
                        {nav.lable}
                      </NavLink>
                    </div>
                  )
                })
              }
          </nav>
        </div>

    </header>
  )
  
}

export default Header
