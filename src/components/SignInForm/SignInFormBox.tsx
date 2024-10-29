import { FC } from 'react';
import Box, { BoxProps } from '@mui/material/Box';

export const SignInFormBox: FC<BoxProps<'form'>> = (props) => (
  <Box
    component="form"
    noValidate
    {...props}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: 2,
    }}
  />
);
