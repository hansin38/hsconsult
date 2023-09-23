import React, { Fragment, useCallback } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BreadCrumbContainer, BreadCrumbItem } from 'src/components/BreadCrumb/BreadCrumb.styles';
import { adminMenu, menu } from '@/shared/constants/common.constants';

const BreadCrumb = (): React.ReactElement => {
  const router = useRouter();
  const path = router.pathname.split('/').slice(1);
  const query = router.query;

  const renderBreadCrumbItems = useCallback(() => {
    const result = [];
    (path[0] === '_admin' ? adminMenu : menu).forEach((item) => {
      const isMainPath = path.includes(item.path);
      if (isMainPath) {
        result.push(
          <BreadCrumbItem key={item.path} active={!item.subPath}>
            <Link href={`/${item.path}/${item?.subPath[0]?.path}`}>{item.name}</Link>
          </BreadCrumbItem>
        );
        if (item.subPath) {
          const subPath = item.subPath.find((subPath) => path.includes(subPath.path));
          const activeTab = subPath?.tabs?.find((tab) => tab.path === query.tab);
          subPath &&
          result.push(
            <Fragment key={subPath.path}>
                <BreadCrumbItem active={!activeTab}>
                  <Link href={`/${path[0]}/${subPath.path}${activeTab ? `/${subPath.tabs[0].path}` : ''}`}>{subPath.name}</Link>
                </BreadCrumbItem>
                {activeTab && (
                  <BreadCrumbItem active>
                    <Link href={`/${path[0]}/${subPath.path}/${activeTab.path}`}>{activeTab.name}</Link>
                  </BreadCrumbItem>
                )}
              </Fragment>
            );
        }
      }
    });
    return result;
  }, [router, path]);

  return (
    <BreadCrumbContainer>
      <BreadCrumbItem>
        <Link href="/">Home</Link>
      </BreadCrumbItem>
      {renderBreadCrumbItems()}
    </BreadCrumbContainer>
  );
};

export default BreadCrumb;
