import { FC } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Sitemark from './SitemarkIcon'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Link } from '@mui/material'

const StyledToolbar = styled(Toolbar)(({}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  padding: '8px 12px',
}))

type AppAppBarProps = {
  logoLink: React.ComponentType<any>
}

const AppAppBar: FC<AppAppBarProps> = (props) => {
  const { logoLink: LogoLink } = props
  return (
    <AppBar component="nav">
      <StyledToolbar>
        <Box>
          <LogoLink to="/">
            <Sitemark />
          </LogoLink>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 1,
            alignItems: 'center',
          }}
        >
          <Link href="https://github.com/otmjka">
            <GitHubIcon fontSize="large" />
          </Link>
        </Box>
      </StyledToolbar>
    </AppBar>
  )
}

export default AppAppBar
