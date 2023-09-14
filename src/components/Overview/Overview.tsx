import React, { useState } from 'react';
import { OverviewContainer, OverviewContainerTabs, OverviewContainerTabsItem, OverviewContent, OverviewContentItem } from 'src/components/Overview/Overview.styles';
import { INITIAL_OVERVIEW_DATA } from './Overview.constants';

const Overview = (): React.ReactElement => {
  const [activeTab, setActiveTab] = useState(INITIAL_OVERVIEW_DATA[1].yearbundle);
  return (
    <OverviewContainer>
      <OverviewContainerTabs>
        {INITIAL_OVERVIEW_DATA.map((overview) => (
          <OverviewContainerTabsItem key={overview.yearbundle} active={overview.yearbundle === activeTab} onClick={() => setActiveTab(overview.yearbundle)}>
            {overview.yearbundle}
          </OverviewContainerTabsItem>
        ))}
      </OverviewContainerTabs>
      <OverviewContent>
        {INITIAL_OVERVIEW_DATA.find((overview) => overview.yearbundle === activeTab).years.map((year) => (
          <OverviewContentItem key={year.year}>
            <div>{year.year}</div>
            <ul>
              {year.content.map((content) => (
                <li key={content.description}>{content.description}</li>
              ))}
            </ul>
          </OverviewContentItem>
        ))}
      </OverviewContent>
    </OverviewContainer>
  );
};

export default Overview;
