import { ReactElement, FunctionComponent, SVGProps } from 'react';

export interface ProductBenefitProps {
  icon: ReactElement;
  title: string;
  content: string;
  active: boolean;
}
