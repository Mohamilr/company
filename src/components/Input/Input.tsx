import React, { FC } from 'react';
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
  formik,
}) => (
  <div className="input__group">
    <label htmlFor="" className="input__label">
      {label}
    </label>
    <div className="input__wrapper">
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        className="input"
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {hasIcon && <>{icon ?? <EyeIcon />}</>}
    </div>
    {formik && formik?.errors[name] && (
      <span className="input__error">{formik?.errors[name]}</span>
    )}
  </div>
);

export default Input;
