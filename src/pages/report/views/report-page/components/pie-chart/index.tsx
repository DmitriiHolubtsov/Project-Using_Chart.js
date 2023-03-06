import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { format } from 'date-fns';
import React, { ReactElement, useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

import { FTData } from '~/pages/report/views/report-page/types';

import {
  TableContainerPie,
  TableTitle,
  TableSubTitle,
  ShareChartWrapper,
  DateTitlesWrapper,
  DateTitles,
  DateLabels,
  TextTitles,
  DateTitle,
  DateValue,
} from './pieChart.styled';

ChartJS.register(ArcElement, Tooltip, Legend);

const chartColors = ['#AACAF8', '#384FC3', '#FFFFFF', '#1B34AC', '#FFFFFF'];

export type Props = {
  tokens: FTData[];
};

export default function PieChart({ tokens }: Props): ReactElement {
  const formattedDate = format(new Date(), 'd.MM.yyyy');
  const [totalVolume, setTotalVolume] = useState(0);

  useEffect(() => {
    const total = tokens.reduce((acc, row) => acc + Number(row.volume), 0);
    setTotalVolume(total);
  }, [tokens]);

  const tokensWithColors = tokens.map((object, index) => ({
    ...object,
    color: chartColors[index % chartColors.length],
  }));

  const setData = {
    datasets: [
      {
        data: tokens.map(({ volume }) => Number(volume)),
        backgroundColor: tokensWithColors.map((token) => token.color),
        borderWidth: 0,
      },
    ],
  };

  function formatPercentage(volume: string): string {
    return `${((Number(volume) * 100) / totalVolume).toFixed(2)}%`;
  }

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: ({ raw }: { raw: unknown }) => formatPercentage(raw as string),
        },
      },
    },
  };

  return (
    <TableContainerPie>
      <TableTitle>Tokens Share</TableTitle>
      <TableSubTitle>Wallet distribution on {formattedDate}</TableSubTitle>
      <ShareChartWrapper>
        <Pie data={setData} options={options} />
      </ShareChartWrapper>

      <DateTitlesWrapper>
        {tokensWithColors.map(({ symbol, volume, color }, contractId) => (
          <DateTitles key={contractId}>
            <DateLabels style={{ backgroundColor: color }} />
            <TextTitles>
              <DateTitle>{symbol}</DateTitle>
              <DateValue>{formatPercentage(volume)}</DateValue>
            </TextTitles>
          </DateTitles>
        ))}
      </DateTitlesWrapper>
    </TableContainerPie>
  );
}
