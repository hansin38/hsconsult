import React from 'react';
import { OverviewContainer, OverviewTitle } from 'src/components/Overview/Overview.styles';
import Table from '@/components/Table/Table';
import { INITIAL_OVERVIEW_DATA } from './Overview.constants';
import { TalentTextWrpper } from '@/components/Talent/Talent.styles';
import { css } from '@emotion/react';
const Overview = (): React.ReactElement => {
  return (
    <OverviewContainer>
      {/*<OverviewTitle>회사개요</OverviewTitle>*/}
      <TalentTextWrpper css={css`margin-bottom: 34px;`}>
        <h3>회사개요</h3>
      </TalentTextWrpper>
      <Table data={INITIAL_OVERVIEW_DATA} />
    </OverviewContainer>
  );
};

export default Overview;
