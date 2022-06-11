import React from 'react';

const SignIn = () => {
    return (
        <div className='w-full'>
            <div class="modal " id="sign-in-modal">
                {/* <input type="checkbox" id="sign-in-modal" class="modal-toggle" /> */}
                <div class="modal-box bg-white rounded pt-0 px-0 w-7/12 max-w-5xl">
                    <div className='bg-[#EFFFF4]'>
                        <p className='text-[#008A45] text-center py-5'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                    </div>

                    <div className='flex justify-evenly mt-5 px-10'>
                        <div className='w-1/2'>
                            <h3 className="text-left font-bold text-3xl text-black">
                                Sign In
                            </h3>
                            <div className='grid grid-cols-1 relative my-5 '>
                                <input className='input rounded-none bg-[#F7F8FA] border-[#D9D9DB]' type="email" name="" id="" placeholder='Email Adress' />
                                <input className='input rounded-none bg-[#F7F8FA] border-[#D9D9DB]' type="password" name="" id="" placeholder='Password' />

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute bottom-14 right-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <input className='input rounded-none bg-[#F7F8FA] border-[#D9D9DB]' type="password" name="" id="" placeholder='Confirm Password' />
                            </div>

                            <div class="modal-action">
                                <label for="sign-in-modal" class="btn rounded-full w-full text-white border-none bg-[#2F6CE5]"><a href="#">Sign In</a></label>
                            </div>
                            <div className='mt-7'>
                                <button className="btn btn-outline rounded-none normal-case my-2 w-full text-black border-[#D9D9DB]">
                                    <img className='mr-2' src="../../../assets/icons/f_logo_RGB-Blue_1024.png" alt="" />
                                    Sign in with Facebook
                                </button>
                                <button className="btn btn-outline rounded-none normal-case my-2 w-full text-black border-[#D9D9DB] ">
                                    <img className='mr-2' src="../../../assets/icons/google.png" alt="" />
                                    Sign in with Google
                                </button>
                                <p className='font-bold text-sm text-black my-3 text-center btn-link'>Forgotten password?</p>
                            </div>
                        </div>
                        <div className='mt-3  mr-3'>
                            <p className='text-right'>Don't have an account? <span className='btn-link'><a href="#my-modal-2"> Create new for free!</a></span></p>
                            <img src="https://i.ibb.co/XtF67pY/atg-illustrationsignup-vector.png" alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default SignIn;