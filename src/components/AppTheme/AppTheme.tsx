import { FC, ReactNode } from 'react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import type { ThemeOptions } from '@mui/material/styles'

import useAppCreateTheme from './useAppCreateTheme'

interface AppThemeProps {
  children: ReactNode
  /**
   * This is for the docs site. You can ignore it or remove it.
   */
  disableCustomTheme?: boolean
  withCssBaseLine?: boolean
  themeComponents?: ThemeOptions['components']
}

const AppTheme: FC<AppThemeProps> = ({
  children,
  disableCustomTheme,
  withCssBaseLine,
  themeComponents,
}) => {
  const theme = useAppCreateTheme({ themeComponents, disableCustomTheme })
  if (disableCustomTheme) {
    return <>{children}</>
  }
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {withCssBaseLine && <CssBaseline enableColorScheme />}
      {children}
    </ThemeProvider>
  )
}

export default AppTheme
