import React from 'react';
import { Button } from '@mui/material';

function FolderButton({ folder, selected, onClick }) {
  return (
    <Button
      variant={selected ? 'contained' : 'outlined'}
      onClick={() => onClick(folder)}
    >
      {folder}
    </Button>
  );
}

export default FolderButton;
