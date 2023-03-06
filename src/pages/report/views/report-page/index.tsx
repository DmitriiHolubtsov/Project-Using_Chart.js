import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { useQueryParam, StringParam } from 'use-query-params';

import Loader from '~/components/loader';
import { api } from '~/services/api';

import LineChart from './components/line-chart';
import PieChart from './components/pie-chart';
import { ContentWrapper, InnerContainer, PageTitle } from './innerReport.styled';
import { AnalyticsResponse } from './types';

const pageTitle = 'FTs analytics';

export default function ReportPage(): ReactElement {
  const [accountId] = useQueryParam('accountId', StringParam);
  if (!accountId) {
    throw new Error('accountId must be provided in query');
  }

  const analytics = useQuery('analytics', () =>
    api.get<AnalyticsResponse>(`/api/analytics?accountName=${accountId}&historyPeriod=90`)
  );

  return (
    <ContentWrapper>
      <PageTitle>{pageTitle}</PageTitle>
      {analytics.data ? (
        <InnerContainer>
          {!!analytics.data.historicalFTData.length && <LineChart tokens={analytics.data.historicalFTData} />}
          <PieChart tokens={analytics.data.relevantFTData} />
        </InnerContainer>
      ) : (
        <Loader />
      )}
    </ContentWrapper>
  );
}
