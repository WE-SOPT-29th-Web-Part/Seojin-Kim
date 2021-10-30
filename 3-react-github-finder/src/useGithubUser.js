import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useGithubUser(username) {
  const { data, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
