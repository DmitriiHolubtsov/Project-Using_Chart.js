import { styled, Box, Typography } from '@mui/material';

export const TableContainerPie = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border: 1px solid #687788;
  border-radius: 16px;
  width: 100%;
  max-width: 320px;
  padding-left: 16px;
  padding-right: 16px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    max-width: 100%;
    padding-left: 14px;
    padding-right: 14px;
  }
`;

export const TableTitle = styled(Typography)`
  font-weight: 600;
  font-size: 14px;
  line-height: 12px;
  padding-top: 24px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-top: 13px;
    font-weight: 600;
    font-size: 14px;
    line-height: 12px;
  }
`;

export const TableSubTitle = styled(Typography)`
  font-weight: 300;
  font-size: 12px;
  line-height: 32px;
  padding-bottom: 4px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-weight: 300;
    font-size: 10px;
    line-height: 32px;
  }
`;

export const ShareChartWrapper = styled(Box)`
  max-width: 136px;
  margin: 0 auto;
`;

export const DateTitlesWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 28px;
  row-gap: 15px;
  width: 100%;
  margin-top: 15px;
  padding-bottom: 20px;
`;

export const DateTitles = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  column-gap: 8px;
`;

export const TextTitles = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const DateLabels = styled(Box)`
  width: 4px;
  height: 4px;
  border-radius: 100px;
  margin-top: 4px;
`;

export const DateTitle = styled(Typography)`
  font-weight: 300;
  font-size: 8px;
  line-height: 12px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-weight: 300;
    font-size: 8px;
    line-height: 12px;
  }
`;

export const DateValue = styled(Typography)`
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
  }
`;
