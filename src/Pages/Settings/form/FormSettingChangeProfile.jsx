import { profileUser, updateProfileUser } from '@/Services/API/AuthenticationAPI';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const FormSettingChangeProfile = () => {
    const navigate = useNavigate();

    const [state, setState] = React.useState({
        name: "",
        gender: "",
        phone: ""
    });

    const getProfileData = async () => {
        const res = await profileUser();
        setState({ ...res, name: res.user.name, gender: res.user.gender, phone: res.user.phone });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await updateProfileUser(state)

            if (res.status == 201 || res.status == 200) {
                toast.success('Berhasil Memperbarui Profile !', {
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

    React.useEffect(() => {
        getProfileData();
    }, []);

    return (
        <div className='py-14 px-16 w-full'>
            <p className='text-2xl text-blue-700 mb-8'>Setting</p>

            <div className="w-8/12">
                <div className='bg-white w-full min-w-full px-8 py-4 rounded-lg'>
                    <h3 className='text-xl font-medium text-blue-600 mb-4'>Profile Setting</h3>
                    <form onSubmit={onSubmit} method="post">
                        <div className="mb-4">
                            <label htmlFor="name" className='text-sm capitalize block text-gray-600 mb-1.5'>Nama Lengkap</label>
                            <input value={state.name} required onChange={(e) => onChangeInput(e)} type="text" name="name" id="name" className='p-2 border rounded-md w-full' />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className='text-sm capitalize block text-gray-600 mb-1.5'>Nomer Telepon</label>
                            <input value={state.phone} required onChange={(e) => onChangeInput(e)} type="tel" name="phone" id="phone" className='p-2 border rounded-md w-full' />
                        </div>
                        <div className="mb-4 gap-x-4">
                            <label htmlFor="gender" className='text-sm capitalize block text-gray-600 mb-1.5'>Jenis Kelamin</label>

                            <div className="flex items-center gap-x-4">
                                {
                                    setState.gender == "" ? (
                                        <>
                                            <div className="flex items-center gap-x-2">
                                                <input type="radio" name="gender" id="male" value="male" onChange={(e) => onChangeInput(e)} />
                                                <label htmlFor="male">Laki-Laki</label>
                                            </div>
                                            <div className="flex items-center gap-x-2">
                                                <input type="radio" name="gender" id="female" value="female" onChange={(e) => onChangeInput(e)} />
                                                <label htmlFor="female">Perempuan</label>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex items-center gap-x-2">
                                                <input type="radio" name="gender" checked={state.gender === "male"} id="male" value="male" onChange={(e) => onChangeInput(e)} />
                                                <label htmlFor="male">Laki-Laki</label>
                                            </div>
                                            <div className="flex items-center gap-x-2">
                                                <input type="radio" name="gender" checked={state.gender === "female"} id="female" value="female" onChange={(e) => onChangeInput(e)} />
                                                <label htmlFor="female">Perempuan</label>
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button type='submit' className='py-2 px-3 rounded-full bg-blue-500 text-white font-semibold mt-3'>
                                Simpan Perubahan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default FormSettingChangeProfile