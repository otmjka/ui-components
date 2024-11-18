import { FC } from 'react'
import Typography from '@mui/material/Typography'
import { TypographyProps } from '@mui/material'

const H1: FC<TypographyProps> = (props) => (
  <Typography
    component="h1"
    variant="h4"
    sx={{
      fontFamily: 'Monospace',
      width: '100%',
      fontSize: 'clamp(2rem, 10vw, 2.15rem)',
    }}
    {...props}
  />
)

export default H1
