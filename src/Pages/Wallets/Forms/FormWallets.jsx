import { Input, Label } from '@/Components/Input';
import { addWallet, getWalletById, updateWallet } from '@/Services/API/WalletAPI';
import React from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const FormWallets = () => {
    const page = "wallets";
    const navigate = useNavigate();
    const { id } = useParams();

    const [payload, setPayload] = React.useState({
        name: '',
        balance: '',
    });

    const isAdding = id == null ? true : false;

    const updatePayload = (e) => {
        setPayload({ ...payload, [e.target.name]: e.target.value });
    }

    const getWalletData = async () => {
        const res = await getWalletById(id);
        setPayload(res);
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            if (isAdding) {
                const res = await addWallet(payload);
                if (res.status == 201 || res.status == 200) {
                    navigate("/" + page, {
                        replace: true
                    });

                    toast.success(`${page} Berhasil Dibuat !`, {
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
                const res = await updateWallet(id, payload);
                if (res.status == 201 || res.status == 200) {
                    navigate("/" + page, {
                        replace: true
                    });

                    toast.success(`${page} Berhasil Dibuat !`, {
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
        } catch (error) {
            toast.error("Terdapat Kesalahan", {
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

    useEffect(() => {
        if (id) {
            getWalletData();
        }
    }, []);

    return (
        <div className='bg-white rounded-xl px-8 py-4'>
            <div className='flex items-center justify-between mb-6'>
                <p className='text-xl font-semibold text-blue-800 capitalize'>{`${isAdding ? "Tambah" : "Edit"} ${page}`}</p>
            </div>
            <form method="post" onSubmit={onSubmitForm}>
                <div className="grid grid-cols-12 grid-rows-1 gap-x-2">
                    <div className="col-span-6">
                        <div>
                            <p className='text-lg font-medium text-slate-700'>Nama Wallet</p>
                            <div className='mt-2'>
                                <Label htmlFor="name">Nama</Label>
                                <Input value={payload?.name} onChange={(e) => updatePayload(e)} type="text" name='name' placeholder='Nama Wallet' />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div>
                            <p className='text-lg font-medium text-slate-700'>Saldo Awal Wallet</p>
                            <div className='mt-2'>
                                <Label htmlFor="balance">Saldo</Label>
                                <Input value={payload?.balance} onChange={(e) => updatePayload(e)} type="number" name='balance' placeholder='Jumlah Saldo Awal' />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 mt-6">
                        <div className="float-right">
                            <button type='submit' className={`py-2 px-6 text-base font-semibold rounded-full transition-all duration-200 capitalize bg-blue-500 hover:bg-blue-600 text-white`} >Simpan</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormWallets