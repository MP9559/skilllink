import React, { useState } from 'react';

const Usertype = () => {
  const [selectedUserType, setSelectedUserType] = useState('employer');

  const handleUserTypeSelect = (type) => {
    setSelectedUserType(type);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row bg-white">
      {/* Left Section */}
      <div className="w-full lg:w-[52%] flex flex-col justify-end items-end px-4 sm:px-6 lg:px-12 py-6">
        <div className="w-full max-w-[740px] flex flex-col gap-[60px] sm:gap-[80px] lg:gap-[100px] mb-5">
          {/* Header */}
          <div className="w-full flex flex-col gap-[40px] sm:gap-[60px] lg:gap-[80px] px-2 sm:px-4 lg:px-0">
            <div className="w-full flex justify-center">
              <div className="flex flex-col gap-3 items-center">
                <div className="flex flex-col items-end">
                  <p className="text-[16px] lg:text-[20px] font-poppins text-black">
                    Sign up to
                  </p>
                  <h1 className="text-[26px] lg:text-[33px] font-roboto font-extrabold text-black -mt-2 lg:-mt-3 leading-tight">
                    <span className="text-[#4880ff]">Skill</span>Link
                  </h1>
                </div>
                <p className="text-[14px] lg:text-[16px] font-poppins text-[#8d8d8d] text-center max-w-[500px]">
                  Are you looking for a remote job or hiring remote talent?
                </p>
              </div>
            </div>

            {/* User Type Selection */}
            <div className="flex flex-col gap-5 pl-0 sm:pl-6 lg:pl-10">
              {/* Remote Worker */}
              <div 
                className={`flex gap-4 items-center w-full p-3 border rounded-lg cursor-pointer transition ${
                  selectedUserType === 'worker'
                    ? 'border-2 border-black'
                    : 'border border-[#e5e5e5] hover:border-gray-300'
                }`}
                onClick={() => handleUserTypeSelect('worker')}
              >
                <div className="w-[80px] h-[40px]">
                  <img 
                    src="/imggroup.png" 
                    alt="Remote worker avatars" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-[18px] font-poppins font-semibold text-black">
                    I am a remote worker
                  </h3>
                  <p className="text-[14px] text-black font-light">
                    I am an employee looking for a remote job
                  </p>
                </div>
                <div className="w-5 h-5 border border-[#e5e5e5] rounded-full mt-1">
                  {selectedUserType === 'worker' && (
                    <div className="w-full h-full bg-black rounded-full"></div>
                  )}
                </div>
              </div>

              {/* Employer */}
              <div 
                className={`flex gap-4 items-center w-full p-3 border rounded-lg cursor-pointer transition ${
                  selectedUserType === 'employer'
                    ? 'border-2 border-black'
                    : 'border border-[#e5e5e5] hover:border-gray-300'
                }`}
                onClick={() => handleUserTypeSelect('employer')}
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-[80px] h-[40px]">
                    <img 
                      src="/imggroup.png" 
                      alt="Employer avatars" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-[18px] font-poppins font-semibold text-black">
                      I want to hire employees
                    </h3>
                    <p className="text-[14px] text-black font-light">
                      I am an employer hiring remote talent
                    </p>
                  </div>
                </div>
                <div className="w-5 h-5 bg-black rounded-full p-1 mt-1">
                  <img src="/img_group_1.svg" alt="" />
                </div>
              </div>
            </div>

            {/* Sign In Link */}
            <div className="flex justify-center lg:justify-start lg:mr-16">
              <p className="text-[14px] lg:text-[16px] font-poppins text-black text-center">
                Already have an account?{' '}
                <span className="text-[#4880ff] font-medium cursor-pointer hover:underline">
                  Register
                </span>
              </p>
            </div>
          </div>

          {/* Terms */}
          <div className="px-2 sm:px-4 lg:px-0">
            <p className="text-[13px] lg:text-[15px] font-poppins text-[#8d8d8d] text-center lg:text-left">
              By registering, you agree to our{' '}
              <span className="text-[#4880ff] cursor-pointer hover:underline">
                terms and conditions
              </span>{' '}
              and{' '}
              <span className="text-[#4880ff] cursor-pointer hover:underline">
                privacy policy
              </span>.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[48%] flex justify-end">
        <div className="w-full lg:w-[92%] bg-[#004949] flex flex-col justify-center items-center px-6 sm:px-8 lg:px-14 py-10 lg:py-[60px] min-h-[300px] lg:min-h-screen">
          <div className="max-w-[500px]">
            <p className="text-[18px] lg:text-[22px] font-poppins font-semibold text-white text-center mb-[80px]">
              <span className="text-[#4880ff]">Skill</span>
              Link is the best place to find remote talent. We have been super impressed by the quality of applicants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usertype;
