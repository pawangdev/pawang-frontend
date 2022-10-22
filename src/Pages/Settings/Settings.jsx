import React from 'react'
import { Link } from 'react-router-dom'

const Settings = () => {
    return (
        <>
            <div className="grid md:grid-cols-10 gap-5">
                <div className="col-span-5">
                    <div className="card-wrapper bg-white shadow-sm px-6 py-16 rounded-lg text-center">
                        <h1 className='text-lg font-medium'>Ganti Password</h1>
                        <p className='text-muted text-sm'>Ganti Password Minimal 3 Bulan Sekali</p>
                        <div className="mt-10">
                            <Link className='p-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition duration-300'>Ganti Password</Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-5">
                    <div className="card-wrapper bg-white shadow-sm px-6 py-16 rounded-lg text-center">
                        <h1 className='text-lg font-medium'>Update Profile</h1>
                        <p className='text-muted text-sm'>Halaman Untuk Update Profile</p>
                        <div className="mt-10">
                            <Link className='p-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition duration-300'>Update Profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings