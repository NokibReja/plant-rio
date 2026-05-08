import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Register = () => {
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)

    const { createUser, setUser, updateUser } = use(AuthContext)

    const handlEye = () => {
        setShow(!show)
    }

    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target

        const name = form.name.value
        if (name.length < 5) {
            return setError('Name should be more than 5 character')
        }

        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value

        // console.log(name, photo, email, password)
        setError('')

        const casePattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;


        if (!casePattern.test(password)) {
            setError('Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one special character.')
            return
        }
        setError('')
        createUser(email, password)
            .then(result => {
                const user = result.user

                navigate('/')
                updateUser({ displayName: name, photoURL: photo })
                    .than(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        // console.log('User update kora hoiyeche')
                    })
                    .catch(error => {
                        // console.log(error)
                        setUser(user)
                        setError(error.message)
                    })

                // console.log('user create hoiche', result.user)
            })
            .catch(error => {
                // console.log("dur error kahichi", error.code)
                setError(error.message)
            })


    }


    return (
        <div className='w-11/12 mx-auto'>
            <div className="hero bg-base-200 min-h-screen">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl font-bold text-center mt-2">Register now</h1>
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                {/* NAME field */}
                                <label className="label">Name</label>
                                <input
                                    name='name'
                                    type="text"
                                    className="input"
                                    placeholder="Name"
                                    required />

                                {/* photo field */}
                                <label className="label">PhotoURL</label>
                                <input
                                    name='photo'
                                    type="text"
                                    className="input"
                                    placeholder="PhotoURL"
                                    required />

                                {/* Email field */}
                                <label className="label">Email</label>
                                <input
                                    name='email'
                                    type="email"
                                    className="input"
                                    placeholder="Email"
                                    required />

                                {/* password field */}
                                <label className="label">Password</label>
                                <div className='flex relative'>
                                    <input
                                        name='password'
                                        type={show ? 'text' : "password"}
                                        className="input"
                                        placeholder="Password"
                                        required />
                                    <span onClick={handlEye} className='absolute top-2 right-6 text-xl'>
                                        {show ?
                                            <FaRegEyeSlash className=''></FaRegEyeSlash>
                                            :
                                            <FaRegEye  ></FaRegEye>
                                        }

                                    </span>
                                </div>

                                {
                                    error && <p className='text-red-500'>{error}</p>
                                }

                                <button type='submit' className="btn btn-neutral mt-4">Register</button>

                                <p>Alredy have an account? Please <Link to='/login' className='text-blue-500 hover:underline'>Login</Link></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;