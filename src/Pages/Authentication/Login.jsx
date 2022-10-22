import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { loginUser } from '../../Services/API/AuthenticationAPI';
import { authState } from '../../Services/Store/auth';

const Login = () => {
    const setAuth = useSetRecoilState(authState);
    const [state, setState] = React.useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const res = await loginUser(state);

        if (res.status == 201 || res.status == 200) {
            localStorage.setItem("_token", res.data.data.access_token);

            toast.success('Login Berhasil !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setAuth({ auth: true, user: res.data.data.user });

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
    }
    return (
        <div className='min-h-screen bg-gradient-to-b from-blue-700 to-sky-700 flex items-center justify-center'>
            <div className="w-full">
                <div className="w-full relative mx-auto max-w-xl">
                    <div className='inline-flex gap-2 items-center justify-center mb-5 w-full'>
                        <img src="/logo/pawang.svg" alt="Logo Pawang" className='w-10 h-10' />
                        <p className='text-white text-2xl font-semibold'>Pawang</p>
                    </div>
                    <div className='relative border p-6 rounded-xl bg-white shadow-md'>
                        <div className="mb-3">
                            <h1 className="text-lg font-medium text-gray-900 text-muted mb-0.5">
                                Masuk ke akun Anda
                            </h1>
                            <p className='text-gray-700'>Tidak punya akun ? <Link to="/register" className='text-medium text-blue-600 underline'>Daftar disini</Link></p>
                        </div>
                        <form method='POST' onSubmit={onSubmit}>
                            <div className="mb-6">
                                <label htmlFor="email" className='text-sm capitalize block text-gray-600 mb-1.5'>Email</label>
                                <input required onChange={(e) => onChange(e)} type="email" name="email" id="email" className='block w-full border bg-gray-50 placeholder-gray-500 shadow-sm border-gray-300 focus:outline-none focus:ring focus:ring-blue-500/20 caret-current p-2 rounded-lg' />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className='text-sm capitalize block text-gray-600 mb-1.5'>Password</label>
                                <input required onChange={(e) => onChange(e)} type="password" name="password" id="password" className='block w-full border bg-gray-50 placeholder-gray-500 shadow-sm border-gray-300 focus:outline-none focus:ring focus:ring-blue-500/20 caret-current p-2 rounded-lg' />
                            </div>
                            <div className='flex justify-end'>
                                <a href="/" className='font-medium text-blue-600 capitalize'>Lupa kata sandi</a>
                            </div>
                            <div>
                                <button className='px-4 py-2 bg-blue-500 text-sm font-medium text-white rounded-lg shadow hover:bg-blue-600 transition duration-200 ease-in-out'>Masuk</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login