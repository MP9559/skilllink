import React, { useState } from 'react';
import Button from '../ui/Button'
import EditText from '../ui/EditText';

const Register = () => {
  const [formData, setFormData] = useState({
    emailOrUsername: '',
    username: '',
    contactNumber: '',
    password: ''
  });

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full bg-global-5 min-h-screen">
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        {/* Left Section - Hero Content */}
        <div className="w-full lg:w-[60%] bg-global-3 relative overflow-hidden">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start justify-between pt-[22px] pb-[22px] min-h-[400px] lg:min-h-[458px]">
              {/* Logo */}
              <div className="mb-6 lg:mb-0">
                <img 
                  src="/icon.png" 
                  alt="SkillLink Logo" 
                  className="w-[40px] h-[37px] sm:w-[50px] sm:h-[46px] lg:w-[58px] lg:h-[54px]"
                />
              </div>

              {/* Content Row */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center w-full lg:w-auto gap-6 lg:gap-8 -mt-[20px] lg:-mt-[52px]">
                {/* Text Content */}
                <div className="flex flex-col items-start lg:items-center gap-[16px] lg:gap-[22px] w-full lg:w-auto max-w-[300px] lg:max-w-none">
                  <div className="flex flex-col items-start w-full">
                    <h1 className="text-[24px] sm:text-[28px] lg:text-[34px] font-poppins font-semibold leading-[36px] sm:leading-[42px] lg:leading-[51px] text-left text-global-1 mb-2">
                      Sign Up to
                    </h1>
                    <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-poppins font-normal leading-[27px] sm:leading-[30px] lg:leading-[36px] text-left text-global-1">
                      SKillLink is simply
                    </h2>
                  </div>
                  <p className="text-[11px] sm:text-[12px] lg:text-[13px] font-poppins font-light leading-[16px] sm:leading-[17px] lg:leading-[19px] text-left text-global-1 w-full">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </p>
                </div>

                {/* Illustration */}
                <div className="w-full lg:w-auto flex justify-center lg:justify-start -ml-0 lg:-ml-[36px]">
                  <img 
                    src="/img_saly_1.png" 
                    alt="Registration Illustration" 
                    className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[384px] lg:h-[384px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Login As Section */}
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-8 lg:pb-0">
            <div className="flex flex-col gap-[20px] lg:gap-[26px] ml-0 lg:ml-[73px] mr-0 lg:mr-[72px] mb-[60px] lg:mb-[94px]">
              <h3 className="text-[14px] sm:text-[15px] lg:text-[16px] font-poppins font-normal leading-[21px] sm:leading-[22px] lg:leading-[24px] text-left text-global-1">
                Login as
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-[20px] lg:gap-[30px] w-full lg:w-auto">
                {/* John Peter Card */}
                <div className="flex flex-col justify-center items-center w-full sm:w-[144px] bg-global-4 rounded-[8px] p-[10px] relative">
                  <div className="absolute top-[11px] right-[11px]">
                    <img 
                      src="/cancel.svg" 
                      alt="Close" 
                      className="w-[12px] h-[12px]"
                    />
                  </div>
                  <img 
                    src="john.png" 
                    alt="John Peter" 
                    className="w-[76px] h-[76px] rounded-[38px] mb-[7px]"
                  />
                  <div className="flex flex-col justify-start items-center gap-[2px] px-[6px]">
                    <p className="text-[13px] sm:text-[14px] lg:text-[15px] font-poppins font-medium leading-[20px] sm:leading-[21px] lg:leading-[23px] text-left text-global-1">
                      John peter
                    </p>
                    <p className="text-[11px] sm:text-[12px] lg:text-[13px] font-poppins font-light leading-[17px] sm:leading-[18px] lg:leading-[20px] text-left text-global-3">
                      Active 1 days ago
                    </p>
                  </div>
                </div>

                {/* Alina Shmen Card */}
                <div className="flex flex-col justify-center items-center w-full sm:w-[144px] bg-global-4 rounded-[8px] p-[10px] relative">
                  <div className="absolute top-[11px] right-[11px] w-[12px] h-[12px] bg-[url('/images/img_vector_gray_600.svg')] bg-cover bg-center flex justify-center items-center p-[4px]">
                    <img 
                      src="/vector.svg" 
                      alt="Vector" 
                      className="w-[4px] h-[4px]"
                    />
                  </div>
                  <img 
                    src="/alina.png" 
                    alt="Alina Shmen" 
                    className="w-[76px] h-[76px] rounded-[38px] mb-[7px]"
                  />
                  <div className="flex flex-col justify-start items-center gap-[2px]">
                    <p className="text-[13px] sm:text-[14px] lg:text-[15px] font-poppins font-medium leading-[20px] sm:leading-[21px] lg:leading-[23px] text-left text-global-1">
                      Alina shmen
                    </p>
                    <p className="text-[11px] sm:text-[12px] lg:text-[13px] font-poppins font-light leading-[17px] sm:leading-[18px] lg:leading-[20px] text-left text-global-3">
                      Active 4 days ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Registration Form */}
        <div className="w-full lg:w-[40%] flex justify-center items-start lg:items-center px-4 sm:px-6 lg:px-0 py-8 lg:py-0">
          <div className="w-full max-w-[450px] lg:max-w-none lg:w-[450px] bg-global-5 rounded-[40px] shadow-[0px_4px_35px_#00000014] p-[32px] sm:p-[38px] lg:p-[44px] lg:mr-[118px] lg:mt-[80px] lg:mb-[94px]">
            <div className="flex flex-col gap-[32px] lg:gap-[42px]">
              {/* Header */}
              <div className="flex flex-col gap-[32px] lg:gap-[42px]">
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-between items-start w-full mb-[-8px] lg:mb-[-12px]">
                    <div className="text-[18px] lg:text-[21px] font-poppins font-normal leading-[22px] sm:text-[23px] lg:leading-[25px] text-left text-global-1">
                      <span className="text-global-1">Welcome to </span>
                      <span className="font-semibold text-[#2e90eb]">SkillLink</span>
                    </div>
                    <div className="text-right mt-[4px]">
                      <p className="text-[11px] sm:text-[12px] lg:text-[13px] font-poppins font-normal leading-[16px] sm:leading-[17px] lg:leading-[19px] text-global-2">
                        Have an Account ?
                      </p>
                      <p className="text-[11px] sm:text-[12px] lg:text-[13px] font-poppins font-normal leading-[16px] sm:leading-[17px] lg:leading-[19px] text-[#2e90eb] cursor-pointer">
                        Sign in
                      </p>
                    </div>
                  </div>
                  <h1 className="text-[40px] sm:text-[48px] lg:text-[55px] font-poppins font-medium leading-[60px] sm:leading-[72px] lg:leading-[83px] text-left text-global-1">
                    Sign up
                  </h1>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-[26px] lg:gap-[34px]">
                  {/* Email/Username Field */}
                  <div className="flex flex-col gap-[8px] lg:gap-[12px]">
                    <label className="text-[14px] sm:text-[15px] lg:text-[16px] font-poppins font-normal leading-[21px] sm:leading-[22px] lg:leading-[24px] text-left text-global-1">
                      Enter your email address
                    </label>
                    <EditText
                      placeholder="Email address"
                      value={formData.emailOrUsername}
                      onChange={handleInputChange('emailOrUsername')}
                      className="border-[#4285f4]"
                    />
                  </div>

                  {/* Username and Contact Number Row */}
                  <div className="flex flex-col sm:flex-row gap-[16px] lg:gap-[18px]">
                    <div className="flex flex-col gap-[4px] w-full">
                      <label className="text-[14px] sm:text-[15px] lg:text-[16px] font-poppins font-normal leading-[21px] sm:leading-[22px] lg:leading-[24px] text-left text-global-1">
                        Username
                      </label>
                      <EditText
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleInputChange('username')}
                        className="border-[#adadad]"
                      />
                    </div>
                    <div className="flex flex-col gap-[4px] w-full">
                      <label className="text-[14px] sm:text-[15px] lg:text-[16px] font-poppins font-normal leading-[21px] sm:leading-[22px] lg:leading-[24px] text-left text-global-1">
                        Contact Number
                      </label>
                      <EditText
                        placeholder="Contact Number"
                        value={formData.contactNumber}
                        onChange={handleInputChange('contactNumber')}
                        type="tel"
                        className="border-[#adadad]"
                      />
                    </div>
                  </div>

                  {/* Password Field and Submit Button */}
                  <div className="flex flex-col gap-[46px] lg:gap-[62px]">
                    <div className="flex flex-col gap-[8px] lg:gap-[12px]">
                      <label className="text-[14px] sm:text-[15px] lg:text-[16px] font-poppins font-normal leading-[21px] sm:leading-[22px] lg:leading-[24px] text-left text-global-1">
                        Enter your Password
                      </label>
                      <EditText
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange('password')}
                        type="password"
                        className="border-[#adadad]"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="large"
                      fullWidth
                      className="text-[14px] sm:text-[15px] lg:text-[16px] font-poppins font-medium leading-[21px] sm:leading-[22px] lg:leading-[24px] rounded-[10px] py-[12px] sm:py-[13px] lg:py-[14px] px-[28px] sm:px-[31px] lg:px-[34px]"
                    >
                      Sign up
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;