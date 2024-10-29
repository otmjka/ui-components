import React, { FC, ReactNode } from 'react';
import Box from '@mui/material/Box';

export const SignInFormBox: FC<{ children?: ReactNode }> = ({ children }) => (
  <Box
    component="form"
    noValidate
    children={children}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: 2,
    }}
  />
);
