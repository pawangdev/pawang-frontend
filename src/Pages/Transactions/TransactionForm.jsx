import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { authState } from '../../Services/Store/auth';
import { useRecoilValue } from 'recoil';

export const TransactionForm = () => {
    const { user } = useRecoilValue(authState)
    const { type } = useParams();

    const [categories, setCategories] = React.useState([]);
    const [wallets, setWallets] = React.useState([]);

    const [state, setState] = React.useState({
        amount: 0,
        category_id: 0,
        sub_category_id: 0,
        wallet_id: 0,
        type: type,
        description: "",
        date: "",
    });

    const getDataCategories = async () => {
        const res = await axios.get(`${import.meta.env.VITE_URL_API}/categories?type=${type}`, {
            headers: {
                Authorization: "Bearer " + user.token,
            }
        });
        if (res.data.data != null) {
            setCategories(res.data.data);
        } else {
            setCategories([]);
        }
    }

    const getDataWallets = async () => {
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

    const addTransaction = async (e) => {
        e.preventDefault();
        const date = new Date(state.date).toISOString();
        setState({ ...state, amount: Number(state.amount), date })
        console.log(state);
        const res = await axios.post(`${import.meta.env.VITE_URL_API}/transactions/create`, state, {
            headers: {
                Authorization: "Bearer " + user.token,
            }
        })

        if (res.status == 201 || res.status == 200) {
            toast.success('Berhasil Menambahkan Transaksi !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            navigate('/');
        } else {
            toast.error('Terdapat Kesalahan Pada Server !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    React.useEffect(() => {
        getDataCategories();
        getDataWallets();
    }, [])

    return (
        <div className='py-14 px-16 w-6/12'>
            <p className='text-2xl text-blue-700'>Transaksi {type == "income" ? "Pemasukan" : "Pengeluaran"}</p>

            <div className='form-wrapper mt-3'>
                <form onSubmit={addTransaction} method="POST">
                    <div className='mb-3'>
                        <label htmlFor='amount' className='text-gray-600 font-light mb-2'>Jumlah Transaksi</label>
                        <input value={state.amount} name='amount' id='amount' type="number" className='p-2 border rounded-md w-full' placeholder='Jumlah Transaksi' onChange={(e) => onChange(e)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='category_id' className='text-gray-600 font-light mb-2'>Kategori</label>
                        <select value={state.category_id} onChange={(e) => onChange(e)} name='category_id' id="category_id" className="p-2 border rounded-md w-full">
                            <option>Pilih Kategori</option>
                            {
                                categories.map((item, index) => <option key={index} value={item.id}>{item.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='wallet_id' className='text-gray-600 font-light mb-2'>Wallet</label>
                        <select value={state.wallet_id} onChange={(e) => onChange(e)} name='wallet_id' id="wallet_id" className="p-2 border rounded-md w-full">
                            <option>Pilih Wallet</option>

                            {
                                wallets.map((item, index) => <option key={index} value={item.id}>{item.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='description' className='text-gray-600 font-light mb-2'>Deskripsi</label>
                        <textarea value={state.description} name="description" id="description" cols="30" rows="2" placeholder='Deskripsi' className='p-2 border rounded-md w-full' onChange={(e) => onChange(e)}></textarea>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='date' className='text-gray-600 font-light mb-2'>Tanggal & Jam</label>
                        <input value={state.date} name='date' id='date' type="datetime-local" className='p-2 border rounded-md w-full' placeholder='Tanggal & Jam' onChange={(e) => onChange(e)} />
                    </div>
                    <button className='py-3 px-6 rounded-full bg-blue-500 text-white font-semibold float-right mt-3'>
                        Tambah {type == "income" ? "Pemasukan" : "Pengeluaran"}
                    </button>
                </form>

            </div>


        </div>
    )
}
