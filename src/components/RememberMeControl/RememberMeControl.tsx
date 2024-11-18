import { FC } from 'react'

import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'

const RememberMeControl: FC<CheckboxProps> = (props) => (
  <FormControlLabel
    control={
      <Checkbox
        value="remember"
        color="primary"
        {...props}
        // @ts-ignore: testing prop to input
        inputProps={{ 'data-testid': props.id }}
      />
    }
    label="Remember me"
  />
)

export default RememberMeControl
