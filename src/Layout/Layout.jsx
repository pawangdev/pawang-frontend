import { Sidebar } from '@/Components/Sidebar'
import { IconMenu2 } from '@tabler/icons'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation();

    const titlePage = location.pathname.split("/")[location.pathname.split("/").length - 1];

    return (
        <div className="antialiased text-tiny tracking-tight">
            <div className="flex flex-row bg-gray-100/30">
                <div className='absolute md:hidden bg-white w-full px-6 py-3 shadow-sm'>
                    <div className="flex flex-row justify-between items-center">
                        <div className='h-8 w-8'>
                            <img src="/logo/pawang.svg" alt="" />
                        </div>
                        <IconMenu2 />
                    </div>
                </div>
                <Sidebar />
                <div className='py-14 px-16 w-full'>

                    {titlePage !== "" && location.pathname.split("/")[2] != "edit" && <p className='text-xl text-blue-800 font-bold capitalize mb-6'>{titlePage}</p>}
                    <Outlet />
                </div >
            </div>
        </div >
    )
}

export default Layout