import { formatCurrency } from '@/Utils/formatter'
import React from 'react'

export const WalletCard = ({ wallet }) => {
    return (
        <div className="bg-blue-600 h-48 mt-7 rounded-2xl relative overflow-hidden">
            <div className='absolute z-20 p-5 min-w-full flex flex-col justify-between min-h-full'>
                <p className='text-white text-lg'></p>
                <div className='text-white'>
                    <p className='text-sm capitalize'>{wallet.name != null ? wallet.name : '-'}</p>
                    <p className='text-lg'>{wallet.balance != null ? formatCurrency(wallet.balance) : '-'}</p>
                </div>
            </div>
            <div className="h-64 w-64 bg-sky-900 rounded-full relative right-16 -top-4">
            </div>
            <div className="h-44 w-44 bg-teal-400 absolute z-10 -top-12 -right-16 rounded-full">
            </div>
        </div>
    )
}
