import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const Input = ({value, onChange, placeholder, label, type}) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }
  return (
    <div className='mb-4'>
      <label className='text-[13px] text-slate-800 font-medium block mb-1.5'>{label}</label>

      <div className='input-box relative'>
        <input 
        type={type === "password" ? showPassword ? "text" : "password" : type}
        placeholder={placeholder}
        className='w-full bg-transparent outline-none text-sm text-slate-900 placeholder:text-slate-400'
        value={value}
        onChange={(e) => onChange(e)}
        />

        {type === "password" && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer p-1 rounded-full hover:bg-slate-100 transition-colors"
                onClick={() => toggleShowPassword()}
            >
                {showPassword ? (
                    <FaRegEye size={18} className="text-primary"/>
                ) : (
                    <FaRegEyeSlash size={18} className="text-slate-400"/>
                )}
            </div>
        )}
      </div>
    </div>
  )
}

export default Input
