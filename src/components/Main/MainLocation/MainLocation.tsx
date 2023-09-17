import React from 'react';
import { location } from './MainLocation.constants';
import { MainLocationContainer, MainLocationMap, MainLocationMapContainer, MainLocationTab, MainLocationTabs } from './MainLocation.styles';

type TTab = keyof typeof location;
const MainLocation = (): React.ReactElement => {
  const [selected, setMainLocationTab] = React.useState<TTab>('head');
  return (
    <MainLocationContainer>
      <MainLocationTabs>
        <MainLocationTab className={selected === 'head' ? 'checked' : ''}>
          <input type='radio' name='main-location-tab'
                 value='head' checked={selected === 'head'}
                 onChange={(e) => e.target.checked && setMainLocationTab('head')}
          />
          {location.head.name}
        </MainLocationTab>
        <MainLocationTab className={selected === 'branch' ? 'checked' : ''}>
          <input type='radio' name='main-location-tab'
                 value='head' checked={selected === 'branch'}
                 onChange={(e) => e.target.checked && setMainLocationTab('branch')}
          />
          {location.branch.name}
        </MainLocationTab>
      </MainLocationTabs>
      <MainLocationMapContainer>
        <MainLocationMap src={location[selected].src}
                allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </MainLocationMapContainer>
      <strong>{location[selected].address}</strong>
    </MainLocationContainer>
  );
};

export default MainLocation;
