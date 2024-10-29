// src/components/Button/Button.tsx
import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

export interface ButtonProps extends MuiButtonProps {
  customProp?: string;
}

export const Button: React.FC<ButtonProps> = ({ customProp, ...props }) => {
  return (
    <MuiButton {...props} />
  );
};
