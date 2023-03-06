import { styled, Box } from '@mui/material';

export const LoaderWrapper = styled(Box)`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  margin-top: 150px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-top: 50px;
  }
`;
