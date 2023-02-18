import React, { FC } from 'react';
import { InputProps } from './InputTypes';
import { EyeIcon } from 'assets/svg';
import './Input.scss';

const Input: FC<InputProps> = ({
  label,
  type,
  placeholder,
  onChange,
  disabled,
  hasIcon,
  icon,
}) => (
  <div className="input__group">
    <label htmlFor="" className="input__label">
      {label}
    </label>
    <div className="input__wrapper">
      <input
        type={type}
        className="input"
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {hasIcon && <>{icon ?? <EyeIcon />}</>}
    </div>
  </div>
);

export default Input;
