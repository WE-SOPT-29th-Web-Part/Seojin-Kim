import React from 'react';
import Article from '../../../components/Article';
import useArticle from '../../../api/useArticle';

export default function PostingPage() {
  const { data, isLoading, isError } = useArticle();

  if (isLoading) return <div>Loading!</div>;

  if (isError) return <div>Error!</div>;

  return (
    <div>
      {data.article?.map((article: Article) => (
        <Article
          key={article.id}
          article={{ ...article, parsedTags: article.tags?.split(',') }}
        />
      ))}
    </div>
  );
}
