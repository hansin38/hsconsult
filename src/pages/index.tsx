import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import { getPage, TArticle } from '@/shared/apis/appApi';



const Home: NextPage = (): React.ReactElement => {
  const [page, setPage] = React.useState<Array<TArticle>>([]);
  const test = () => {
    getPage('inquiry', 1, 10).then(res => {
      setPage(res.data);
    });
  };

  return <Layout transparentHeader>

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <button onClick={test}>
      api 테스트
    </button>
    <pre>{JSON.stringify(page, null, 2)}</pre>
    </Layout>;
};

// Home.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default Home;
