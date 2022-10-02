import React from 'react'
import { Sidebar } from '../../Components/Sidebar'

export const AccountDetails = () => {
    return (
        <div className='w-full h-screen bg-sky-100'>
            <div className='flex flex-row'>
                <Sidebar />
                <div className='py-16 px-16 w-full'>
                    <p className='text-3xl font-bold'>Pengaturan</p>
                    <div className='w-10/12 h-3/4 mt-9 py-10 px-24 bg-white rounded-lg'>
                        <div className='container mx-auto py-7 px-3 flex flex-col'>
                            <div className='h-8 w-8 mx-auto'>
                                <img src="../Assets/Icon/Avatar-Male.png" alt="Avatar-Male" />
                            </div>
                            <div className='grid grid-cols-2 gap-4 mt-9 pl-24'>
                                <div> 
                                    {/* name */}
                                    <div className='container'>
                                        <p className='text-base font-bold'>Nama :</p>
                                        <p className='text-sm font-medium mt-1'>Putri Ayu Nisa Az-Zahra</p>
                                    </div>
                                    {/* gender */}
                                    <div className='container mt-3'>
                                        <p className='text-base font-bold'>Jenis Kelamin :</p>
                                        <p className='text-sm font-medium mt-1'>Perempuan</p>
                                    </div>
                                    {/* telp number */}
                                    <div className='container mt-3'>
                                        <p className='text-base font-bold'>No. Telepon :</p>
                                        <p className='text-sm font-medium mt-1'>083156677889</p>
                                    </div>
                                </div>
                                <div>
                                    {/* email */}
                                    <div className='container'>
                                        <p className='text-base font-bold'>Email :</p>
                                        <p className='text-sm font-medium mt-1'>putri.diray12@gmail.com</p>
                                    </div>
                                    {/* password */}
                                    <div className='container mt-3'>
                                        <p className='text-base font-bold'>Password :</p>
                                        <p className='text-sm font-medium mt-1'>xxxxxxxxxxxxxx</p>
                                    </div>
                                    {/* PIN */}
                                    <div className='container mt-3'>
                                        <p className='text-base font-bold'>PIN :</p>
                                        <p className='text-sm font-medium mt-1'>xxxxxx</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='mt-3 py-2 px-32 hover:bg-sky-700 rounded-lg bg-sky-500 absolute left-1/2 -translate-x-1/2'>
                            <p className='text-md text-center text-white font-bold'>Edit Akun</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}