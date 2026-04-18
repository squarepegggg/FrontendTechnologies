import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const API_BASE = 'http://localhost:5000';

function HardwareRow({ name, projectId, checked, total, joined }) {
  const [qty, setQty] = useState('');
  const [checkedOut, setCheckedOut] = useState(checked);

  const handleCheckIn = async () => {
    const amount = Math.max(0, parseInt(qty) || 0);
    if (amount === 0) return;

    try {
      const res = await fetch(`${API_BASE}/checkIn/${projectId}/${amount}`);
      const data = await res.json();
      setCheckedOut(prev => Math.min(total, prev + amount));
      alert(data.message); // "<qty> hardware checked in"
    } catch (err) {
      console.error('Check in failed:', err);
    }
    setQty('');
  };

  const handleCheckOut = async () => {
    const amount = Math.max(0, parseInt(qty) || 0);
    if (amount === 0) return;

    try {
      const res = await fetch(`${API_BASE}/checkOut/${projectId}/${amount}`);
      const data = await res.json();
      setCheckedOut(prev => Math.max(0, prev - amount));
      alert(data.message); // "<qty> hardware checked out"
    } catch (err) {
      console.error('Check out failed:', err);
    }
    setQty('');
  };

  return (
    <Box display="flex" alignItems="center" gap={1} mb={1} flexWrap="wrap">
      <Typography variant="body2" sx={{ minWidth: 130, fontWeight: 500 }}>
        {name}: {checkedOut}/{total}
      </Typography>

      <TextField
        size="small"
        placeholder="Enter qty"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        sx={{ width: 100 }}
        type="number"
        disabled={!joined}
      />

      <Button variant="outlined" size="small" onClick={handleCheckIn} disabled={!joined}>
        Check In
      </Button>

      <Button variant="outlined" size="small" onClick={handleCheckOut} disabled={!joined}>
        Check Out
      </Button>
    </Box>
  );
}

export default HardwareRow;