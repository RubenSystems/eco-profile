import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomeDashboard from './pages/HomeDashboard'
import ClusterDashboard from './pages/ClusterDashboard'
import Header from '../src/components/Header'
import Box from "@mui/material/Box"
function App() {

  return (
    <Router>
        <Box sx={{display: 'flex'}}>
        <Header/>
        <Routes>
        <Route index element={<HomeDashboard />}/>
          <Route path="host">
            <Route path=":hostid" element={<ClusterDashboard />}/>
          </Route>
          </Routes>
          </Box>
      </Router>
  )
}

export default App
