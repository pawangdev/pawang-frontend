import React from 'react'

export const Dashboard = () => {
    return (
        <>
            <div className='py-14 px-16 w-6/12'>
                <p className='text-2xl text-blue-700'>Welcome back Nola Riska!</p>

                <div className="grid grid-cols-4 gap-x-9 mt-8">
                    <div className='w-32 h-36 bg-green-50 rounded-2xl'>
                        <div className="flex flex-col px-4 py-6 content-between justify-between min-h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card stroke-green-600" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="3" y="5" width="18" height="14" rx="3"></rect>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                <line x1="7" y1="15" x2="7.01" y2="15"></line>
                                <line x1="11" y1="15" x2="13" y2="15"></line>
                            </svg>
                            <p className='text-xs text-green-600'>Tambah Pemasukan</p>
                        </div>
                    </div>
                    <div className='w-32 h-36 bg-purple-50 rounded-2xl'>
                        <div className="flex flex-col px-4 py-6 content-between justify-between min-h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card stroke-purple-600" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="3" y="5" width="18" height="14" rx="3"></rect>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                <line x1="7" y1="15" x2="7.01" y2="15"></line>
                                <line x1="11" y1="15" x2="13" y2="15"></line>
                            </svg>
                            <p className='text-xs text-purple-600'>Tambah Pengeluaran</p>
                        </div>
                    </div>
                    <div className='w-32 h-36 bg-orange-50 rounded-2xl'>
                        <div className="flex flex-col px-4 py-6 content-between justify-between min-h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card stroke-orange-600" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="3" y="5" width="18" height="14" rx="3"></rect>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                <line x1="7" y1="15" x2="7.01" y2="15"></line>
                                <line x1="11" y1="15" x2="13" y2="15"></line>
                            </svg>
                            <p className='text-xs text-orange-600'>Scan Struk</p>
                        </div>
                    </div>
                    <div className='w-32 h-36 bg-blue-50 rounded-2xl'>
                        <div className="flex flex-col px-4 py-6 content-between justify-between min-h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card stroke-blue-600" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="3" y="5" width="18" height="14" rx="3"></rect>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                <line x1="7" y1="15" x2="7.01" y2="15"></line>
                                <line x1="11" y1="15" x2="13" y2="15"></line>
                            </svg>
                            <p className='text-xs text-blue-600'>Kategori</p>
                        </div>
                    </div>
                </div>

                <div className='transaction-wrapper'>
                    <div className="mt-14 w-2/3">
                        <div className='item-wrapper mb-6'>
                            <p className='text-xs text-gray-500 mb-2'>Today</p>
                            <div className='flex flex-row items-center justify-between'>
                                <div className='flex flex-row items-center'>
                                    <div className='h-10 w-10 bg-blue-900 rounded-xl'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-droplet m-auto h-full" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="white" fill="white" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z"></path>
                                        </svg>
                                    </div>
                                    <div className='ml-3 flex flex-col'>
                                        <p>Galon</p>
                                        <p className='text-xs text-gray-500'>19.30</p>
                                    </div>
                                </div>
                                <p className='text-red-500'>- Rp 20.000</p>
                            </div>
                            <hr className='mt-3' />
                        </div>

                        <div className='item-wrapper mb-6'>
                            <p className='text-xs text-gray-500 mb-2'>Yesterday</p>
                            <div className='flex flex-row items-center justify-between'>
                                <div className='flex flex-row items-center'>
                                    <div className='h-10 w-10 bg-red-900 rounded-xl'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-soup m-auto h-full" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M3 19h18"></path>
                                            <path d="M3 11h18a8 8 0 0 1 -8 8h-2a8 8 0 0 1 -8 -8z"></path>
                                            <path d="M9 8v-3"></path>
                                            <path d="M12 5v3"></path>
                                            <path d="M15 5v3"></path>
                                        </svg>
                                    </div>
                                    <div className='ml-3 flex flex-col'>
                                        <p>Makan Bubur</p>
                                        <p className='text-xs text-gray-500'>12.00</p>
                                    </div>
                                </div>
                                <p className='text-red-500'>- Rp 12.000</p>
                            </div>
                            <hr className='mt-3' />

                            <div className='flex flex-row items-center justify-between mt-4'>
                                <div className='flex flex-row items-center'>
                                    <div className='h-10 w-10 bg-teal-900 rounded-xl'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card m-auto h-full" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <rect x={3} y={5} width={18} height={14} rx={3}></rect>
                                            <line x1={3} y1={10} x2={21} y2={10}></line>
                                            <line x1={7} y1={15} x2="7.01" y2={15}></line>
                                            <line x1={11} y1={15} x2={13} y2={15}></line>
                                        </svg>
                                    </div>
                                    <div className='ml-3 flex flex-col'>
                                        <p>Gaji</p>
                                        <p className='text-xs text-gray-500'>08.00</p>
                                    </div>
                                </div>
                                <p className='text-green-500'>+ Rp 1.000.000</p>
                            </div>
                            <hr className='mt-3' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='min-h-full bg-gray-100 w-[433px] ml-auto rounded-tl-[70px] px-16 py-14'>
                <div className='flex flex-row justify-end items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell mr-10" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                        <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                    </svg>
                    <div className='w-9 h-9'>
                        <img className='rounded-full object-cover position bg-center' src="https://www.adobe.com/express/create/media_11b1adffc91b8e6206e56adab00fa2bb4da3e694a.jpeg?width=400&format=jpeg&optimize=medium" alt="People" />
                    </div>
                </div>

                <div className="card-wrapper">
                    <div className="bg-blue-600 h-48 mt-7 rounded-2xl relative overflow-hidden">
                        <div className='absolute z-20 p-5 min-w-full flex flex-col justify-between min-h-full'>
                            <p className='text-white text-lg'>Nola Riska</p>
                            <div className='text-white'>
                                <p className='text-sm'>Dompet</p>
                                <p className='text-lg'>Rp 25.000,00</p>
                            </div>
                        </div>
                        <div className="h-64 w-64 bg-sky-900 rounded-full relative right-16 -top-4">
                        </div>
                        <div className="h-44 w-44 bg-teal-400 absolute z-10 -top-12 -right-16 rounded-full">
                        </div>
                    </div>
                </div>

                <div className='mt-11'>
                    <button className='py-3 outline-dashed outline-2 outline-gray-500 w-full text-gray-500 text-sm rounded-md'>
                        Add new card
                    </button>
                </div>

            </div>
        </>
    )
}
