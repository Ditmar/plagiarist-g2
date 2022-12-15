import { Drawer, Box, Toolbar, Typography, Divider, Avatar} from "@mui/material"
import logo from '../../assets/img/log.png'
import { NavLink } from 'react-router-dom'
import "./style.css"

export const SideBar = ({ drawerWidth = 255 }) => {
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open={false}
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: '#363740'
          }
        }}
      >
        <Toolbar>
          <Box
            component='div'

            sx={{
              width: '100%',
              paddingTop: '20px',
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center'
            }}
          >
            <Avatar alt="logo" src={logo} />
            <Typography sx={{
              color: '#A4A6B3',
              fontWeight: '600',
              fontFamily: ['Mulish', 'sans-serif'].join(),
            }} variant="h6">Plagio Control</Typography>
          </Box>



        </Toolbar>
        {/* <Divider /> */}
        <br />
        <br />
        <div style={{ width: '100%', height: '100vh' }}>
          <nav>
            <ul className="sidebar-menu">
              <li >
                <NavLink to='/'><i className="fas fa-chart-pie"></i>Inicio</NavLink>
              </li>
              <li >
                <NavLink to='/trabajos'><i className="fas fa-briefcase"></i>Trabajos</NavLink>
              </li>
              <li >
                <NavLink to='/revisar'><i className="fas fa-lightbulb"></i>Revisar Tesis</NavLink>
              </li>
              <li >
                <NavLink to='/listar'><i className="fas fa-users"></i>Listar Tesis</NavLink>
              </li>
              <li >
                <NavLink to='/publicar'><i className="fas fa-user-tie"></i>Publicar Tesis</NavLink>
              </li>
              <li >
                <NavLink to='/reportes'><i className="fas fa-book"></i>Reportes Generales</NavLink>
              </li>
              <br />
              <Divider />
              <br />
              <li >
                <NavLink to='/settings'><i className="fas fa-cog"></i>Settings</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </Drawer>
    </Box>
  )
}
