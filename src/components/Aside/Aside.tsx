import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import Link from 'next/link';
import { menu } from '@/shared/constants/common.constants';
import { AsideContainer, AsideItem } from 'src/components/Aside/Aside.styles';

const Aside = (): React.ReactElement => {
  const router = useRouter();
  const path = router.pathname.split('/').slice(1);

  const renderAsideItems = useCallback(() => {
    const result = [];
    menu.forEach((item) => {
      const isMainPath = path.includes(item.path);
      if (isMainPath) {
        result.push();
        if (item.subPath) {
          item.subPath.forEach((subPath) => {
            const isActiveSubPath = path.includes(subPath.path);
            result.push(
              <AsideItem key={subPath.path} active={isActiveSubPath}>
                <Link href={subPath.path}>{subPath.name}</Link>
              </AsideItem>
            );
          });
        }
      }
    });
    return result;
  }, [path]);
  return <AsideContainer>{renderAsideItems()}</AsideContainer>;
};

export default Aside;
