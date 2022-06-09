import React, { useState } from 'react';
import logo from '../../assets/icons/logo.png';
const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <div>
            <div class="navbar bg-white">
                <div class="navbar-start">
                    <a class="btn btn-ghost normal-case text-xl">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div class="navbar-center gap-2 w-1/3">
                    <div class="form-control relative">
                        <input type="text" placeholder="Search for your favorite groups in ATG" class="input input-bordered rounded-full input-sm pl-10 w-96 bg-[#F2F2F2]" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-2 top-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
                <div class="navbar-end dropdown dropdown-end flex justify-end">
                    <label tabindex="0" class="btn btn-link hover:no-underline text-black avatar flex space-x-4 w-full">
                        {
                            loggedIn ? <>
                                <div class="w-10 rounded-full">
                                    <img src="https://api.lorem.space/image/face?hash=33791" />
                                </div>
                                <p>Mahfuz Swaron</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </>
                                :
                                <>
                                    <p className="normal-case">Create account, <span className='text-[#2F6CE5]'>It's free!</span></p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </>
                        }
                    </label>
                    <ul tabindex="0" class="mt-36 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        {
                            loggedIn ?
                                <>
                                    <li>
                                        <a class="justify-between">
                                            Profile
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li onClick={() => setLoggedIn(false)}><a>Logout</a></li>
                                </>
                                :
                                <>
                                    <li><a class="justify-between">
                                        Log in
                                    </a></li>
                                    <li><a onClick={() => setLoggedIn(true)} class="justify-between">
                                        Sign Up
                                    </a></li>

                                </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;