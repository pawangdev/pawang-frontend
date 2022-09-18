import axios from 'axios'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { authState } from '../../Services/Store/auth'

const Wallets = () => {
    const { user } = useRecoilValue(authState)
    const [wallets, setWallets] = React.useState([])

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
        dataWallets();
    }, [])
    return (
        <>
            <div className='py-14 px-16 w-6/12'>
                <p className='text-2xl text-blue-700'>Wallets</p>

                <div className="grid grid-cols-2 gap-x-2">
                    {
                        wallets.map((item, index) => {
                            return (
                                <div className="card-wrapper" key={index}>
                                    <div className="bg-blue-600 h-48 mt-7 rounded-2xl relative overflow-hidden">
                                        <div className='absolute z-20 p-5 min-w-full flex flex-col justify-between min-h-full'>
                                            <p className='text-white text-lg'></p>
                                            <div className='text-white'>
                                                <p className='text-sm'>{item.name}</p>
                                                <p className='text-lg'>Rp {item.balance}</p>
                                            </div>
                                        </div>
                                        <div className="h-64 w-64 bg-sky-900 rounded-full relative right-16 -top-4">
                                        </div>
                                        <div className="h-44 w-44 bg-teal-400 absolute z-10 -top-12 -right-16 rounded-full">
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div >
        </>
    )
}

export default Wallets