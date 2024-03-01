import React from 'react';
import { Box, Typography } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      mt: '6px'
    }}>
      <ErrorIcon color="error" sx={{width: '20px'}} />
      <Typography color='error.main'  fontSize='14px'>
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
