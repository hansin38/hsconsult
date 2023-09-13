import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BreadCrumbContainer, BreadCrumbItem } from 'src/components/BreadCrumb/BreadCrumb.styles';
import { menu } from '@/shared/constants/common.constants';

const BreadCrumb = (): React.ReactElement => {
  const router = useRouter();
  const path = router.pathname.split('/').slice(1);

  const renderBreadCrumbItems = useCallback(() => {
    const result = [];
    menu.forEach((item) => {
      const isMainPath = path.includes(item.path);
      if (isMainPath) {
        result.push(
          <BreadCrumbItem key={item.path} active={!item.subPath}>
            <Link href={`/${item.path}/${item?.subPath[0]?.path}`}>{item.name}</Link>
          </BreadCrumbItem>
        );
        if (item.subPath) {
          const subPath = item.subPath.find((subPath) => path.includes(subPath.path));
          subPath &&
            result.push(
              <BreadCrumbItem key={subPath.path} active>
                <Link href={subPath.path}>{subPath.name}</Link>
              </BreadCrumbItem>
            );
        }
      }
    });
    return result;
  }, [path]);

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
