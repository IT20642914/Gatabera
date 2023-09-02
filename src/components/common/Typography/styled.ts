import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

export const StyledTypography = styled(Typography)(({ theme }: any) => ({
  fontFamily: theme.typography.fontFamily,
}));
