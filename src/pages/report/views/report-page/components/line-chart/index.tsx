import { Box, SelectChangeEvent, useMediaQuery, useTheme } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext,
} from 'chart.js';
import { format, subDays, parseISO } from 'date-fns';
import React, { ReactElement, useState } from 'react';
import { Line } from 'react-chartjs-2';

import palette from '~/cdk/theme/palette';
import { HistoricalFTData } from '~/pages/report/views/report-page/types';

import {
  HistoricLineWrapper,
  ShareChartWrapper,
  DataSelector,
  DataSelectorTitle,
  BtnWrapper,
  DateButton,
  TableContainerLine,
  TableHeaderLine,
  TableSubheader,
  MediaLink,
  ControlsWrapper,
  SelectToken,
  SelectTokenTitle,
  StyledSelect,
} from './lineChart.styled';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const periodValues = [
  {
    name: '15 days',
    value: 15,
  },
  {
    name: '30 days',
    value: 30,
  },
  {
    name: '90 days',
    value: 90,
  },
];

type AllTokens = 'all';

export type Props = {
  tokens: HistoricalFTData[];
};

export default function LineChart({ tokens }: Props): ReactElement {
  const linkPath = 'https://www.ref.finance';

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [period, setPeriod] = useState(90);
  const [filteredToken, setFilteredToken] = useState<string | AllTokens>('all');

  const currentDateTime = new Date().getTime();
  const minTokenDate = subDays(currentDateTime, period);

  const handlePeriodChange = (event: SelectChangeEvent<unknown>) => {
    setPeriod(event.target.value as number);
  };

  const handleTokenChange = (event: SelectChangeEvent<unknown>) => {
    setFilteredToken(event.target.value as string);
  };

  const filteredTokens = tokens
    .filter((token) => filteredToken === 'all' || token.contractId === filteredToken)
    .map((token) => ({
      ...token,
      history: token.history.filter((historyItem) => parseISO(historyItem.date) >= minTokenDate),
    }));

  const tokenDropdownItems: Array<{ value: string; label: string }> = [{ value: 'all', label: 'Show all' }].concat(
    tokens.map((token) => ({ value: token.contractId, label: token.symbol }))
  );

  // Tokens should have same history records, use first one for labels
  const chartDates = filteredTokens[0].history.map((historyItem) => historyItem.date);

  const dataLineChart = {
    id: 'lineChart',
    labels: chartDates.map((date) => format(parseISO(date), 'dd MMM yy')),
    datasets: [
      {
        backgroundColor: (context: ScriptableContext<'line'>) => {
          const { ctx } = context.chart;
          const gradient = ctx.createLinearGradient(30, -50, 220, 550);
          gradient.addColorStop(0, 'rgba(155, 185, 242, 0.81)');
          gradient.addColorStop(1, 'rgba(152, 182, 241, 0)');
          ctx.fillStyle = gradient;
          return gradient;
        },
        data: chartDates.map((date) => {
          const sameDateValues = filteredTokens.map((token) =>
            Number(token.history.find((item) => item.date === date)?.volume ?? 0)
          );
          return sameDateValues.reduce((sum, value) => sum + value, 0);
        }),
        borderColor: `${palette.chartLineColor}`,
        fill: 'start',
        pointBorderColor: `${palette.chartPointBorderColor}`,
      },
    ],
  };

  const chartAreaBorder = {
    id: 'lineChart',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    beforeDatasetsDraw(chart: any) {
      const {
        ctx,
        chartArea: { bottom, left, right },
      } = chart;
      ctx.save();
      ctx.beginPath();
      const gradientBorder = ctx.createLinearGradient(0, 0, 170, 0);
      gradientBorder.addColorStop('0', '#B0D0FA');
      gradientBorder.addColorStop('0.2', '#BDDFFF');
      gradientBorder.addColorStop('0.8', '#8DAAED');
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = gradientBorder;
      ctx.moveTo(left, bottom);
      ctx.lineTo(right, bottom);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    },
  };

  const configLineChart = {
    id: 'lineChart',
    rotateLabels: false,
    type: 'line',
    dataLineChart,
    elements: {
      line: {
        tension: 0.15,
      },
    },
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      chartAreaBorder,
      title: {
        display: true,
        text: 'USD',
        fontSize: 20,
        align: 'end' as const,
        color: `${palette.white}`,
        font: {
          size: isMobile ? 10 : 14,
          fontWeight: 300,
          height: isMobile ? 13 : 26,
        },
        padding: {
          bottom: 35,
        },
      },
      filler: {
        propagate: false,
      },
      legend: {
        display: false,
      },
    },

    scales: {
      y: {
        drawBorder: false,
        position: 'right' as const,
        ticks: {
          color: `${palette.white}`,
          align: 'end' as const,
          font: {
            size: isMobile ? 10 : 16,
            fontWeight: 300,
            height: isMobile ? 13 : 32,
          },
          callback(value: string | number) {
            const formatter = Intl.NumberFormat('en', {
              notation: 'compact',
            });
            return `$${formatter.format(Number(value))}`;
          },
        },
        grid: {
          display: false,
        },
      },
      x: {
        drawBorder: false,
        align: 'end' as const,
        padding: {
          top: 40,
        },
        ticks: {
          autoSkip: true,
          minTicksLimit: 1,
          maxTicksLimit: 2,
          maxRotation: 0,
          minRotation: 0,
          color: `${palette.white}`,
          align: 'start' as const,
          padding: 10,
          font: {
            size: isMobile ? 10 : 16,
            fontWeight: 300,
            height: isMobile ? 13 : 32,
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const dropdownMenuProps = {
    PaperProps: {
      sx: {
        bgcolor: `${palette.menuBcg}`,
        marginTop: '10px',
        border: `1px solid ${palette.borderColor}`,
        '& .MuiList-root': {
          padding: '0',
          '&.Mui-selected': {
            bgcolor: `${palette.borderColor}`,
          },
        },
        '& .MuiMenuItem-root': {
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '26px',
          padding: '2px 10px',
          minHeight: '30px',
          '&.Mui-selected': {
            bgcolor: `${palette.borderColor}`,
          },
        },
      },
    },
  };

  return (
    <HistoricLineWrapper>
      <TableContainerLine>
        <TableHeaderLine>My Wallet Assets Volume</TableHeaderLine>
        <TableSubheader>
          Historical changes in the price, data is taken from&nbsp;
          <MediaLink target='_blank' rel='noopener noreferrer' href={linkPath}>
            ref.finance
          </MediaLink>
        </TableSubheader>
        <ControlsWrapper>
          {!isMobile ? (
            <DataSelector>
              <DataSelectorTitle>Select the data display period:</DataSelectorTitle>
              <BtnWrapper>
                {periodValues &&
                  periodValues.map((type, index) => (
                    <Box key={index}>
                      <DateButton onClick={() => setPeriod(type.value)}>{type.name}</DateButton>
                    </Box>
                  ))}
              </BtnWrapper>
            </DataSelector>
          ) : (
            <SelectToken>
              <SelectTokenTitle>Select period:</SelectTokenTitle>
              <FormControl fullWidth>
                <StyledSelect value={period} onChange={handlePeriodChange} displayEmpty MenuProps={dropdownMenuProps}>
                  {periodValues &&
                    periodValues.map((type, index) => (
                      <MenuItem key={index} value={type.value}>
                        {type.name}
                      </MenuItem>
                    ))}
                </StyledSelect>
              </FormControl>
            </SelectToken>
          )}
          <SelectToken>
            <SelectTokenTitle>Select tokens:</SelectTokenTitle>
            <FormControl fullWidth>
              <StyledSelect
                value={filteredToken}
                onChange={handleTokenChange}
                displayEmpty
                MenuProps={dropdownMenuProps}>
                {tokenDropdownItems &&
                  tokenDropdownItems.map((item, index) => (
                    <MenuItem key={index} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
              </StyledSelect>
            </FormControl>
          </SelectToken>
        </ControlsWrapper>
        <ShareChartWrapper>
          <Line redraw data={dataLineChart} options={configLineChart} id='lineChart' plugins={[chartAreaBorder]} />
        </ShareChartWrapper>
      </TableContainerLine>
    </HistoricLineWrapper>
  );
}
