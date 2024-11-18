import { TextFieldProps } from '@mui/material'
import { FC } from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { TextField } from '../TextField'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

type PasswordControlProps = {
  onForgotClick: () => void
}

const PasswordControl: FC<PasswordControlProps & TextFieldProps> = (props) => {
  const { onForgotClick, id, ...fieldProps } = props
  return (
    <FormControl>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Link
          component="button"
          type="button"
          onClick={props.onForgotClick}
          variant="body2"
          sx={{ alignSelf: 'baseline' }}
        >
          Forgot your password?
        </Link>
      </Box>
      <TextField
        placeholder="••••••"
        id={id}
        slotProps={{ htmlInput: { 'data-testid': id } }}
        type="password"
        required
        fullWidth
        variant="outlined"
        {...fieldProps}
      />
    </FormControl>
  )
}

export default PasswordControl
