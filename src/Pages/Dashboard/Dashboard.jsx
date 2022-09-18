import React from 'react'
import { useRecoilValue } from 'recoil'
import { authState } from '../../Services/Store/auth'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
    const { user } = useRecoilValue(authState)
    const [transactions, setTransactions] = React.useState([])
    const [wallets, setWallets] = React.useState([])

    const dataTransactions = async () => {
        const res = await axios.get(`${import.meta.env.VITE_URL_API}/transactions`, {
            headers: {
                Authorization: "Bearer " + user.token,
            }
        });
        if (res.data.data != null) {
            setTransactions(res.data.data);
        } else {
            setTransactions([]);
        }
    }

    const dataWallets = async () => {
        const res = await axios.get(`${import.meta.env.VITE_URL_API}/wallets`, {
            headers: {
                Authorization: "Bearer " + user.token,
            }
        });
        if (res.data.data != null) {
            setWallets(res.data.data);
        } else {
            setWallets([]);
        }
    }

    React.useEffect(() => {
        dataTransactions();
        dataWallets();
    }, [])

    return (
        <>
            <div className='py-14 px-16 w-6/12'>
                <p className='text-2xl text-blue-700'>Welcome back {user.name}!</p>

                <div className="grid grid-cols-4 gap-x-9 mt-8">
                    <Link to="/transaction/add/income" className='w-32 h-36 bg-green-50 rounded-2xl'>
                        <div className="flex flex-col px-4 py-6 content-between justify-between min-h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card stroke-green-600" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="3" y="5" width="18" height="14" rx="3"></rect>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                <line x1="7" y1="15" x2="7.01" y2="15"></line>
                                <line x1="11" y1="15" x2="13" y2="15"></line>
                            </svg>
                            <p className='text-xs text-green-600'>Tambah Pemasukan</p>
                        </div>
                    </Link>
                    <Link to="/transaction/add/outcome" className='w-32 h-36 bg-purple-50 rounded-2xl'>
                        <div className="flex flex-col px-4 py-6 content-between justify-between min-h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card stroke-purple-600" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="3" y="5" width="18" height="14" rx="3"></rect>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                <line x1="7" y1="15" x2="7.01" y2="15"></line>
                                <line x1="11" y1="15" x2="13" y2="15"></line>
                            </svg>
                            <p className='text-xs text-purple-600'>Tambah Pengeluaran</p>
                        </div>
                    </Link>
                    <Link className='w-32 h-36 bg-orange-50 rounded-2xl'>
                        <div className="flex flex-col px-4 py-6 content-between justify-between min-h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card stroke-orange-600" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="3" y="5" width="18" height="14" rx="3"></rect>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                <line x1="7" y1="15" x2="7.01" y2="15"></line>
                                <line x1="11" y1="15" x2="13" y2="15"></line>
                            </svg>
                            <p className='text-xs text-orange-600'>Scan Struk</p>
                        </div>
                    </Link>
                    <div className='w-32 h-36 bg-blue-50 rounded-2xl'>
                        <div className="flex flex-col px-4 py-6 content-between justify-between min-h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card stroke-blue-600" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="3" y="5" width="18" height="14" rx="3"></rect>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                <line x1="7" y1="15" x2="7.01" y2="15"></line>
                                <line x1="11" y1="15" x2="13" y2="15"></line>
                            </svg>
                            <p className='text-xs text-blue-600'>Kategori</p>
                        </div>
                    </div >
                </div >

                <div className='transaction-wrapper'>
                    <div className="mt-14 w-2/3">
                        <div className='item-wrapper mb-6'>
                            <p className='text-xs text-gray-500 mb-2'>Riwayat Transaksi</p>
                            {
                                transactions.length != 0 ? transactions.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <div className='flex flex-row items-center justify-between'>
                                                <div className='flex flex-row items-center'>
                                                    <div className='h-10 w-10 rounded-xl'>
                                                        <img src={import.meta.env.VITE_STORAGE_API + item.category.icon} alt="" />
                                                    </div>
                                                    <div className='ml-3 flex flex-col'>
                                                        <p>{item.category.name}</p>
                                                        <p className='text-xs text-gray-500'>19.30</p>
                                                    </div>
                                                </div>
                                                <p className={`${item.type == "income" ? "text-green-500" : "text-red-500"}`}>{`${item.type == "income" ? "+ " + item.amount : "- " + item.amount}`}</p>
                                            </div>
                                            <hr className='mt-3' />
                                        </div>
                                    )
                                }) : <p>Data Transaksi Kosong</p>
                            }
                        </div>
                    </div>
                </div>
            </div >

            <div className='min-h-full bg-gray-100 w-[433px] ml-auto rounded-tl-[70px] px-16 py-14'>
                <div className='flex flex-row justify-end items-center'>
                    <p className='text-sm mr-8 text-gray-500'>{user.name}</p>
                    <div className='w-9 h-9'>
                        <img className='rounded-full object-cover position bg-center' src={`${user.gender == 'male' ? '/images/man.png' : '/images/woman.png'}`} alt="People" />
                    </div>
                </div>

                <div className="card-wrapper">
                    <div className="bg-blue-600 h-48 mt-7 rounded-2xl relative overflow-hidden">
                        <div className='absolute z-20 p-5 min-w-full flex flex-col justify-between min-h-full'>
                            <p className='text-white text-lg'></p>
                            <div className='text-white'>
                                <p className='text-sm'>{wallets[0] != null ? wallets[0]['name'] : '-'}</p>
                                <p className='text-lg'>{wallets[0] != null ? "Rp " + wallets[0]['balance'] : '-'}</p>
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
