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
      <Link to={`/`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <ListItemButton>
          <ListItemIcon>
              <LibraryAddCheckIcon  />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>

      <Link to={`/`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemButton>
              <ListItemIcon>
                  <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Search" />
          </ListItemButton>
      </Link>
      <Link to={`/clusters`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemButton>
              <ListItemIcon>
                  <AccessAlarmIcon />
              </ListItemIcon>
              <ListItemText primary="Clusters" />
          </ListItemButton>
      </Link>

      <Link to={`/hosts`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <ListItemButton>
          <ListItemIcon>
            <ConfirmationNumberIcon  />
          </ListItemIcon>
          <ListItemText primary="Hosts" />
        </ListItemButton>
      </Link>
  </React.Fragment>
)
