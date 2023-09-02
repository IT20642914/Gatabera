import styled from '@emotion/styled';
import Button from '@mui/material/Button/Button';

export const StyledButton = styled(Button)(({ theme }: any) => ({
  fontFamily: theme.typography.fontFamily,
  textTransform: 'none',
}));
