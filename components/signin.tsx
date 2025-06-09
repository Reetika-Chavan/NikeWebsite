import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios, { AxiosError } from 'axios';

interface LoginResponse {
  token: string;
  username: string;
  email: string;
}

interface ErrorResponse {
  message?: string;
}

const SigninPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/afterlogin');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post<LoginResponse>('/api/auth/login', {
        email,
        password,
      });
      console.log('Login Response:', response.data);
    
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        router.push('/afterlogin');
      }
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      setError(error.response?.data?.message || 'Login failed');
      console.error('Login Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-amber-800 bg-cover bg-center bg-no-repeat px-4 py-4 relative overflow-x-hidden">
      {/* Slogan Container - positioned with extreme margin to match original */}
      <div className="w-6 max-w-[50vw] text-center opacity-0 animate-pulse absolute top-0 right-0 transform translate-x-96 -translate-y-64 hidden lg:block">
        <img
          className="w-3 h-auto object-contain"
          src="./media/jdt.png"
          alt="Nike Slogan"
        />
      </div>

      {/* Sign In Card */}
      <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl min-h-96 sm:min-h-[500px] px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-20 mx-auto mt-8 sm:mt-16 lg:-mt-72 rounded-xl lg:rounded-2xl bg-white bg-opacity-15 backdrop-blur-xl border border-white border-opacity-20 shadow-2xl relative z-10">
        
        {/* Logo Container */}
        <div className="flex justify-center mb-6 sm:mb-8 lg:mb-10">
          <img 
            className="w-16 sm:w-24 lg:w-32 xl:w-36 h-auto object-contain opacity-0 animate-pulse" 
            src="/media/logo1.png" 
            alt="Nike Logo" 
          />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-center text-white mb-2 sm:mb-4 leading-tight tracking-tight -mt-2">
            IT'S BETTER AS
            <br />
            A MEMBER
          </h2>

          {/* Error Message */}
          {error && (
            <div className="text-red-400 text-center p-3 bg-red-500 bg-opacity-10 rounded-lg border border-red-500 border-opacity-20">
              {error}
            </div>
          )}

          {/* Input Group */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-4 rounded-xl bg-white bg-opacity-8 border-2 border-white border-opacity-20 text-white text-sm sm:text-base lg:text-xl placeholder-white placeholder-opacity-50 transition-all duration-300 focus:outline-none focus:border-white focus:border-opacity-40 focus:bg-white focus:bg-opacity-12 focus:ring-4 focus:ring-white focus:ring-opacity-10"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-4 rounded-xl bg-white bg-opacity-8 border-2 border-white border-opacity-20 text-white text-sm sm:text-base lg:text-xl placeholder-white placeholder-opacity-50 transition-all duration-300 focus:outline-none focus:border-white focus:border-opacity-40 focus:bg-white focus:bg-opacity-12 focus:ring-4 focus:ring-white focus:ring-opacity-10"
              required
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 text-sm sm:text-base lg:text-xl text-white text-opacity-90 my-3 sm:my-4 transition-colors duration-200 hover:text-amber-900">
            <label className="flex items-center gap-3 cursor-pointer text-white text-opacity-90">
              <input 
                type="checkbox" 
                className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded border-2 border-white border-opacity-40 cursor-pointer accent-amber-800"
              />
              Keep me signed in
            </label>
            <a 
              href="#" 
              className="text-white text-opacity-90 no-underline text-sm sm:text-base lg:text-xl transition-all duration-200 hover:text-amber-900 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full px-6 py-3 sm:px-8 sm:py-4 lg:px-8 lg:py-5 mt-3 sm:mt-4 bg-amber-100 text-amber-900 font-semibold text-base sm:text-lg border-none rounded-lg sm:rounded-xl cursor-pointer transition-all duration-300 hover:bg-amber-200 hover:-translate-y-1 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'SIGN IN'}
          </button>

          {/* Sign Up Text */}
          <div className="text-center text-sm sm:text-base lg:text-xl text-white text-opacity-80 mt-6 sm:mt-8">
            Not a Member?{' '}
            <Link 
              href="/signup" 
              className="text-white no-underline font-medium transition-all duration-200 hover:underline"
            >
              Join Us
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninPage