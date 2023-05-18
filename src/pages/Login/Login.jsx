import React, { useContext, useState } from 'react';
import loginImg from '../../assets/images/login-2.png';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { signInUser } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);

        setError('');
        setSuccess('');

        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('User Logged In Successfully...');
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            });

    }

    return (
        <div className="hero pt-14 pb-20 bg-base-100">
            <div className="hero-content flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2">
                    <img src={loginImg} alt="login" />
                </div>
                <div className="card flex-shrink-0 w-full md:w-1/2 shadow-lg border-2 bg-base-100">
                    <div className="card-body">
                        <div className="flex flex-col items-center text-center gap-5 mb-2">
                            <h3 className="text-3xl font-medium">Login</h3>
                        </div>
                        <form onSubmit={handleLogin}>
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

                            <p className="font-medium text-lg text-red-500 mt-1">{error}</p>
                            <p className="font-medium text-lg text-green-600 mt-1">{success}</p>

                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn btn-warning text-lg capitalize" />
                            </div>
                        </form>
                        <div className="divider my-5">Or</div>
                        <div className="flex justify-center">
                            <button className="btn bg-sky-600 hover:bg-sky-700 border-0 flex items-center gap-3 rounded-xl">
                                <FaGoogle className="text-xl font-bold" />
                                <span className="text-lg capitalize"> Sign In With Google</span>
                            </button>
                        </div>
                        <p className="text-center mt-6 text-lg font-medium">
                            Don't Have An Account?
                            <Link to="/register" className="text-orange-600 ms-2 font-semibold text-xl">Register.</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;