import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { dehydrate } from 'react-query';
import Posts from '@/components/Posts/Posts';
import { HomeContainer, getExampleState, setExampleState } from '@/shared/constants/pages';
import queryClient from '@/shared/configs/queryClient';
import { useExampleStore } from '@/stores/useExampleStore';
import useQueryExample from '@/components/Posts/Posts.hook';



const Home: NextPage = (): React.ReactElement => {
  const example = useExampleStore(getExampleState);
  const setExample = useExampleStore(setExampleState);
  useEffect(() => setExample('Durian NEXT exmaple'), []);

  return (
    <HomeContainer>
      <h1>{example}</h1>
      <Posts />
    </HomeContainer>
  );
};

export async function getStaticProps() {
  const quries = [queryClient.prefetchQuery(useQueryExample.getKeys(), () => useQueryExample.fetcher())];
  await Promise.all(quries);
  return { props: { dehydratedState: dehydrate(queryClient) } };
}

export default Home;
