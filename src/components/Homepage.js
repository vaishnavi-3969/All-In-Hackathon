import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Homepage = () => {
  const { loginWithPopup, isAuthenticated } = useAuth0();

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

  return (
    <div className="bg-white font-family-karla h-screen text-black">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-row justify-between md:justify-start pt-12 md:pl-12 md:-mb-24">
            <div>
              <a href="#" className="text-black font-bold text-xl p-4">
                Logo
              </a>
              <Link to="/about" className="text-black font-bold text-xl p-4">About</Link>
            </div>
          </div>
          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl">Welcome to "EquiHire".</p>
            <button
              className="bg-white text-black font-bold text-lg p-2 mt-8 border cursor-pointer hover:bg-gray-100 hover:text-black"
              onClick={handleLoginAsJobSeeker}
            >
              Log In as Job Seeker
            </button>
            <button
              className="bg-black text-white font-bold text-lg p-2 mt-4 border cursor-pointer hover:bg-gray-700 hover:text-white"
              onClick={handleLoginAsEmployer}
            >
              Log In as Employer
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
