import React from 'react';
import type { NextPage } from 'next';
import axios from 'axios';
import { css } from '@emotion/react';
import Layout from '@/components/layout/Layout';


const Home: NextPage = (): React.ReactElement => {
  const [sql, setSql] = React.useState('');
  const [result, setResult] = React.useState('');
  const test = async () => {
    axios.post('/api/__sql__', { sql }).then(res => {
      setResult(res.data);
    });
  };

  return (<Layout>

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <textarea css={css`width: 500px;height: 200px;`} value={sql} onChange={(e)=>setSql(e.target.value)} />
    <button onClick={test}>
      api 테스트
    </button>
    <pre>{JSON.stringify(result, null, 2)}</pre>
    </Layout>);
};

export default Home;
