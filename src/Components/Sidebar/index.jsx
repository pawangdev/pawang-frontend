import React from 'react'
import { IconHome, IconLayoutSidebar, IconLogout, IconNote, IconSettings, IconWallet } from '@tabler/icons'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { authState } from '../../Services/Store/auth';

export const Sidebar = () => {
    const setAuth = useSetRecoilState(authState);
    const location = useLocation();
    const navigate = useNavigate();

    var subMenuData = [
        {
            name: "Dashboard",
            icon: IconHome,
            link: "/",
        },
        {
            name: "Wallets",
            icon: IconWallet,
            link: "/wallets",
        },
        {
            name: "Transaksi",
            icon: IconNote,
            link: "/transaction",
        },
        {
            name: "Settings",
            icon: IconSettings,
            link: "/settings",
        },
    ]

    const logOut = async () => {
        setAuth({ auth: false, user: [] });
        localStorage.clear();

        navigate('/login', { replace: true })
    }
    return (
        <div className="min-w-[12rem] min-h-screen border-r shadow-sm hidden md:block">
            <div className='px-10 py-14 min-h-full bg-white'>
                <div className='brand-wrapper flex flex-row items-center gap-x-3'>
                    <div className='h-8 w-8'>
                        <img src="/logo/pawang.svg" alt="" />
                    </div>
                    <h1 className='text-lg font-semibold text-blue-600'>Pawang</h1>
                </div>
                <div className='menu-wrapper mt-8'>
                    <p className='text-sm font-semibold text-blue-600'>Menu</p>
                    <div>
                        {
                            subMenuData.map((item, index) => {
                                return (
                                    <Link to={item.link} key={index} className="flex items-center mt-4">
                                        <item.icon className='mr-3' />
                                        <p className={`${location.pathname == item.link ? "text-blue-500 font-semibold" : "text-gray-500"} text-sm`}>{item.name}</p>
                                    </Link>
                                )
                            })
                        }
                        <button onClick={() => logOut()} className='text-red-500 font-medium inline-flex text-sm items-center mt-4'><IconLogout className='mr-3' />Keluar</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
