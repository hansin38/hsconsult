import { useRouter } from 'next/router';
import React, { Fragment, useCallback } from 'react';
import Link from 'next/link';
import { adminMenu, menu } from '@/shared/constants/common.constants';
import { AsideContainer, AsideItem, AsideTabItem } from 'src/components/Aside/Aside.styles';

const Aside = (): React.ReactElement => {
  const router = useRouter();
  const path = router.pathname.split('/').slice(1);
  const query = router.query;

  const renderAsideItems = useCallback(() => {
    const result = [];
    (path[0] === '_admin' ? adminMenu : menu).forEach((item) => {
      const isMainPath = path.includes(item.path);
      if (isMainPath) {
        if (item.subPath) {
          item.subPath.forEach((subPath) => {
            const isActiveSubPath = path.includes(subPath.path);
            const isTab = subPath.tabs;
            result.push(
              <Fragment key={subPath.name}>
                <Link href={`/${path[0]}/${subPath.path}${isTab ? `/${subPath.tabs[0].path}` : ''}`}>
                  <AsideItem active={isActiveSubPath}>{subPath.name}</AsideItem>
                </Link>
                {isTab &&
                  isActiveSubPath &&
                  subPath.tabs.map((tab) => {
                    return (
                      <Link href={`/${path[0]}/${subPath.path}/${tab.path}`} key={`${subPath.name}_${tab.name}`}>
                        <AsideTabItem active={query.tab === tab.path}>- {tab.name}</AsideTabItem>
                      </Link>
                    );
                  })}
              </Fragment>
            );
          });
        }
      }
    });
    return result;
  }, [router]);
  return <AsideContainer>{renderAsideItems()}</AsideContainer>;
};

export default Aside;
