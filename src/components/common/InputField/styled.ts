import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';

export const StyledInputField = styled(TextField)(({ theme }: any) => ({
  fontFamily: theme.typography.fontFamily,
  borderRadius: '0.625rem',
  '& .MuiInputBase-inputAdornedEnd': {
    padding: 0,
    margin: 0,
  },
  '& .MuiInputBase-root': {
    padding: 0,
  },
}));
