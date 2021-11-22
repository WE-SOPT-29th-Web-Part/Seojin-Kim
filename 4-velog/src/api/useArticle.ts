import useSWR from 'swr';
import { getFetcher } from './getFetcher';

export default function useArticle() {
  const { data, error, mutate } = useSWR(
    'https://velog-dummy-server.herokuapp.com/articles',
    getFetcher
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}
