import React, { useState } from 'react';
import { HistoryContainer, HistoryContainerTabs, HistoryContainerTabsItem, HistoryContent, HistoryContentItem } from 'src/components/History/History.styles';
import { INITIAL_OVERVIEW_DATA } from './History.constants';

const History = (): React.ReactElement => {
  const [activeTab, setActiveTab] = useState(INITIAL_OVERVIEW_DATA[1].yearbundle);
  return (
    <HistoryContainer>
      <HistoryContainerTabs>
        {INITIAL_OVERVIEW_DATA.map((overview) => (
          <HistoryContainerTabsItem key={overview.yearbundle} active={overview.yearbundle === activeTab} onClick={() => setActiveTab(overview.yearbundle)}>
            {overview.yearbundle}
          </HistoryContainerTabsItem>
        ))}
      </HistoryContainerTabs>
      <HistoryContent>
        {INITIAL_OVERVIEW_DATA.find((overview) => overview.yearbundle === activeTab).years.map((year) => (
          <HistoryContentItem key={year.year}>
            <div>{year.year}</div>
            <ul>
              {year.content.map((content) => (
                <li key={content.description}>{content.description}</li>
              ))}
            </ul>
          </HistoryContentItem>
        ))}
      </HistoryContent>
    </HistoryContainer>
  );
};

export default History;
