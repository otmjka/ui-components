import { FC } from 'react';
import { TextField } from '../TextField';
import { TextFieldProps } from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const EmailControl: FC<TextFieldProps> = (props) => (
  <FormControl>
    <FormLabel htmlFor={props.id ?? 'email'}>Email</FormLabel>
    <TextField
      slotProps={{ htmlInput: { 'data-testid': props.id } }}
      type="email"
      placeholder="your@email.com"
      autoComplete="email"
      autoFocus
      required
      fullWidth
      variant="outlined"
      color={'primary'}
      sx={{ ariaLabel: 'email' }}
      {...props}
    />
  </FormControl>
);

export default EmailControl;
