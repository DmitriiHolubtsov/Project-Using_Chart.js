import { styled, Box, Typography } from '@mui/material';

export const ContentWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    padding: 0 32px;
  }

  ${({ theme }) => theme.breakpoints.down(860)} {
    padding: 0 16px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    justify-content: start;
  }
`;

export const InnerContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  column-gap: 39px;
  width: 100%;
  padding-bottom: 100px;

  ${({ theme }) => theme.breakpoints.down(860)} {
    column-gap: 16px;
  }

  ${({ theme }) => theme.breakpoints.down('lg')} {
    justify-content: center;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
    row-gap: 32px;
    padding-bottom: 50px;
  }
`;

export const PageTitle = styled(Typography)`
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 73px;
  padding-bottom: 37px;
  margin-top: 77px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-bottom: 24px;
    margin-top: 92px;
    font-size: 30px;
    line-height: 55px;
  }
`;
