import useSWR from 'swr';

const fetcher = (...args) =>
  fetch(...args).then((res) => {
    if (!res.ok) {
      const error = new Error('Wrong Request');
      error.status = res.status;
      throw error;
    }
    return res.json();
  });

const option = {
  onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
    if (error.status === 404 || error.status === 403) return;
    if (retryCount >= 10) return;
    setTimeout(() => revalidate({ retryCount }), 10000);
  },
};
export default function useGithubUser(username) {
  const { data, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher,
    option
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
