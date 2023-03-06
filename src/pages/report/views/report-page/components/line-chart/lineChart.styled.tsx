import { styled, Box, Typography, Button } from '@mui/material';
import Select from '@mui/material/Select';
import palette from '~/cdk/theme/palette';

export const HistoricLineWrapper = styled(Box)`
  width: 100%;
`;

export const TableContainerLine = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border: 1px solid ${palette.borderColor};
  border-radius: 16px;
  max-width: 840px;
  width: 100%;
  height: 774px;
  padding: 35px 40px 40px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    max-width: 100%;
    padding: 18px 14px 25px;
    height: 408px;
  }
`;

export const TableHeaderLine = styled(Typography)`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 4px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-weight: 600;
    font-size: 14px;
    line-height: 13px;
    padding-bottom: 6px;
  }
`;

export const TableSubheader = styled(Typography)`
  font-weight: 300;
  font-size: 16px;
  line-height: 32px;
  padding-bottom: 32px;
  text-align: center;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-weight: 300;
    font-size: 10px;
    line-height: 13px;
    padding-bottom: 16px;
  }
`;

export const MediaLink = styled('a')`
  font-weight: 300;
  font-size: 16px;
  line-height: 32px;
  padding-bottom: 26px;
  text-decoration: underline;
  color: ${palette.reportLinkColor};

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-weight: 300;
    font-size: 10px;
    line-height: 13px;
    padding-bottom: 0;
  }
`;

export const ShareChartWrapper = styled(Box)`
  max-width: 655px;
  margin: 0 auto;
  width: 100%;
  max-height: 500px;
  height: 100%;
`;

export const ControlsWrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    flex-wrap: wrap;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
    row-gap: 16px;
    margin-bottom: 11px;
  }
`;

export const DataSelector = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-bottom: 30px;
  width: 100%;
  row-gap: 15px;
  padding-top: 3px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-top: 0;
  }
`;

export const DataSelectorTitle = styled(Typography)`
  font-weight: 300;
  font-size: 16px;
  line-height: 29px;
  margin-right: 15px;
`;

export const BtnWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  column-gap: 20px;
  margin-right: 15px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    row-gap: 16px;
  }
`;

export const DateButton = styled(Button)`
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  color: ${({ theme }) => theme.palette.text.primary};
  border: 1px solid ${palette.borderColor};
  border-radius: 40px;
  width: 130px;
  height: 36px;
  padding: 5px 0;

  &:hover {
    background: ${palette.btnGradientHover};
  }
`;

export const SelectToken = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 26px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: 0;
  }
`;

export const SelectTokenTitle = styled(Typography)`
  font-weight: 300;
  font-size: 16px;
  line-height: 32px;
  white-space: nowrap;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-weight: 300;
    font-size: 14px;
    line-height: 32px;
  }
`;

export const StyledSelect = styled(Select)`
  margin-left: 15px;
  width: 130px;
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;

  &.MuiPaper-root.MuiList-root.MuiMenu-list {
    background-color: ${palette.black};
  }

  & .MuiSelect-select {
    border: 1px solid ${palette.borderColor};
    padding: 5px 12px;

    ${({ theme }) => theme.breakpoints.down('md')} {
      padding: 4px 12px;
    }
  }

  & svg {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;
