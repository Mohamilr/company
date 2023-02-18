import React, { FC, FormEvent } from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { MoneeyIcon } from 'assets/svg';
import './LoginForm.scss';

const LoginForm: FC = () => {
  const handleInputChange = (e: FormEvent) => {
    console.log(e);
  };
  return (
    <>
      <div className="login__form__parent__container">
        {/* <MoneeyIcon /> */}
        <div className="login__form__container">
          <h2 className="form__header">Login to your dashboard</h2>
          <p className="form__sub__header">
            Provide details to login to your account{' '}
          </p>
          <form className="form">
            <div className="form__inputs">
              <Input
                label="Email"
                type="email"
                placeholder="Cokitchen222@gmail.co"
                onChange={handleInputChange}
              />{' '}
              <Input
                label="Password"
                type="password"
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                onChange={handleInputChange}
                hasIcon={true}
              />
            </div>
            <Button />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
