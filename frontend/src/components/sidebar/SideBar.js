import React from 'react'

function SideBar() {
    return (
        <div>
            <div className='h-screen fixed w-36 ml-0 pt-10 bg-blue-400'>
                <h3 className='text-gray-800 font-extrabold uppercase'>Brands</h3><br/>
                <div className>
                    <p className='text-black pt-3 font-semibold cursor-pointer hover:bg-blue-500'>Samsung</p>
                    <p className='text-black pt-3 font-semibold cursor-pointer hover:bg-blue-500'>apple</p>
                    <p className='text-black pt-3 font-semibold cursor-pointer hover:bg-blue-500'>xiaomi</p>
                    <p className='text-black pt-3 font-semibold cursor-pointer hover:bg-blue-500'>Oppo</p>

                </div>

            </div>
        </div>
    )
}

export default SideBar
