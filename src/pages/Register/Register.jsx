import React, { useContext, useState } from 'react';
import loginImg from '../../assets/images/login-2.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    useTitle('Register');

    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { createUser, updateUser, logOut } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;

        // console.log(name, photo, email, password, role);

        setError('');
        setSuccess('');

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setSuccess('User Registered Successfully...');

                handleUpdateUser(createdUser, name, email, photo, role);

                form.reset();
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            });
    }

    const handleUpdateUser = (user, name, email, photo, role) => {
        updateUser(user, name, photo)
            .then(() => {
                const savedUser = { name: name, email: email, profilePic: photo, role: role};
                // console.log(savedUser);
                fetch('https://toy-marketplace-server-gray-beta.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.insertedId) {
                            logOut()
                                .then(() => {
                                    navigate('/login');
                                })
                                .catch(error => console.log(error));
                        }
                    })
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            });
    }

    return (
        <div className="hero pt-7 pb-20 bg-yellow-100 px-4 lg:px-0">
            <div className="hero-content flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2">
                    <img src={loginImg} alt="login" />
                </div>
                <div className="card flex-shrink-0 w-full md:w-1/2 shadow-lg border-2 bg-base-100">
                    <div className="card-body">
                        <div className="flex flex-col items-center text-center gap-5 mb-2">
                            <h3 className="text-3xl font-medium">Register</h3>
                        </div>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Role</span>
                                </label>
                                <select name="role" className="select select-bordered">
                                    <option value="User">User</option>
                                    <option value="Owner">Owner</option>
                                </select>
                            </div>

                            <p className="font-medium text-lg text-red-500 mt-1">{error}</p>
                            <p className="font-medium text-lg text-green-600 mt-1">{success}</p>

                            <div className="form-control mt-6">
                                <input type="submit" value="Register" className="btn btn-warning text-lg capitalize" />
                            </div>
                        </form>
                        <p className="text-center mt-6 text-lg font-medium">
                            Already Have An Account?
                            <Link to="/login" className="text-orange-600 ms-2 font-semibold text-xl">Login.</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register; <h2>Register</h2>