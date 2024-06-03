// src/components/ScheduleList.js
import React from 'react';
import { List, ListItem, ListItemText, Container } from '@mui/material';

const ScheduleList = ({ schedules }) => (
  <Container>
    <List>
      {schedules.map((schedule, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={`${schedule.name}`}
            secondary={`Data: ${schedule.date} | Hora: ${schedule.time}`}
          />
        </ListItem>
      ))}
    </List>
  </Container>
);

export default ScheduleList;
