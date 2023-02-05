import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomeDashboard from './pages/HomeDashboard'
import ClusterDashboard from './pages/ClusterDashboard'
import HostDashboard from './pages/HostDashboard'
import Header from '../src/components/Header'
import Box from "@mui/material/Box"
function App() {

  return (
    <Router>
        <Box sx={{display: 'flex'}}>
        <Header/>
        <Routes>
        <Route index element={<HomeDashboard />}/>
          <Route path="cluster">
            <Route path=":clusterId" element={<ClusterDashboard />}/>
          </Route>
          <Route path="host">
            <Route path=":clusterId/:hostId" element={<HostDashboard />}/>
          </Route>
          </Routes>
        </Box>
      </Router>
  )
}

export default App
