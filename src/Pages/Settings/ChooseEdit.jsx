import React from 'react';
import { AccountDetails } from './AccountDetails';
import { Link } from 'react-router-dom'

export const ChooseEdit = () => {
    return(
        // parent wrap
        <div>
            {/* lightbox/modal */}
            <div id='modal'
                class='fixed top-0 left-0 z-80 w-screen h-screen bg-black/90 flex justify-center items-center'>

                {/* back button */}
                <a class='fixed z-90 top-6 left-8 text-white text-5xl font-bold cursor-pointer' 
                    href='javascript:void(0)'
                    onclick="closeModal()">&times;</a>

                {/* close button */}
                <a class='fixed z-90 top-6 right-8 text-white text-5xl font-bold cursor-pointer' 
                    href='javascript:void(0)'
                    onclick="closeModal()">&times;</a>

                {/* showing the lightbox container */}
                <div className='w-screen h-max mx-auto my-auto flex flex-col'>
                    {/* title */}
                    <div className='mb-10'>
                        <p className='text-3xl font-bold text-white text-center'>Pilih Pengeditan</p>
                    </div>

                    {/* buttons */}
                    <div className='container mx-auto w-2/4 h-max py-10 px-10 bg-white 
                                    rounded flex flex-col items-center'>
                        {/* identitas diri */}
                        <Link to='/choose-edit' className='mb-3'>
                            <button className='py-2 w-80 hover:bg-sky-700 rounded-lg bg-sky-500'>
                                <p className='text-md text-center text-white font-bold'>Identitas Diri</p>
                            </button>
                        </Link>

                        {/* email */}
                        <Link to='/choose-edit' className='mb-3'>
                            <button className='py-2 w-80 hover:bg-sky-700 rounded-lg bg-sky-500'>
                                <p className='text-md text-center text-white font-bold'>Email</p>
                            </button>
                        </Link>

                        {/* password */}
                        <Link to='/choose-edit' className='mb-3'>
                            <button className='py-2 w-80 hover:bg-sky-700 rounded-lg bg-sky-500'>
                                <p className='text-md text-center text-white font-bold'>Password</p>
                            </button>
                        </Link>

                        {/* PIN */}
                        <Link to='/choose-edit' className='mb-3'>
                            <button className='py-2 w-80 hover:bg-sky-700 rounded-lg bg-sky-500'>
                                <p className='text-md text-center text-white font-bold'>PIN</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* the account details background */}
            <AccountDetails />
        </div>
    )
}