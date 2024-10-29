import { FC } from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const RememberMeControl: FC = () => (
  <FormControlLabel
    control={<Checkbox value="remember" color="primary" />}
    label="Remember me"
  />
);

export default RememberMeControl;
