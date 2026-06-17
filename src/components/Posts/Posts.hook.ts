import { useQuery } from 'react-query';
import QUERY_KEYS from '@/shared/apis/queryKeys/example';
import { exampleApi } from '@/shared/apis/exampleApi';
import { IPost } from '../Post/Post.types';

export default function useQueryPosts() {
  return useQuery(useQueryPosts.getKeys(), () => useQueryPosts.fetcher(), {
    staleTime: Infinity,
    retry: false,
  });
}

useQueryPosts.getKeys = () => [QUERY_KEYS.EXAMPLE_POSTS];
useQueryPosts.fetcher = () => exampleApi.get<IPost[]>('/posts');
