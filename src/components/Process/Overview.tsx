import React from 'react';
import { ProcessContainer, ProcessTextWrpper } from 'src/components/Process/Process.styles';
import Table from '@/components/Table/Table';
import { INITAL_RECRUIT_PROCESS_DATA } from '@/components/Process/Process.constants';

const Overview = (): React.ReactElement => {
  return (
    <ProcessContainer>
      <ProcessTextWrpper>
        <h3>채용개요</h3>
      </ProcessTextWrpper>
      <Table data={INITAL_RECRUIT_PROCESS_DATA} />
    </ProcessContainer>
  );
};

export default Overview;
