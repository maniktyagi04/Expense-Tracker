import React from 'react';
import {LuTrendingUpDown} from 'react-icons/lu';

const AuthLayout = ({children}) => {
  return  <div className='flex w-full h-screen overflow-hidden'>
      <div className='w-full md:w-[50vw] lg:w-[60vw] h-full flex flex-col justify-center px-8 md:px-12 lg:px-20 bg-white z-10'>
        <h2 className='absolute top-8 left-8 md:left-12 text-2xl font-bold bg-gradient-to-r from-primary to-purple-800 bg-clip-text text-transparent'>Expense Tracker</h2>
        {children}
      </div>

      <div className='hidden md:flex w-[50vw] lg:w-[40vw] h-screen bg-gradient-to-br from-primary via-purple-700 to-purple-900 relative items-center justify-center'>
        <div className='absolute inset-0 bg-black/10'></div>
        <div className='w-96 h-96 rounded-full bg-white/10 blur-3xl absolute -top-10 -right-10' />
        <div className='w-64 h-64 rounded-full bg-white/5 blur-2xl absolute bottom-10 left-10' />

        <div className='relative z-20 flex flex-col items-center gap-10 p-10'>
            <div className='bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl max-w-sm transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500'>
                <div className='flex items-center gap-4 mb-6'>
                    <div className='w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white'>
                        <LuTrendingUpDown size={24} />
                    </div>
                    <div>
                        <p className='text-xs text-purple-200'>Total Balance</p>
                        <h4 className='text-2xl font-bold text-white'>$430,000.00</h4>
                    </div>
                </div>
                <div className='w-full h-2 bg-white/10 rounded-full overflow-hidden'>
                    <div className='w-[70%] h-full bg-white rounded-full'></div>
                </div>
                <p className='text-xs text-purple-200 mt-4'>Manage your expenses smartly and save more for the future.</p>
            </div>
        </div>
      </div>
    </div>;
  
};

export default AuthLayout;

const StatsInfoCard = ({icon, label, value, color}) => {
    return <div className='flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-50'>
        <div className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
            {icon}
        </div>

        <div>
            <h6 className='text-xs text-gray-500 mb-1'>{label}</h6>
            <span className='text-[20px]'>${value}</span>
        </div>
    </div>
}
