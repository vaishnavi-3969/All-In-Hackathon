import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

const Homepage = () => {
    const { loginWithPopup, isAuthenticated } = useAuth0();
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();

    const handleLoginAsJobSeeker = () => {
        loginWithPopup({
            screen_hint: 'login',
            login_hint: 'job_seeker',
        });
    };

    const handleLoginAsEmployer = () => {
        loginWithPopup({
            screen_hint: 'login',
            login_hint: 'employer',
        });
    };

    const handleRegister = () => {
        loginWithPopup({
            screen_hint: 'signup',
        });
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    if (isAuthenticated) {
        navigate('/user_type');
    }

    return (
        <div className={`bg-${darkMode ? 'black' : 'white'} font-family-karla h-screen text-${darkMode ? 'white' : 'black'}`}>
            <div className="w-full flex flex-wrap">
                <div className="w-full md:w-1/2 flex flex-col">
                    <div className={`flex flex-row justify-between md:justify-start pt-12 md:pl-12 md:-mb-24`}>
                        <div>
                            <a href="#" className={`text-${darkMode ? 'white' : 'black'} font-bold text-xl p-4`}>
                                Logo
                            </a>
                            <Link to="/about" className={`text-${darkMode ? 'white' : 'black'} font-bold text-xl p-4`}>About</Link>
                        </div>
                        <button onClick={toggleDarkMode} className={`bg-${darkMode ? 'white' : 'black'} text-${darkMode ? 'black' : 'white'} p-2`}>
                            {darkMode ? <RiSunFill /> : <RiMoonFill />}
                        </button>
                    </div>
                    <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <p className={`text-center text-3xl`}>Welcome to "EquiHire".</p>
                        <button
                            className={`bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'} font-bold text-lg p-2 mt-8 ${darkMode ? 'border border-white' : 'border'} cursor-pointer hover:bg-${darkMode ? 'gray-100' : 'gray-100'} hover:text-${darkMode ? 'black' : 'white'}`}
                            onClick={handleLoginAsJobSeeker}
                        >
                            {darkMode ? 'Log In as Job Seeker' : 'Log In as Job Seeker'}
                        </button>
                        <button
                            className={`bg-${darkMode ? 'white' : 'black'} text-${darkMode ? 'black' : 'white'} font-bold text-lg p-2 mt-4 ${darkMode ? 'border border-white' : 'border'} cursor-pointer hover:bg-${darkMode ? 'gray-100' : 'gray-700'} hover:text-${darkMode ? 'black' : 'white'}`}
                            onClick={handleLoginAsEmployer}
                        >
                            {darkMode ? 'Log In as Employer' : 'Log In as Employer'}
                        </button>
                        <div className="text-center pt-12 pb-12">
                            <p>
                                Don't have an account?{' '}
                                <button
                                    onClick={handleRegister}
                                    className="underline font-semibold"
                                >
                                    Register here.
                                </button>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-1/2 shadow-2xl">
                    <div className="h-screen flex items-center justify-center">
                        <img
                            src="Hero.svg"
                            alt="Hero Image"
                            className="h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
