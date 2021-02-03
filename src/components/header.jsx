import { useState } from 'react';
import { IoMdMoon } from 'react-icons/io'

function Header() {
  const [ theme, setTheme ] = useState(false)
  
  function SwitchTheme(){
    if(theme === false){
      document.documentElement.classList.add('dark')
    }
    else{
      document.documentElement.classList.remove('dark')
    }
    setTheme(!theme)
  }
  

  return (
    <div className="
    px-5 w-full 
    md:px-10
    lg:px-0
    flex items-center py-8 justify-between lg:max-w-screen-lg mx-auto
    border-gray-200 border-b-2
     dark:border-gray-800
    ">
    
    <div className="flex space-y-2 items-center">

      <h1 className="flex items-center text-3xl font-bold md:mr-12 dark:text-gray-100">
        <span className="mr-2 transform rotate-180 text-blue-850 dark:text-blue-500">
          <IoMdMoon/>
        </span>
        thepods.
      </h1>

      <div className="space-x-5 hidden md:flex">
        <a href="/"  className="font-bold dark:text-gray-500">Discover</a>
        <a href="/"  className="font-bold dark:text-gray-500">Hosts</a>
        <a href="/"  className="font-bold dark:text-gray-500">Resources</a>
      </div>
      

    </div> 
    <div className="flex space-x-6 items-center">
      <a href="/"  className="hidden md:flex font-bold text-blue-850 dark:text-blue-500 hover:opacity-70 transition">Upgrade to Pro</a>

      <div onClick={SwitchTheme} class="relative rounded-full bg-gray-300 dark:bg-gray-800 flex w-10 h-6 mr-2 align-center transition-all duration-500 ease-in-out">
        <span className={(theme? 'left-0 ': 'left-4 ') + "absolute w-6 h-6 bg-blue-850 dark:bg-blue-500 rounded-full transition-all duration-300 ease-in-out"}></span>
      </div>
      

      <span className="rounded-full font-bold flex content-center items-center p-3 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
        AH
      </span>
    </div>
  </div>
  );
}



export default Header;