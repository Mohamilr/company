import React, { FC } from 'react';
import LoginInfo from './LoginInfo/LoginInfo';
import LoginForm from './LoginForm/LoginForm';
import './Login.scss';

const Login: FC = () => {
  return (
    <div className="login">
      <LoginInfo />
      <LoginForm />
    </div>
  );
};

export default Login;
