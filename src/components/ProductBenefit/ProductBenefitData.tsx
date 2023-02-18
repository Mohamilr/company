import React from 'react';
import { EarningIcon, StaffsIcon, ManageIcon } from 'assets/svg';

export const ProductsBenefits = [
  {
    icon: <EarningIcon />,
    title: 'Monitor your Earnings',
    content:
      'Easily see how much your busineses are earning  on each transaction and watch your earnings rise.',
    active: false,
  },
  {
    icon: <ManageIcon />,
    title: 'Manage your Businesses',
    content:
      'Easily see how much your businesses are earning  on each transaction and watch your earnings rise.',
    active: false,
  },
  {
    icon: <StaffsIcon />,
    title: 'Delegate to Staff',
    content:
      'Easily see how much your businesses are earning  on each transaction and watch your earnings rise.',
    active: true,
  },
];
