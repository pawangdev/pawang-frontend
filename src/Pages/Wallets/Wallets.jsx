import React from 'react'
import Button from '@/Components/Button';
import { formatCurrency } from '@/Utils/formatter';
import { deleteWallet, getAllWallets } from '@/Services/API/WalletAPI';
import { toast } from 'react-toastify';

const Wallets = () => {
    const page = "wallet";
    const [wallets, setWallets] = React.useState([])

    const getWalletsData = async () => {
        const res = await getAllWallets();
        if (res != null) {
            setWallets(res);
        } else {
            setWallets([]);
        }
    }

    const deleteWalletData = async (id) => {
        var result = confirm("Apakah Anda Yakin Ingin Menghapus Data Ini ?");

        if (result) {
            try {
                const res = await deleteWallet(id);
                if (res.status === 200) {
                    getWalletsData();
                    toast.success(`${page} Berhasil Dihapus !`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            } catch (error) {
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

    const columns = ["Nama", "Jumlah", ""];

    React.useEffect(() => {
        getWalletsData();
    }, [])
    return (
        <div className='bg-white rounded-xl px-8 py-4'>
            <div className='flex items-center justify-between mb-10'>
                <p className='text-xl font-semibold text-blue-800 capitalize'>{`Daftar ${page}`}</p>
                <Button is_link={true} link={`create`} className="text-white bg-blue-500 hover:bg-blue-600">{`Buat ${page}`}</Button>
            </div>
            <div>
                <table className='min-w-max w-full table-auto'>
                    <thead>
                        <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                            {
                                columns?.map((item, index) => (
                                    <th key={index} className='py-3 px-6 text-left'>{item}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody className='text-gray-600 text-sm font-light'>
                        {
                            wallets?.length === 0 ? (
                                <tr className='border-b border-gray-200 hover:bg-gray-100'>
                                    <td colSpan={8} className='py-3 px-6 text-center whitespace-nowrap font-medium'>Belum Ada Data</td>
                                </tr>
                            ) : (wallets?.map((item, index) => {
                                return (
                                    <tr key={index} className='border-b border-gray-200 hover:bg-gray-100'>
                                        <td className='py-3 px-6 text-left whitespace-nowrap font-medium'>{item.name}</td>
                                        <td className='py-3 px-6 text-left whitespace-nowrap font-medium'>{formatCurrency(item.balance)}</td>
                                        <td>
                                            <div className='py-3 px-6 flex flex-row items-center justify-end gap-x-3'>
                                                <Button is_link={true} link={`edit/${item.id}`} className="text-white bg-gray-500 hover:bg-gray-600">Edit</Button>
                                                <Button type="button" onClick={() => deleteWalletData(item.id)} className="text-white bg-red-500 hover:bg-red-600">Hapus</Button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Wallets