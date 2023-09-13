import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import Hello from '@/components/Hello/Hello';

const IntroHelloPage: NextPage = (): React.ReactElement => {
  return (
    <Layout transparentHeader>
      {/* 상단 이미지 영역 */}
      <div style={{ width: '100%', height: 240, background: 'transparent', borderBottom: '1px solid #ddd' }}></div>
      <ContentsLayout>
        <Hello />
      </ContentsLayout>
    </Layout>
  );
};

export default IntroHelloPage;
