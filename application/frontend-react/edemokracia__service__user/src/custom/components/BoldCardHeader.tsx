import CardHeader from '@mui/material/CardHeader';
import { styled } from '@mui/material/styles';

export const BoldCardHeader = styled(CardHeader)(({ theme }) => ({
  '& .MuiCardHeader-title': {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
