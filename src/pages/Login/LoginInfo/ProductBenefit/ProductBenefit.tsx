import React, { FC } from 'react';
import { ProductBenefitProps } from './ProductBenefitTypes';
import { TickcircleIcon } from 'assets/svg';
import './ProductBenefit.scss';

const ProductBenefit: FC<ProductBenefitProps> = ({
  icon,
  title,
  content,
  active,
}) => {
  return (
    <div className={`product__benefit ${active ? '--active' : ''}`}>
      {icon}
      <div className="product__benefit__info">
        <p className={`product__benefit__info__title ${active ? '--active' : ''}`}>
          {title}
        </p>
        <span
          className={`product__benefit__info__content ${active ? '--active' : ''}`}
        >
          {content}
        </span>
      </div>
      {active && <TickcircleIcon className="tick__circle" />}
    </div>
  );
};

export default ProductBenefit;
