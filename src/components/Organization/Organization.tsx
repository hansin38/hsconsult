import Image from 'next/image';
import React from 'react';
import {
  OrganizationContainer,
  OrganizationContent,
  // OrganizationExecutivesGroup,
  OrganizationTitle,
  OrganizationWrapper,
  // ProfileWrapper,
  // SubWrapper,
  // Title,
  // Wrapper,
} from 'src/components/Organization/Organization.styles';
// import { INITAL_EXECUTIVES_GROUP } from './Organization.constants';

const Organization = (): React.ReactElement => {
  return (
    <OrganizationContainer>
      <OrganizationWrapper>
        <OrganizationTitle>조직도</OrganizationTitle>
        <OrganizationContent>
          <Image src="/images/organization.svg" layout={'fill'} objectFit="contain" alt="조직도 상세" />
        </OrganizationContent>
      </OrganizationWrapper>
    </OrganizationContainer>
  );
};

export default Organization;
