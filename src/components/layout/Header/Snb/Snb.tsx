import React from 'react';
import {} from './Snb.constants';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { menu } from '@/shared/constants/common.constants';
import { SnbContainer } from './Snb.styles';

const Snb = (): React.ReactElement => {
  const router = useRouter();
  return (
    <SnbContainer className={'snb'}>
      {menu.map(gnbItem =>
        <div key={gnbItem.path}>
          {gnbItem.subPath.map(subItem =>
            <Link key={subItem.path}
                  href={subItem.path === 'index' ? `/${gnbItem.path}` : `/${gnbItem.path}/${subItem.path}`}
                  className={router.pathname === `/${gnbItem.path}/${subItem.path}` ? 'active' : ''}>
              {subItem.name}
            </Link>)}
        </div>)
      }
    </SnbContainer>
  );
};

export default Snb;
