import React from 'react';
import Layout from '@/components/layout/Layout';

const OvertimeHansinPage = () => {
  return (
    <Layout>
      <div style={{ width: '100%', height: '800px', paddingTop: '50px' }}>
        {/* 여기 경로를 hansincon 폴더의 HTML로 지정하세요 */}
        <iframe
          src="/hansincon/admin_secret.html"
          width="100%"
          height="100%"
          title="Hansincon 관리"
          style={{ border: 'none' }}
        />
      </div>
    </Layout>
  );
};

export default OvertimeHansinPage;
