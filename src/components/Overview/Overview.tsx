import React, { useState } from 'react';
import { OverviewContainer, OverviewContainerTabs, OverviewContainerTabsItem, OverviewContent, OverviewContentItem } from 'src/components/Overview/Overview.styles';

const INITIAL_OVERVIEW_DATA = [
  {
    yearbundle: '2010-2014',
    years: [
      { year: 2014, content: [{ description: '설명을 적어주세요' }] },
      { year: 2013, content: [{ description: '설명을 적어주세요' }] },
      { year: 2012, content: [{ description: '설명을 적어주세요' }] },
      { year: 2011, content: [{ description: '설명을 적어주세요' }] },
      { year: 2010, content: [{ description: '설명을 적어주세요' }] },
    ],
  },
  {
    yearbundle: '2015-2023',
    years: [
      {
        year: 2023,
        content: [{ description: '설명을 적어주세요' }, { description: '설명을 적어주세요' }, { description: '설명을 적어주세요' }, { description: '설명을 적어주세요' }],
      },
      { year: 2022, content: [{ description: '설명을 적어주세요' }] },
      { year: 2021, content: [{ description: '설명을 적어주세요' }, { description: '설명을 적어주세요' }] },

      { year: 2020, content: [{ description: '설명을 적어주세요' }] },
      { year: 2019, content: [{ description: '설명을 적어주세요' }] },
      { year: 2018, content: [{ description: '설명을 적어주세요' }] },
      { year: 2017, content: [{ description: '설명을 적어주세요' }] },
      { year: 2016, content: [{ description: '설명을 적어주세요' }] },
      { year: 2015, content: [{ description: '설명을 적어주세요' }] },
    ],
  },
];

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
