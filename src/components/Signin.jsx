import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // To display error messages

  const handleClick = () => {
    // Simple validation: check if email and password are not empty
    if (!email || !password) {
      setError('Please enter both email and password.');
      return; // Do not navigate if validation fails
    }

    const userData = {
      username: 'JohnDoe',
      loggedIn: true
    };

    localStorage.setItem('userInfo', JSON.stringify(userData));
    navigate('/onboarding1A');
  };

  return (
    <div>
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-sm text-typography-grey-dark font-lato">
        <div className="w-[510px] rounded-xl bg-white flex flex-col items-center justify-start p-[30px] box-border gap-[30px] max-w-full">
          <div className="flex flex-col items-center justify-start gap-[20px]">
            <div className="relative text-lg font-semibold inline-block min-w-[100px] h-7">
              
              Welcome
            </div>
            <div className="relative text-base leading-[150%] text-typography-grey-main">
              Sign In for Seamless Experiences!
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[150%] font-medium inline-block min-w-[34px]">
              Email
            </div>
            <input
              required
              type="email"
              placeholder="Enter your email ID"
              className="self-stretch rounded-md bg-white box-border py-3 px-[15px] max-w-full border-[1px] border-solid border-neutral-300 text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[150%] font-medium inline-block min-w-[60px]">
              Password
            </div>
            <input
              required
              type="password"
              placeholder="Enter your password"
              className="self-stretch rounded-md bg-white box-border py-[15px] px-4 max-w-full border-[1px] border-solid border-neutral-300 text-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
          <div className="self-stretch flex flex-col items-center justify-start gap-[10px] text-base text-gray-400">
            <button onClick={handleClick} className="cursor-pointer [border:none] py-3 px-5 bg-typography-grey-light self-stretch rounded-lg flex flex-row items-center justify-center">
              <div className="relative text-base leading-[150%] font-semibold font-text-md-semibold text-typography-grey-main text-left inline-block min-w-[51px]">
                Sign In
              </div>
            </button>
            <div className="flex flex-row items-start justify-start">
              <div className="relative leading-[150%] inline-block min-w-[125px]">
                Forgot Password?
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signin;
