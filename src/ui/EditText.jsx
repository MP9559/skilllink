import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditText = ({ 
  placeholder = '', 
  value = '', 
  onChange, 
  type = 'text',
  disabled = false,
  required = false,
  className = '',
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const baseClasses = 'w-full transition-colors duration-200 focus:outline-none';
  const styleClasses = 'text-[14px] font-poppins font-light leading-[21px] text-left text-edittext-1 bg-global-5 border border-[#4285f4] rounded-[8px] pt-[18px] pr-[18px] pb-[18px] pl-[18px]';
  const focusClasses = 'focus:ring-2 focus:ring-blue-500 focus:border-transparent';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const inputClasses = `
    ${baseClasses} 
    ${styleClasses}
    ${focusClasses}
    ${disabledClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={disabled}
      required={required}
      className={inputClasses}
      {...props}
    />
  );
};

EditText.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
};

export default EditText;