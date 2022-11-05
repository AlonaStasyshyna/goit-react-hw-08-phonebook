import { Box, styled, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export const CustomizedUserMenu = styled(Box)`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const CustomizedGreeting = styled(Typography)`
  font-size: 14px;
`;

export const CustomizedLogoutIcon = styled(LogoutIcon)`
  color: white;
`;
