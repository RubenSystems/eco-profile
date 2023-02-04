import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import SchoolIcon from '@mui/icons-material/School';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import AssessmentIcon from '@mui/icons-material/Assessment';
import {Link} from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
      <Link to={`/cluster/1`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemButton>
              <ListItemIcon>
                  <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Cluster 1" />
          </ListItemButton>
      </Link>
      <Link to={`/cluster/2`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemButton>
              <ListItemIcon>
                  <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Cluster 2" />
          </ListItemButton>
      </Link>
      <Link to={`/cluster/3`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemButton>
              <ListItemIcon>
                  <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Cluster 3" />
          </ListItemButton>
      </Link>
      
  </React.Fragment>
);



function generate(rows) {
    return rows.slice(0, 5).map(e => (
        (
            <Link key={e.id} to={`/staff/ticket/${e.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                    <ListItemIcon>
                        <RecordVoiceOverIcon />
                    </ListItemIcon>
                    <ListItemText primary={e.name} />
                </ListItemButton>
            </Link>
        )
    ))
}
