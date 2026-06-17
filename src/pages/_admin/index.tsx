import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';

const AdminAuth: NextPage = (): React.ReactElement => {
  useEffect(() => {
    if (typeof window === 'undefined' || !window) return;
    if (window.localStorage.hansinAdmin === 'true') {
      window.location.href = '/_admin/notice';
      return;
    }
    const password = window.prompt('비밀번호를 입력해주세요.');
    if (password === 'hansin1979') {
      window.localStorage.setItem('hansinAdmin', 'true');
      window.location.href = '/_admin/notice';
    }
  }, []);

  return (
    <Layout>
    </Layout>
  );
};

export default AdminAuth;
