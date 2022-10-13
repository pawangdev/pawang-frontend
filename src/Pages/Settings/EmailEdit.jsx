import React from 'react'
import { AccountDetails } from './AccountDetails'

export const EmailEdit = () => {
    return(
        // parent wrap
        <div>
            {/* lightbox/modal */}
            <div id='modal'
                className='fixed top-0 left-0 z-80 w-screen h-screen bg-black/90 flex 
                        justify-center items-center z-20'>

                {/* close button */}
                <a className='fixed z-90 top-6 left-8 text-white text-5xl font-bold cursor-pointer' 
                    href='/choose-edit'
                    onclick='closeModal()'>&laquo;</a>
                {/* close button */}
                <a className='fixed z-90 top-6 right-8 text-white text-5xl font-bold cursor-pointer' 
                    href='/account-detail'
                    onclick='closeModal()'>&times;</a>

                {/* showing the lightbox container */}
                <div className='w-screen h-max mx-auto my-auto flex flex-col'>
                    {/* title */}
                    <div className='mb-10'>
                        <p className='text-3xl font-bold text-white text-center'>Email</p>
                    </div>

                    {/* form */}
                    <div className='container mx-auto w-2/6 h-max py-10 px-10 bg-white 
                                    rounded-lg flex flex-col items-start'>
                        <form method='POST' className='w-full'>
                            <div className='mb-6'>
                                <label htmlFor='old-email' 
                                        className='text-sm font-medium capitalize block text-blue-700 mb-1.5'>
                                            Email Lama
                                </label>
                                <input required onChange={(e) => onChange(e)} 
                                        type='email' 
                                        name='old-email' 
                                        id='old-email' 
                                        className='block w-full border bg-gray-50 placeholder-gray-500 
                                                    shadow-sm border-gray-300 focus:outline-none focus:ring 
                                                    focus:ring-blue-500/20 caret-current p-2 rounded-lg
                                                    text-sm' />
                            </div>
                            <div className='mb-6'>
                                <label htmlFor='new-email' 
                                        className='text-sm font-medium capitalize block text-blue-700 mb-1.5'>
                                            Email Baru
                                </label>
                                <input required onChange={(e) => onChange(e)} 
                                        type='email' 
                                        name='new-email' 
                                        id='new-email' 
                                        className='block w-full border bg-gray-50 placeholder-gray-500 shadow-sm 
                                                    order-gray-300 focus:outline-none focus:ring 
                                                    focus:ring-blue-500/20 caret-current p-2 rounded-lg
                                                    text-sm'/>
                            </div>
                            <div className='mt-6'>
                                <button className='py-2 px-16 w-full rounded-lg bg-blue-500 hover:bg-blue-700
                                                    transition duration-200 ease-in-out'>
                                    <p className='text-md text-center text-white font-bold'>Simpan Perubahan</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* the account details as the background */}
            <AccountDetails />
        </div>
    )
}