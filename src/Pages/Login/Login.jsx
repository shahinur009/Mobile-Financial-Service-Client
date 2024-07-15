import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className="hero bg-gray-600 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Mobile Number</span>
                            </label>
                            <input type="number" name="number" placeholder="Your Mobile Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Your PIN</span>
                            </label>
                            <input type="password" name="pin" placeholder="Your Pin" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Login</button>
                        </div>
                        <p className="items-center flex justify-center">Do not have account <Link to='/register' className="text-blue-600 underline ml-1">Register </Link></p>
                    </form>
                    <div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;