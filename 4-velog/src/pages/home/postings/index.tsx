import React from 'react';
import useSWR from 'swr';
import Article from '../../../components/Article';
import { getFetcher } from '../../../utils/api/getFetcher';

export default function PostingPage() {
  const { data, error } = useSWR(
    'https://velog-dummy-server.herokuapp.com/articles',
    getFetcher
  );

  if (error) return <div>failed to load</div>;

  if (!data) return <div>loading...</div>;

  return (
    <div>
      {data.article?.map((article: Article) => (
        <Article
          key={article.id}
          article={{ ...article, parsedTags: article.tags.split(',') }}
        />
      ))}
    </div>
  );
}
