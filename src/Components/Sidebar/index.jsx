import { IconHome, IconSettings, IconWallet } from '@tabler/icons'
import React from 'react'

export const Sidebar = () => {
    var subMenuData = [
        {
            name: "Dashboard",
            icon: IconHome,
        },
        {
            name: "Wallets",
            icon: IconWallet,
        },
        {
            name: "Settings",
            icon: IconSettings,
        },
    ]
    return (
        <div className="w-60 min-h-screen border-r">
            <div className='px-10 py-14'>
                <div className='brand-wrapper flex flex-row items-center gap-3'>
                    <div className='h-8 w-8'>
                        <img src="/logo/pawang.svg" alt="" />
                    </div>
                    <h1 className='text-lg font-semibold text-blue-600'>Pawang</h1>
                </div>
                <div className='menu-wrapper mt-8'>
                    <p className='text-sm font-semibold text-blue-600'>Menu</p>
                    <div>
                        {
                            subMenuData.map((item, index) => <div key={index} className='flex items-center mt-4'>
                                <item.icon className='mr-3' />
                                <p className='text-gray-500 text-sm'>{item.name}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
