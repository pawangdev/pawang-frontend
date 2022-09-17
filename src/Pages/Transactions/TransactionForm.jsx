import React from 'react'

export const TransactionForm = () => {
    const [state, setState] = React.useState({
        amount: 0,
        category_id: 0,
        sub_category_id: 0,
        wallet_id: 0,
        type: "",
        description: "",
        date: "",
    })

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
        console.log(state);
    }
    return (
        <div className='py-14 px-16 w-6/12'>
            <p className='text-2xl text-blue-700'>Transaction Pemasukan</p>

            <div className='form-wrapper mt-3'>
                <form>
                    <div className='mb-3'>
                        <p className='text-gray-600 font-light mb-2'>Jumlah Transaksi</p>
                        <input name='amount' type="number" className='p-2 border rounded-md w-full' placeholder='Jumlah Transaksi' onChange={(e) => onChange(e)} />
                    </div>
                    <div className='mb-3'>
                        <p className='text-gray-600 font-light mb-2'>Kategori</p>
                        <input name='category_id' type="text" className='p-2 border rounded-md w-full' placeholder='Kategori' onChange={(e) => onChange(e)} />
                    </div>
                    <div className='mb-3'>
                        <p className='text-gray-600 font-light mb-2'>Wallet</p>
                        <input name='wallet_id' type="text" className='p-2 border rounded-md w-full' placeholder='Wallet' onChange={(e) => onChange(e)} />
                    </div>
                    <div className='mb-3'>
                        <p className='text-gray-600 font-light mb-2'>Deskripsi</p>
                        <textarea name="description" id="description" cols="30" rows="2" placeholder='Deskripsi' className='p-2 border rounded-md w-full' onChange={(e) => onChange(e)}></textarea>
                    </div>
                    <div className='mb-3'>
                        <p className='text-gray-600 font-light mb-2'>Tanggal & Jam</p>
                        <input name='date' type="datetime-local" className='p-2 border rounded-md w-full' placeholder='Tanggal & Jam' onChange={(e) => onChange(e)} />
                    </div>
                    <button className='py-3 px-6 rounded-full bg-blue-500 text-white font-semibold float-right mt-3'>
                        Tambah Pemasukan
                    </button>
                </form>

            </div>


        </div>
    )
}
