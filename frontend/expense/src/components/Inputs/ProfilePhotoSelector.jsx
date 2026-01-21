import React from 'react';
import { useRef, useState } from 'react';
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({image, setImage}) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  }

    const DEFAULT_PROFILE_IMAGE = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

    return (
    <div className='flex justify-center mb-6'>
      <input
            type='file'
            accept='image/*'
            ref={inputRef}
            onChange={handleImageChange}
            className='hidden'
            />

    {!image ? (
      <div className='relative'>
           <img
            src={DEFAULT_PROFILE_IMAGE}
            alt='default profile photo'
            className='w-20 h-20 rounded-full object-cover border-2 border-primary/10'
            />

      <button 
      type='button'
      className='w-8 h-8 items-center justify-center bg-primary text-white rounded-full absolute -bottom-1 -right-1 flex shadow-lg'
      onClick={onChooseFile}>
        <LuUpload size={14} />
      </button>
      </div>
    ) : (
      <div className='relative'>
          <img
          src={previewUrl}
          alt='profile photo'
          className='w-20 h-20 rounded-full object-cover'
          />

        <button
        type='button'
        className='w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 -right-1'
        onClick={handleRemoveImage}>
          <LuTrash />
        </button>
      </div>
    )}
    </div>)
  
}

export default ProfilePhotoSelector