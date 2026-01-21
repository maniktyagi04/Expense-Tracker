import React, { useContext, useRef } from 'react';
import { SIDE_MENU_DATA } from '../../utils/data';
import { UserContext } from '../../context/UserContext';
import { ThemeContext } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import CharAvatar from '../Cards/CharAvatar';
import { LuMoon, LuSun, LuCamera } from 'react-icons/lu';
import uploadImage from '../../utils/uploadImage';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import toast from 'react-hot-toast';

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser, updateUser } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleClick = (route) => {
    if (route === "/logout") {
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };

  const handleProfilePhotoChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const uploadRes = await uploadImage(file);
      const imageUrl = uploadRes.imageUrl;

      const response = await axiosInstance.put(API_PATHS.AUTH.UPDATE_PROFILE || "/api/v1/auth/update-profile", {
        profileImageUrl: imageUrl,
      });

      if (response.data) {
        updateUser(response.data.user);
        toast.success("Profile photo updated successfully");
      }
    } catch (error) {
      console.error("Error updating profile photo:", error);
      toast.error("Failed to update profile photo");
    }
  };

  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white dark:bg-gray-900 border-r border-gray-200/50 dark:border-gray-800 p-5 sticky top-[61px] z-20 flex flex-col transition-colors duration-300">
      <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7 relative group">
        <div className="relative">
          {user?.profileImageUrl ? (
            <img
              src={user?.profileImageUrl || ""}
              alt="Profile Image"
              className="w-20 h-20 bg-slate-400 rounded-full object-cover"
            />
          ) : (
            <CharAvatar
              fullName={user?.fullName}
              width="w-20"
              height="h-20"
              style="text-xl"
            />
          )}

          <button
            onClick={() => fileInputRef.current.click()}
            className="absolute bottom-0 right-0 p-1.5 bg-primary text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
          >
            <LuCamera size={14} />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleProfilePhotoChange}
            className="hidden"
            accept="image/*"
          />
        </div>

        <h5 className="text-gray-950 dark:text-white font-medium leading-6">
          {user?.fullName || ""}
        </h5>
      </div>

      <div className="flex-1">
        {SIDE_MENU_DATA.map((item, index) => (
          <button
            key={`menu_${index}`}
            className={`w-full flex items-center gap-4 text-[15px] ${
              activeMenu === item.label
                ? "text-white bg-primary shadow-lg shadow-primary/20"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
            } py-3 px-6 rounded-lg mb-3 transition-all duration-200`}
            onClick={() => handleClick(item.path)}
          >
            <item.icon className="text-xl" />
            {item.label}
          </button>
        ))}
      </div>

      <button
        onClick={toggleTheme}
        className="w-full flex items-center gap-4 text-[15px] text-gray-600 dark:text-gray-400 py-3 px-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
      >
        {theme === 'light' ? <LuMoon className="text-xl" /> : <LuSun className="text-xl" />}
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
};

export default SideMenu;
