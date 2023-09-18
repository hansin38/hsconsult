import Image from 'next/image';
import React from 'react';
import {
  OrganizationContainer,
  OrganizationContent,
  OrganizationExecutivesGroup,
  OrganizationTitle,
  OrganizationWrapper,
  ProfileWrapper,
  SubWrapper,
  Title,
  Wrapper,
} from 'src/components/Organization/Organization.styles';
import { INITAL_EXECUTIVES_GROUP } from './Organization.constants';

const Organization = (): React.ReactElement => {
  return (
    <OrganizationContainer>
      <OrganizationWrapper>
        <OrganizationTitle>조직구성</OrganizationTitle>
        <OrganizationContent>
          <Image src="/images/organization-detail.png" layout={'fill'} objectFit="contain" alt="조직도 상세" />
        </OrganizationContent>
      </OrganizationWrapper>
      <OrganizationExecutivesGroup>
        <OrganizationTitle>임원소개</OrganizationTitle>
        {INITAL_EXECUTIVES_GROUP.map((group) => (
          <Wrapper key={group.position}>
            <Title>{group.position}</Title>
            <SubWrapper>
              {group.composition.map((composit) => (
                <ProfileWrapper key={composit.name}>
                  {composit.name} {group.position}
                </ProfileWrapper>
              ))}
            </SubWrapper>
          </Wrapper>
        ))}
      </OrganizationExecutivesGroup>
    </OrganizationContainer>
  );
};

export default Organization;
