import React from 'react'
import Button from '@/Components/Button';
import { formatCurrency } from '@/Utils/formatter';
import { toast } from 'react-toastify';
import { deleteTransaction, getAllTransactions } from '@/Services/API/TransactionAPI';
import moment from 'moment';

const Transactions = () => {
    const page = "transaksi";
    const [transactions, setTransactions] = React.useState([])

    const getTransactionData = async () => {
        const res = await getAllTransactions();
        if (res != null) {
            setTransactions(res);
        } else {
            setTransactions([]);
        }
    }

    const deleteWalletData = async (id) => {
        var result = confirm("Apakah Anda Yakin Ingin Menghapus Data Ini ?");

        if (result) {
            try {
                const res = await deleteTransaction(id);
                if (res.status === 200) {
                    getTransactionData();
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

    const columns = ["Kategori", "Nominal", "Tanggal", ""];

    React.useEffect(() => {
        getTransactionData();
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
                            transactions?.length === 0 ? (
                                <tr className='border-b border-gray-200 hover:bg-gray-100'>
                                    <td colSpan={8} className='py-3 px-6 text-center whitespace-nowrap font-medium'>Belum Ada Data</td>
                                </tr>
                            ) : (transactions?.map((item, index) => {
                                return (
                                    <tr key={index} className='border-b border-gray-200 hover:bg-gray-100'>
                                        <td className='py-3 px-6 text-left whitespace-nowrap font-medium'>
                                            <div className="flex items-center gap-x-3">
                                                <img className='w-7 bg-cover' src={`${import.meta.env.VITE_STORAGE_API + item.category.icon}`} alt={item.category.name} />
                                                <span className="font-medium">{item.category.name}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left whitespace-nowrap font-medium">
                                            <span className={`font-medium ${item.type != "income" ? "text-red-600" : "text-green-600"}`}>{formatCurrency(item.amount)}</span>
                                        </td>
                                        <td className='py-3 px-6 text-left whitespace-nowrap font-medium'><span className="font-medium">{moment(item.date).format('LL')}</span></td>
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

export default Transactions