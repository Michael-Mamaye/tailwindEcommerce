import React,{useState} from 'react'
import SideBar from '../sidebar/SideBar'

function Nav() {

    const [open, setopen] = useState(false)
    const handleClick=()=>{
         setopen(!open)
    }

   
    
    return (
        <div>
            <div>
                <div class='z-30 md:flex md:justify-between bg-blue-400 md:pr-8 '>
                    <div className='bg-blue-400 flex justify-between px-10 h-16 place-items-center'>
                        <p class='cursor-pointer text-lg font-semibold'>Closest Market</p>
                        <svg onClick={handleClick} class="h-10 w-10 p-2 md:hidden rounded-md font-semibold cursor-pointer hover:bg-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <div className={open?'bg-blue-400 float-left w-screen ':'md:pb-2 bg-blue-400 hidden md:flex place-items-center'}>
                        <p class='text-lg hover:bg-blue-500 cursor-pointer px-3 pt-2 place-items-center'>home</p>
                        <p class='text-lg hover:bg-blue-500 cursor-pointer px-3 pt-2 place-items-center'>about</p>
                        <p class='text-lg hover:bg-blue-500 cursor-pointer px-3 pt-2 place-items-center'>home</p>
                        <p class='text-lg hover:bg-blue-500 cursor-pointer px-3 pt-2 place-items-center'>about</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Nav
