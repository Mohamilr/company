import React, { useState, FC } from 'react';
import { InputProps } from './InputTypes';
import { EyeIcon } from 'assets/svg';
import './Input.scss';

const Input: FC<InputProps> = ({
  label,
  type,
  name,
  id,
  value,
  placeholder,
  onChange,
  disabled,
  hasIcon,
  icon,
  error,
}) => {
  const [showPassword, togglePassword] = useState<boolean>(false);

  const isPassword = type === 'password';
  return (
    <div className="input__group">
      <label htmlFor="" className="input__label">
        {label}
      </label>
      <div className="input__wrapper">
        <input
          type={isPassword && showPassword ? 'text' : type}
          name={name}
          id={id}
          value={value}
          className="input"
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
        />
        {hasIcon && (
          <>{icon ?? <EyeIcon onClick={() => togglePassword(!showPassword)} />}</>
        )}
      </div>
      {error && <span className="input__error">{error}</span>}
    </div>
  );
};

export default Input;
