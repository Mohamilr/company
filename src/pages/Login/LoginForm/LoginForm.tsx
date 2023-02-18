import React, { FC, useContext } from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { MoneeyIcon } from 'assets/svg';
import { AuthContext } from 'contex';
import { useFormik } from 'formik';
import { loginSchema } from 'utils/validations/login.validation';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './LoginForm.scss';

const LoginForm: FC = () => {
  const { email: defaultEmail, password: defaultPassword } = useContext(AuthContext);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      const { email, password } = values;

      if (defaultEmail === email && defaultPassword === password) {
        localStorage.setItem('loginTime', new Date().toISOString());
        return navigate('/profile');
      }

      toast.error('Invalid credentials');
    },
  });

  return (
    <>
      <div className="login__form__parent__container">
        {/* <MoneeyIcon /> */}
        <div className="login__form__container">
          <h2 className="form__header">Login to your dashboard</h2>
          <p className="form__sub__header">
            Provide details to login to your account{' '}
          </p>
          <form className="form" onSubmit={formik.handleSubmit}>
            <div className="form__inputs">
              <Input
                label="Email"
                type="email"
                name="email"
                id="email"
                value={formik.values.email}
                formik={formik}
                placeholder="Cokitchen222@gmail.co"
                onChange={formik.handleChange}
              />
              <Input
                label="Password"
                type="password"
                name="password"
                id="password"
                value={formik.values.password}
                formik={formik}
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                onChange={formik.handleChange}
                hasIcon={true}
              />
            </div>
            <Button type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
