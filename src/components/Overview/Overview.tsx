import React from 'react';
import { OverviewContainer, OverviewTitle } from 'src/components/Overview/Overview.styles';
import Table from '@/components/Table/Table';
import { INITIAL_OVERVIEW_DATA } from './Overview.constants';
const Overview = (): React.ReactElement => {
  return (
    <OverviewContainer>
      <OverviewTitle>회사개요</OverviewTitle>
      <Table data={INITIAL_OVERVIEW_DATA} />
    </OverviewContainer>
  );
};

export default Overview;
