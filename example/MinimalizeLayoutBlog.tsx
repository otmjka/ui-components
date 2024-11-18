import React, { FC, useCallback } from 'react'

import { AppTheme, AppNavbar, SideMenu, AppAppBar } from '../src/components'
import { Menu, AssignmentRoundedIcon } from '../src/components'
import { Box } from '@mui/material'

const MinimalizeLayoutBlog: FC = () => {
  return (
    <AppTheme withCssBaseLine>
      <AppAppBar />
      {/* <SideMenu /> */}
      <Box sx={{ pt: 6 }}>
        <Menu
          menuItems={[
            { text: '1. item1 ...', icon: <AssignmentRoundedIcon /> },
            { text: '2. item1 ...', icon: <AssignmentRoundedIcon /> },
            { text: '1. item1 ...', icon: <AssignmentRoundedIcon /> },
          ]}
        />
      </Box>
      {/* <AppNavbar /> */}
      {/* !!! proba ! */}
    </AppTheme>
  )
}

export default MinimalizeLayoutBlog
