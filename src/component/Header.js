import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import userIcon from '../assets/user.png'

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
          <div className='w-150 h-150'>
            <img src={logo} alt='logo' width={150}  />
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


          <div className="ml-auto">
            <div></div>
            <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
              <img src={userIcon} alt="user" className="w-full h-full" />
            </div>
          </div>



        </div>

    </header>
  )
  
}

export default Header
