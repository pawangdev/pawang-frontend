import React from 'react'
import { AccountDetails } from './AccountDetails'
import { Link } from 'react-router-dom'

export const ChooseEdit = () => {
    var editItems = [
        {
            label: 'Identitas Diri',
            link: '/edit-identitas-diri'
        },
        {
            label: 'Email',
            link: '/edit-email'
        },
        {
            label: 'Password',
            link: '/edit-password'
        },
        {
            label: 'PIN',
            link: '/edit-pin'
        },
    ]

    return(
        // parent wrap
        <div>
            {/* lightbox/modal */}
            <div id='modal'
                className='fixed top-0 left-0 z-80 w-screen h-screen bg-black/90 flex 
                        justify-center items-center z-20'>

                {/* close button */}
                <a className='fixed z-90 top-6 right-8 text-white text-5xl font-bold cursor-pointer' 
                    href='/account-detail'
                    onclick="closeModal()">&times;</a>

                {/* showing the lightbox container */}
                <div className='w-screen h-max mx-auto my-auto flex flex-col'>
                    {/* title */}
                    <div className='mb-10'>
                        <p className='text-3xl font-bold text-white text-center'>Pilih Pengeditan</p>
                    </div>

                    {/* buttons */}
                    <div className='container mx-auto w-2/5 h-max py-8 px-8 bg-white 
                                    rounded-lg flex flex-col items-center'>
                        {/* edit items */}
                        {
                            editItems.map((item, index) => {
                                return(
                                    <Link to={item.link} className='mb-3'>
                                        <button className='py-2 w-80 rounded-lg bg-blue-500 shadow hover:bg-blue-700
                                                            transition duration-200 ease-in-out'>
                                            <p className='text-md text-center text-white font-bold'>{item.label}</p>
                                        </button>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* the account details as the background */}
            <AccountDetails />
        </div>
    )
}