import { IoSearch } from "react-icons/io5";

const NavbarLogin = () => {
  return (
    <div className="flex items-center bg-[#145959] mx-8 m-8 rounded-2xl w-360 h-24">
      <div>
        <img src="/icon.png" alt="Logo" className="h-21 p-6 m-10 w-21" />
      </div>
      <div className="flex items-center border pl-4 gap-2 bg-white border-gray-500/30 h-[60px] rounded-2xl overflow-hidden max-w-md w-full">
        <input
          type="text"
          placeholder="Search for Freelancers or Services"
          className="w-full h-full font-poppins outline-none text-sm text-gray-500"
        />
        <button
          type="submit"
          className="flex justify-center items-center bg-[#2E90EB] w-22 h-full rounded text-sm text-white"
        >
          <IoSearch className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default NavbarLogin;
