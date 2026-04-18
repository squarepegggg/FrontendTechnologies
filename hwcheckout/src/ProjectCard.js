import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import HardwareRow from './HardwareRow';

const API_BASE = 'http://localhost:5000';

function ProjectCard({ id, name, users, hardwareSets }) {
  const [joined, setJoined] = useState(false);

  const handleJoinLeave = async () => {
    const route = joined ? 'leave' : 'join';
    try {
      const res = await fetch(`${API_BASE}/${route}/${id}`);
      const data = await res.json();
      setJoined(prev => !prev);
      alert(data.message); // "Joined <projectId>" or "Left <projectId>"
    } catch (err) {
      console.error('Join/leave failed:', err);
    }
  };

  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        mb: 2,
        backgroundColor: joined ? '#f0fff4' : '#fff',
        border: joined ? '1px solid #81c784' : '1px solid #ddd',
      }}
    >
      <Box display="flex" alignItems="flex-start" justifyContent="space-between" gap={2}>

        {/* Left: project name and users */}
        <Box minWidth={200}>
          <Typography variant="h6" fontWeight={600}>{name}</Typography>
          <Typography variant="body2" color="text.secondary">{users}</Typography>
        </Box>

        {/* Middle: hardware rows */}
        <Box flex={1}>
          {hardwareSets.map((hw) => (
            <HardwareRow
              key={hw.name}
              name={hw.name}
              projectId={id}
              checked={hw.checked}
              total={hw.total}
              joined={joined}
            />
          ))}
        </Box>

        {/* Right: Join/Leave button */}
        <Button
          variant="contained"
          color={joined ? 'success' : 'primary'}
          onClick={handleJoinLeave}
          sx={{ alignSelf: 'center', minWidth: 80 }}
        >
          {joined ? 'Leave' : 'Join'}
        </Button>

      </Box>
    </Paper>
  );
}

export default ProjectCard;