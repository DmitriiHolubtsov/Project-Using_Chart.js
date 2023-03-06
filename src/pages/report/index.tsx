import React, { ReactElement } from 'react';

import Header from '~/components/header';

import { ReportPageContainer } from './report.styled';
import ReportPage from './views/report-page';

export default function Report(): ReactElement {
  return (
    <ReportPageContainer>
      <Header />
      <ReportPage />
    </ReportPageContainer>
  );
}
