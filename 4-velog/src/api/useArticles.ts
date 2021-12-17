import useSWR from 'swr';
import { getFetcher } from './getFetcher';

export default function useArticles() {
  const { data, error, mutate } = useSWR(
    'http://localhost:5005/api/article',
    getFetcher
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}
