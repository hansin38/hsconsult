import { useRouter } from 'next/router';
import React, { Fragment, useCallback } from 'react';
import Link from 'next/link';
import { menu } from '@/shared/constants/common.constants';
import { AsideContainer, AsideItem, AsideTabItem } from 'src/components/Aside/Aside.styles';

const Aside = (): React.ReactElement => {
  const router = useRouter();
  const path = router.pathname.split('/').slice(1);
  const query = router.query;

  console.log(path);

  const renderAsideItems = useCallback(() => {
    const result = [];
    menu.forEach((item) => {
      const isMainPath = path.includes(item.path);
      if (isMainPath) {
        if (item.subPath) {
          item.subPath.forEach((subPath) => {
            const isActiveSubPath = path.includes(subPath.path);
            const isTab = subPath.tabs;
            console.log(subPath);

            result.push(
              <Fragment key={subPath.name}>
                <Link href={`${subPath.path}${isTab ? `/?tab=${subPath.tabs[0].path}` : ''}`}>
                  <AsideItem active={isActiveSubPath}>{subPath.name}</AsideItem>
                </Link>
                {isTab &&
                  isActiveSubPath &&
                  subPath.tabs.map((tab) => {
                    return (
                      <Link href={`${subPath.path}/?tab=${tab.path}`} key={`${subPath.name}_${tab.name}`}>
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
