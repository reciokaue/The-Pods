import { IoIosArrowForward } from "react-icons/io";
import { BsFillCaretRightFill } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";
import { BsDot } from 'react-icons/bs'

import "./ballers.css"

function BigBallers() {
  return (
    <div className="flex max-w-screen-lg w-full mx-auto flex-col pb-24">
        <Header/>
      <section className="
      px-5
      grid gap-12 lg:px-0 
      ">
        <div className="cover sm:w-96 sm:h-96 md:w-80 md:h-80  bg-blue-850 flex-shrink-0 dark:bg-gray-300"></div>
        <TopRight className="cover"/>
        <BottomLeft  className="text"/>
        <BottomRight className="episodeds"/>
      </section>
    </div>
  );
}

export default BigBallers;

function Header(){
  return(
    <>
       <header className="
        mx-auto flex px-5 
        py-4 items-center space-x-3 dark:text-gray-300 
        md:w-full md:mx-0 md:px-10 lg:px-0
       ">
        <a className="font-bold dark:text-gray-200" href="/">
          Discover
        </a>
          <IoIosArrowForward className="dark:text-gray-300"/>
        <a className="font-bold dark:text-gray-200" href="/">
          Sports
        </a>
          <IoIosArrowForward/>
        <a className="font-bold text-gray-500" href="/">
          Big Ballers Asia Podcast
        </a>
      </header>
    </>
  )
}

function TopRight() {
  return(
    <section className="flex flex-col justify-start   relative">
        <label className="font-bold text-2xl pb-6  dark:text-gray-50">The Ringer</label>
        <h1 className="
        font-bold text-6xl lg:text-7xl pb-10 dark:text-gray-50
        ">
          Big Ballers Asia Podcast
        </h1>

        <div className="flex md:absolute bottom-0">
            <button className="flex items-center py-3 px-5 bg-black font-bold text-gray-50 tracking-wider
              border-black border-4 hover:bg-white hover:text-black 
              dark:bg-white dark:text-black dark:border-white 
            ">
              <span className="mr-3 ">
                <BsFillCaretRightFill />
              </span>
              Play Latest Episode
            </button>
            <button className="py-3 px-5  ml-3 border-4  border-black font-bold tracking-wider
              hover:bg-black hover:text-white
              dark:bg-gray-900 dark:text-white dark:border-white
            ">
              Subscribe
            </button>
          </div>
    </section>
  )
}
function BottomLeft(){
  return(
    <section className="flex flex-col w-80">
      <p className="text-gray-700 dark:text-gray-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        quae eveniet nobis, quos asperiores voluptas nulla facere esse
      </p>
      <p className="text-gray-700 mt-6 dark:text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum
        dolor.
      </p>

      <span className="mt-10 mb-2 font-extrabold text-gray-400">
        ORIGINAL DESIGN BY
      </span>
      <h1 className="font-bold text-2xl tracking-widest dark:text-gray-100">Afrian Hanafi</h1>
    </section>
  )
}
function BottomRight(){
  return(
      <section className="flex flex-col w-full">
          <header className="flex w-full pb-3 border-b-2 border-gray-300 dark:border-gray-800 items-center justify-between">
              <div  className="flex items-center"> 
                <h1 className="text-2xl font-bold dark:text-gray-100">Episodes</h1>
                <label className="text-gray-400 ml-4">11 episodes</label>
              </div>
              <div  className="flex items-center font-medium cursor-pointer  dark:text-gray-100">
                Sort by Release Date 
                <IoChevronDownOutline className="ml-4 "/>
              </div>
          </header>
          <div className="flex mt-9">
            <span className="w-40 h-40 bg-blue-850  flex-shrink-0 dark:bg-gray-300"></span>
            <div className="h-40 pl-6 lg:pl-12 relative">
              <header className="flex text-gray-400 font-bold text-sm ">
                EPS.11 <label className="ml-2 px-1 tracking-wider bg-black text-white text-bold dark:bg-gray-100 dark:text-gray-900">NEW</label>
              </header>
    
              <h1 className="font-extrabold text-lg leading-10 dark:text-gray-100">Does the NBA have a James Harden Problem?</h1>
              <p className="text-gray-600 dark:text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe temporibus, neque unde id in impedit natus.</p>

              <div className="flex items-center pt-4 lg:absolute bottom-0">
                <button className="flex items-center px-3 py-2 font-bold bg-black text-white dark:bg-gray-100 dark:text-gray-900"><BsFillCaretRightFill className="mr-3"/> Play</button>
                <label className="flex items-center ml-3 font-bold text-gray-800 dark:text-gray-300">
                  Jan 15th, 2021 <BsDot/> 33mins
                </label>
              </div>
            </div>
          </div>

      </section>
  )
}