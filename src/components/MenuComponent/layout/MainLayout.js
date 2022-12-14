import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { NavBar } from '../NavBar';
import { SideBar } from '../SideBar';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../../../pages/Dashboard/Dashboard';
import { Trabajos } from '../../../pages/Trabajos/Trabajos';
import { RevisarTesis } from '../../../pages/RevisarTesis/RevisarTesis';
import { ListarTesis } from '../../../pages/ListarTesis/ListarTesis';
import { PublicarTesis } from '../../../pages/PublicarTesis/PublicarTesis';
import { Reportes } from '../../../pages/Reportes/Reportes';
import { Settings } from '../../../pages/Settings/Settings';

const drawerWidth = 255;

export const MainLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />

      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3, marginTop: '30px' }}
      >
        <Toolbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/trabajos' element={<Trabajos />} />
          <Route path='/revisar' element={<RevisarTesis />} />
          <Route path='/listar' element={<ListarTesis />} />
          <Route path='/publicar' element={<PublicarTesis />} />
          <Route path='/reportes' element={<Reportes />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </Box>
    </Box>
  )
}
