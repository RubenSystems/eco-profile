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
                  <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
          </ListItemButton>
      </Link>
      <Link to={`/staff/ticket/outstanding`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemButton>
              <ListItemIcon>
                  <AccessAlarmIcon />
              </ListItemIcon>
              <ListItemText primary="Outstanding Tickets" />
          </ListItemButton>
      </Link>

      <Link to={`/staff/ticket/claimed`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <ListItemButton>
          <ListItemIcon>
            <ConfirmationNumberIcon  />
          </ListItemIcon>
          <ListItemText primary="Claimed Tickets" />
        </ListItemButton>
      </Link>

      <Link to={`/staff/ticket/resolved`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <ListItemButton>
          <ListItemIcon>
              <LibraryAddCheckIcon  />
          </ListItemIcon>
          <ListItemText primary="Resolved Tickets" />
        </ListItemButton>
      </Link>

      <Link to={`/staff/knowledge`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <ListItemButton>
          <ListItemIcon>
              <SchoolIcon  />
          </ListItemIcon>
          <ListItemText primary="Knowledge Base" />
        </ListItemButton>
      </Link>

      <Link to={`/staff/statistics`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <ListItemButton>
          <ListItemIcon>
              <AssessmentIcon  />
          </ListItemIcon>
          <ListItemText primary="Statistics" />
        </ListItemButton>
      </Link>

  </React.Fragment>
);

// Generate Order Data
function createData(id, date, query, name, tags) {
    return { id, date, query, name, tags };
}

const rows = [
    createData(
        0,
        '16 Mar, 2019',
        'How do I pay my tuition???',
        'Elvis Presley',
        'Finance',
    ),
    createData(
        1,
        '16 Mar, 2019',
        'How do I get matched with an academic advisor?',
        'Paul McCartney',
        'Faculty',
    ),
    createData(2, '16 Mar, 2019', 'Housing payment dates', 'Tom Scholz', 'Housing & Accomodation'),
    createData(
        3,
        '16 Mar, 2019',
        'ooga booga',
        'Michael Jackson',
        'Other',
    ),
    createData(
        4,
        '15 Mar, 2019',
        'where is my campus',
        'Bruce Springsteen',
        'Faculty',
    ),
];

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

export function SecondaryListItems({ data }) {
    return (
        <React.Fragment>
            <ListSubheader component="div" inset>
                Recent conversations
            </ListSubheader>

            {
                data ? generate(data) : generate(rows)
            }

            {/*<Link to={`/staff/ticket/123`} style={{ textDecoration: 'none', color: 'inherit' }}>*/}
            {/*    <ListItemButton>*/}
            {/*        <ListItemIcon>*/}
            {/*            <RecordVoiceOverIcon />*/}
            {/*        </ListItemIcon>*/}
            {/*        <ListItemText primary="John Doe" />*/}
            {/*    </ListItemButton>*/}
            {/*</Link>*/}
            {/*<ListItemButton>*/}
            {/*    <ListItemIcon>*/}
            {/*        <RecordVoiceOverIcon />*/}
            {/*    </ListItemIcon>*/}
            {/*    <ListItemText primary="Timothy Johnson" />*/}
            {/*</ListItemButton>*/}
            {/*<ListItemButton>*/}
            {/*    <ListItemIcon>*/}
            {/*        <RecordVoiceOverIcon />*/}
            {/*    </ListItemIcon>*/}
            {/*    <ListItemText primary="Amanda Sales" />*/}
            {/*</ListItemButton>*/}
        </React.Fragment>
    )
}
