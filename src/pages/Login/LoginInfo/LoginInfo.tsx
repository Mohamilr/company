import React, { FC } from 'react';
import { MoneeyIcon } from 'assets/svg';
import ProductBenefit from 'pages/Login/LoginInfo/ProductBenefit/ProductBenefit';
import { ProductsBenefits } from 'pages/Login/LoginInfo/ProductBenefit/ProductBenefitData';
import './LoginInfo.scss';

const LoginInfo: FC = () => (
  <div className="login__info__container">
    <MoneeyIcon />
    <div className="info__container">
      <h1 className="info__title">Hi there, see what’s new</h1>
      <p className="info__content">
        Here’s how Foodcourt helps you manage your daily operations and ensure your
        riders are efficient
      </p>
    </div>
    <div className="product__benefit__list">
      {ProductsBenefits?.map(({ icon, title, content, active }, index) => (
        <ProductBenefit
          key={index}
          icon={icon}
          title={title}
          content={content}
          active={active}
        />
      ))}
    </div>
  </div>
);

export default LoginInfo;
