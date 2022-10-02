import React from 'react'
import { Sidebar } from '../../Components/Sidebar'

// https://www.kindacode.com/article/tailwind-css-how-to-create-image-modals-image-lightboxes/

export const AccountDetails = () => {
    var detailRow1 = [
        {
            label: "Name :",
            value: "Putri Ayu Nisa Az-Zahra"
        },
        {
            label: "Jenis Kelamin :",
            value: "Perempuan"
        },
        {
            label: "No. Telp :",
            value: "083156677889"
        },
    ]

    var detailRow2 = [
        {
            label: "Email :",
            value: "putri.diray12@gmail.com"
        },
        {
            label: "Password :",
            value: "xxxxxxxxxxxxxx"
        },
        {
            label: "PIN :",
            value: "xxxxxx"
        },
    ]

    return (
        <div className='w-full h-screen bg-sky-100'>
            <div className='flex flex-row'>
                <Sidebar />
                <div className='py-16 px-16 w-full'>
                    <p className='text-3xl font-bold'>Pengaturan</p>
                    <div className='w-10/12 h-5/6 mt-9 py-10 px-24 bg-white rounded-lg'>
                        <div className='container mx-auto px-3 flex flex-col'>
                            <div className='w-24 h-24 mx-auto'>
                                <img src="/src/Assets/Icon/Avatar-Male.png" alt="Avatar-Male" />
                            </div>
                            <div className='grid grid-cols-2 gap-4 mt-9 pl-24'>
                                <div> 
                                {
                                    detailRow1.map((item, index) => {
                                        return (
                                            <div className='container mb-5' key={index}>
                                                <p className='text-base font-bold'>{item.label}</p>
                                                <p className='text-sm font-medium mt-2'>{item.value}</p>
                                            </div>
                                        )
                                    })
                                }
                                </div>
                                <div>
                                {
                                    detailRow2.map((item, index) => {
                                        return (
                                            <div className='container mb-5' key={index}>
                                                <p className='text-base font-bold'>{item.label}</p>
                                                <p className='text-sm font-medium mt-2'>{item.value}</p>
                                            </div>
                                        )
                                    })
                                }
                                </div>
                            </div>
                        </div>
                        <div className='w-full mt-3 relative'>
                            <button className='py-2 px-32 hover:bg-sky-700 rounded-lg bg-sky-500 absolute 
                                                left-1/2 -translate-x-1/2'>
                                <p className='text-md text-center text-white font-bold'>Edit Akun</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}