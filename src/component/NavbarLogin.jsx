import { useState, useRef, useEffect } from 'react';
import { MdNotificationsNone, MdOutlineSearch, MdOutlineLogout, MdSettings } from 'react-icons/md';
import { RiHome3Line } from "react-icons/ri";
import { FaRegHeart } from 'react-icons/fa';
import { LuMessageCircleMore } from 'react-icons/lu';
import { FiBox } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import Dropdown from './DropDown';

const NavbarLogin = () => {
  const [hover, setHover] = useState(false);
  const [activePopup, setActivePopup] = useState(null);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  const togglePopup = (type) => {
    setActivePopup((prev) => (prev === type ? null : type));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActivePopup(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProfileItemClick = (label) => {
    if (label === "Settings") {
      navigate("/settings");
    } else if (label === "Logout") {
      const confirmed = window.confirm("Are you sure you want to log out?");
      if (confirmed) {
        navigate("/");
      }
    } else if (label === "Dashboard") {
      navigate("/dashboard");
    }
    setActivePopup(null);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-between bg-[#145959] px-6 py-4 my-4 rounded-2xl lg:h-24 w-full max-w-[1340px] relative">
        {/* Logo&Search */}
        <div className="flex items-center gap-4 lg:gap-20 w-full lg:w-auto mb-4 lg:ml-15 lg:mb-0">
          <div className="flex justify-center items-center">
            <img src="/icon.png" alt="Logo" className="h-12 w-12" />
          </div>

          <div className="flex items-center border pl-4 gap-2 bg-white border-gray-300 h-[50px] rounded-xl overflow-hidden w-full lg:w-[420px]">
            <input
              type="text"
              placeholder="Search for Freelancers or Services"
              className="w-full h-full font-poppins outline-none text-sm text-gray-500"
            />
            <button
              type="submit"
              className="flex justify-center items-center bg-[#2E90EB] px-4 h-full cursor-pointer rounded text-white"
            >
              <MdOutlineSearch className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6 mt-4 lg:mt-0 relative" ref={dropdownRef}>
          {/* Notification */}
          <div className="relative cursor-pointer" onClick={() => togglePopup('notifications')}>
            <MdNotificationsNone className="w-7 h-7 text-white" />
            <span className="absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full"></span>
            {activePopup === 'notifications' && (
              <Dropdown title="Notifications" items={["New message from Matin 🤨", "Wow! 🥹", "Payment received 🥸"]}/>
            )}
          </div>

          {/* favorites */}
          <div className="relative cursor-pointer" onClick={() => togglePopup('favorites')}>
            <FaRegHeart className="w-7 h-7 text-white" />
            {activePopup === 'favorites' && (
              <Dropdown title="Favorites" items={["No favorite items yet. 😁"]} />
            )}
          </div>

          {/* Messages
          <div className="relative cursor-pointer" onClick={() => togglePopup('messages')}>
            <LuMessageCircleMore className="w-7 h-7 text-white" />
            {activePopup === 'messages' && (
              <Dropdown title="Messages" items={["No new messages. ☹️"]}/>
            )}
          </div> */}

         {/* Order */}
          <div className="relative">
            <button
              onClick={() => togglePopup('order')}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className={`border flex items-center gap-2 border-white px-5 py-2 rounded-xl transition duration-300
                ${hover ? "bg-white text-[#145959]" : "bg-[#145959] text-white"}`}
            >
              <img
                src={hover ? "/orderblue.svg" : "/order.svg"}
                alt="order"
                className="w-6 h-6"
              />
              Order
            </button>
            {activePopup === 'order' && (
              <Dropdown title="Orders" items={["No current orders. 😏"]} icon={<FiBox />} />
            )}
          </div>

          {/* Profile */}
          <div className="relative cursor-pointer mr-6" onClick={() => togglePopup('profile')}>
            <img src="/profile.png" alt="Profile" className="w-12 h-12 rounded-full" />
            <span className="absolute bottom-0 right-0 block h-4 w-4 bg-green-500 border-2 border-white rounded-full"></span>
            {activePopup === 'profile' && (
              <Dropdown
                title="Account"
                items={[
                  { label: "Dashboard", icon: <RiHome3Line /> },
                  { label: "Settings", icon: <MdSettings /> },
                  { label: "Logout", icon: <MdOutlineLogout />, danger: true },
                ]}
                isProfile
                onItemClick={handleProfileItemClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

<Dropdown />

export default NavbarLogin;
