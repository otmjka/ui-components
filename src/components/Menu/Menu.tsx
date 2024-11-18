import React, { FC } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
// import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded'

// const mainListItems = [
//   { text: 'Home', icon: <AssignmentRoundedIcon /> },
//   { text: 'Analytics', icon: <AssignmentRoundedIcon /> },
//   { text: 'Clients', icon: <AssignmentRoundedIcon /> },
//   { text: 'Tasks', icon: <AssignmentRoundedIcon /> },
// ]

type MenuItem = { text: string; url: string; icon: React.ReactNode }

type MenuItemProps = {
  to: string
  children: React.ReactNode
}

type MenuContentProps = {
  menuItems: Array<MenuItem>
  MenuItem: React.ComponentType<MenuItemProps>
}

const Menu: FC<MenuContentProps> = ({ menuItems, MenuItem }) => {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton selected={index === 0}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                sx={{ fontFamily: 'Monospace' }}
                primary={<MenuItem to={item.url} children={item.text} />}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  )
}

export default Menu
