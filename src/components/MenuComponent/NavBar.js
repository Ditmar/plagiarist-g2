import { MenuOutlined, } from "@mui/icons-material"
import { AppBar, Avatar, Badge, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import NotificationsIcon from '@mui/icons-material/Notifications';

import {useLocation} from 'react-router-dom'

export const NavBar = ({ drawerWidth = 255 }) => {
  const {pathname} = useLocation()
  return (
    <AppBar
      style={{ backgroundColor: '#F7F8FC', boxShadow: 'none' }}
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },

      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid style={{paddingTop:'20px'}} container direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant="h6" noWrap component="div" sx={{
            fontSize:'24px',
            color: '#252733',
            fontFamily: ['Mulish', 'sans-serif'].join(),
            fontWeight:'700'
          }}>{pathname === '/trabajos' ? 'Trabajos' : pathname ==='/revisar' ? 'Revisar Tesis' : pathname === '/listar' ? 'Listar Tesis' : pathname === '/publicar' ? 'Publicar Tesis' : pathname === '/reportes' ? 'Reportes Generales' : pathname === '/settings' ? 'Settings': 'Overview' }</Typography>

        </Grid>
      </Toolbar>
    </AppBar>
  )
}
