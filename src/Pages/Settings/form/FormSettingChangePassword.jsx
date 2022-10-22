import { updatePassword } from '@/Services/API/AuthenticationAPI';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const FormSettingChangePassword = () => {
    const navigate = useNavigate();

    const [state, setState] = React.useState({
        old_password: "",
        new_password: "",
        new_password_confirm: ""
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await updatePassword(state)

            if (payloadPassword.new_password !== payloadPassword.new_password_confirm) {
                toast.error('Password Baru Tidak Sama Dengan Password Konfirmasi !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }

            if (res.status == 201 || res.status == 200) {
                toast.success('Berhasil Mengganti Password !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                navigate('/', { replace: true });
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
        }
    }


    const onChangeInput = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    return (
        <div className='py-14 px-16 w-full'>
            <p className='text-2xl text-blue-700 mb-8'>Setting</p>

            <div className="w-8/12 mt-6">
                <div className='bg-white w-full min-w-full px-8 py-4 rounded-lg'>
                    <h3 className='text-xl font-medium text-blue-600 mb-4'>Ganti Password</h3>
                    <form onSubmit={onSubmit} method="post">
                        <div className="mb-4">
                            <label htmlFor="old_password" className='text-sm capitalize block text-gray-600 mb-1.5'>Password Lama</label>
                            <input value={state.old_password} required onChange={(e) => onChangeInput(e)} type="password" name="old_password" id="old_password" className='p-2 border rounded-md w-full' />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="new_password" className='text-sm capitalize block text-gray-600 mb-1.5'>Password Baru</label>
                            <input value={state.new_password} required onChange={(e) => onChangeInput(e)} type="password" name="new_password" id="new_password" className='p-2 border rounded-md w-full' />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="new_password_confirm" className='text-sm capitalize block text-gray-600 mb-1.5'>Konfirmasi Password Baru</label>
                            <input value={state.new_password_confirm} required onChange={(e) => onChangeInput(e)} type="password" name="new_password_confirm" id="new_password_confirm" className='p-2 border rounded-md w-full' />
                        </div>
                        <div className="flex justify-end">
                            <button type='submit' className='py-2 px-3 rounded-full bg-blue-500 text-white font-semibold mt-3'>
                                Ganti Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div >
    )
}

export default FormSettingChangePassword