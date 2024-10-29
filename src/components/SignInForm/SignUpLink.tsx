import { FC } from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const SignUpLink: FC = () => (
  <Typography sx={{ textAlign: 'center' }}>
    Don&apos;t have an account?{' '}
    <span>
      <Link
        href="/material-ui/getting-started/templates/sign-in/"
        variant="body2"
        sx={{ alignSelf: 'center' }}
      >
        Sign up
      </Link>
    </span>
  </Typography>
);
