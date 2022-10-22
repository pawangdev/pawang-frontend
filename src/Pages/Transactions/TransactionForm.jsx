import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getAllCategories } from '@/Services/API/CategoryAPI';
import { getAllWallets } from '@/Services/API/WalletAPI';
import { addTransaction, getTransactionById, updateTransaction } from '@/Services/API/TransactionAPI';
import { toast } from 'react-toastify';
import { Label, Input } from '@/Components/Input';
import moment from 'moment';

export const TransactionForm = () => {
    const page = "transaksi";
    const navigate = useNavigate();
    const { id } = useParams();

    const [categories, setCategories] = React.useState([]);
    const [wallets, setWallets] = React.useState([]);

    const [payload, setPayload] = React.useState({
        amount: 0,
        category_id: "",
        wallet_id: "",
        description: "",
        date: "",
    });

    const isAdding = id == null ? true : false;

    const getDataCategories = async () => {
        const res = await getAllCategories();
        if (res != null) {
            setCategories(res);
        } else {
            setCategories([]);
        }
    }

    const getDataWallets = async () => {
        const res = await getAllWallets();
        if (res != null) {
            setWallets(res);
        } else {
            setWallets([]);
        }
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        if (isAdding) {
            const res = await addTransaction(payload)
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

                navigate('/transaction', { replace: true });
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
        } else {
            const res = await updateTransaction(id, payload)
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

                navigate('/transaction', { replace: true });
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
    }

    const updatePayload = (e) => {
        setPayload({ ...payload, [e.target.name]: e.target.value })
    }

    const getTransactionData = async () => {
        const res = await getTransactionById(id);
        setPayload(res);
    }

    React.useEffect(() => {
        if (id) getTransactionData()
        getDataCategories();
        getDataWallets();
    }, [])

    return (
        <div className='bg-white rounded-xl px-8 py-4'>
            <div className='flex items-center justify-between mb-6'>
                <p className='text-xl font-semibold text-blue-800 capitalize'>{`${isAdding ? "Tambah" : "Edit"} ${page}`}</p>
            </div>
            <form method="post" onSubmit={onSubmitForm}>
                <div className="grid grid-cols-12 grid-rows-1 gap-5">
                    <div className="col-span-12">
                        <div>
                            <p className='text-lg font-medium text-slate-700'>Saldo Awal Wallet</p>
                            <div className='mt-2'>
                                <Label htmlFor="amount">Nominal</Label>
                                <Input value={payload?.amount} onChange={(e) => updatePayload(e)} type="number" name='amount' placeholder='Jumlah Nominal' />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div>
                            <p className='text-lg font-medium text-slate-700'>Kategori</p>
                            <div className='mt-2'>
                                <Label htmlFor="category_id">Kategori</Label>
                                <select value={payload?.category_id} onChange={(e) => updatePayload(e)} name="category_id" id="category_id" className='block border w-full rounded-lg p-2 mt-1'>
                                    <option value="" hidden>Tentukan Kategori Anda</option>
                                    {
                                        categories.map((item, index) => <option key={index} value={item.id}>{item.name}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div>
                            <p className='text-lg font-medium text-slate-700'>Wallet</p>
                            <div className='mt-2'>
                                <Label htmlFor="amount">Wallet</Label>
                                <select value={payload?.wallet_id} onChange={(e) => updatePayload(e)} name="wallet_id" id="wallet_id" className='block border w-full rounded-lg p-2 mt-1'>
                                    <option value="" hidden>Tentukan Wallet Anda</option>
                                    {
                                        wallets.map((item, index) => <option key={index} value={item.id}>{item.name}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div>
                            <p className='text-lg font-medium text-slate-700'>Tanggal</p>
                            <div className='mt-2'>
                                <Label htmlFor="date">Nominal</Label>
                                <input className='block border w-full rounded-lg p-2 mt-1' value={payload?.date} onChange={(e) => updatePayload(e)} type="datetime-local" name="date" id="date" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12">
                        <div>
                            <p className='text-lg font-medium text-slate-700'>Deskripsi</p>
                            <div className='mt-2'>
                                <Label htmlFor="description">Deskripsi</Label>
                                <textarea name="description" id="description" className='block border w-full rounded-lg p-2 mt-1' cols="3" rows="3" onChange={(e) => updatePayload(e)} value={payload?.description}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 mt-6">
                        <div className="float-right">
                            <button type='submit' className="py-2 px-6 text-base font-semibold rounded-full transition-all duration-200 capitalize bg-blue-500 hover:bg-blue-600 text-white" >Simpan</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
