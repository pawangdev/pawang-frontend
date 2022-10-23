import React from 'react'
import { profileUser } from '@/Services/API/AuthenticationAPI';
import { getAllTransactions } from '@/Services/API/TransactionAPI';
import { addWallet, getAllWallets } from '@/Services/API/WalletAPI';
import { QuickActionButton } from '@/Components/QuickActionButton';
import { IconCategory, IconCreditCard, IconCreditCardOff, IconScan } from '@tabler/icons';
import { toast } from 'react-toastify';
import { formatCurrency } from '@/Utils/formatter';
import moment from "moment";
import "moment/dist/locale/id";
import { useRecoilValue } from 'recoil';
import { authState } from '@/Services/Store/auth';

export const Dashboard = () => {
    const { user } = useRecoilValue(authState);

    console.log(user);
    const [transactions, setTransactions] = React.useState([]);
    const [wallets, setWallets] = React.useState([]);

    // Wallet Form
    const [addWalletModal, setAddWalletModal] = React.useState(false);
    const [payloadWallet, setPayloadWallet] = React.useState({
        name: "",
        balance: 0
    });

    const onSubmit = async () => {
        try {
            const res = await addWallet(payloadWallet)

            if (res.status == 201 || res.status == 200) {
                toast.success('Berhasil Menambahkan Wallet !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                setAddWalletModal(false);
                dataWallets();
                dataTransactions();

                setPayloadWallet({
                    name: '',
                    balance: 0
                });
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
            setAddWalletModal(false);
        }
    }

    const dataTransactions = async () => {
        const res = await getAllTransactions();
        if (res != null) {
            setTransactions(res);
        } else {
            setTransactions([]);
        }
    };

    const dataWallets = async () => {
        const res = await getAllWallets();
        if (res != null) {
            setWallets(res);
        } else {
            setWallets([]);
        }
    };

    const onChangeInput = (e) => {
        setPayloadWallet({ ...payloadWallet, [e.target.name]: e.target.value });
    }

    React.useEffect(() => {
        dataTransactions();
        dataWallets();
    }, []);

    return (
        <>
            <p className='text-2xl text-blue-700 capitalize'>Selamat Datang <strong>{user.name}</strong></p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-9 gap-y-3 mt-8">
                <QuickActionButton bgColor="bg-purple-100" textColor="text-purple-600" link="/transaction/create" icon={<IconCreditCardOff className='stroke-purple-600' />} label="Tambah Transaksi" />
                <QuickActionButton bgColor="bg-orange-100" textColor="text-orange-600" link="/scan-receipt" icon={<IconScan className='stroke-orange-600' />} label="Scan Struk" />
                <QuickActionButton bgColor="bg-blue-100" textColor="text-blue-600" link="/category/create" icon={<IconCategory className='stroke-blue-600' />} label="Kategori" />
            </div >

            <div className="flex gap-x-3">
                <div className="w-6/12">
                    <div className='transaction-wrapper'>
                        <div className="mt-14 w-full">
                            <div className='item-wrapper mb-6'>
                                <p className='text-sm font-medium text-gray-500'>Riwayat Transaksi</p>
                                <div className="rounded my-3">
                                    <table className="min-w-max w-full table-auto rounded-lg overflow-hidden">
                                        <thead>
                                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                <th className="py-3 px-6 text-left">Kategori</th>
                                                <th className="py-3 px-6 text-left">Nominal</th>
                                                <th className="py-3 px-6 text-center">Tanggal</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-600 text-sm font-light bg-white">
                                            {
                                                transactions.length == 0 ? (
                                                    <tr className='border-b border-gray-200'>
                                                        <td className="py-3 px-6 text-center whitespace-nowrap" colSpan={4}>Data Masih Kosong</td>
                                                    </tr>
                                                ) : transactions.map((item, index) => (
                                                    <tr className={`${transactions.length - 1 != index ? "border-b" : ""} border-gray-200 hover:bg-gray-200 transition-colors duration-300`} key={index}>
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <div className="flex items-center gap-x-3">
                                                                <img className='w-7 bg-cover' src={`${import.meta.env.VITE_STORAGE_API + item.category.icon}`} alt={item.category.name} />
                                                                <span className="font-medium">{item.category.name}</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <span className={`font-medium ${item.type != "income" ? "text-red-600" : "text-green-600"}`}>{formatCurrency(item.amount)}</span>
                                                        </td>
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <span className="font-medium">{moment(item.date).format('LL')}</span>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >

                <div className="w-6/12">
                    <div className='transaction-wrapper'>
                        <div className="mt-14 w-full">
                            <div className='item-wrapper mb-6'>
                                <p className='text-sm font-medium text-gray-500'>Daftar Wallet</p>
                                <div className="rounded my-3">
                                    <table className="min-w-max w-full table-auto rounded-lg overflow-hidden">
                                        <thead>
                                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                <th className="py-3 px-6 text-left">Nama Wallet</th>
                                                <th className="py-3 px-6 text-left">Nominal</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-600 text-sm font-light bg-white">
                                            {
                                                wallets.length == 0 ? (
                                                    <tr className='border-b border-gray-200'>
                                                        <td className="py-3 px-6 text-center whitespace-nowrap" colSpan={4}>Data Masih Kosong</td>
                                                    </tr>
                                                ) : wallets.map((item, index) => (
                                                    <tr className={`${wallets.length - 1 != index ? "border-b" : ""} border-gray-200 hover:bg-gray-200 transition-colors duration-300`} key={index}>
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <span className="font-medium">{item.name}</span>
                                                        </td>
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <span className="font-medium">{formatCurrency(item.balance)}</span>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div>
        </>
    );
}
