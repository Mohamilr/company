import React, { FC } from 'react';
import { ButtonProps } from './ButtonTypes';
import './Button.scss';

const Button: FC<ButtonProps> = ({ type }) => (
  <button className="button" type={type}>
    Login
  </button>
);

export default Button;
