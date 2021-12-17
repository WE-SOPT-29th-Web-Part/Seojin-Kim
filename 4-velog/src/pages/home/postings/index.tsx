import React from 'react';
import Article from '../../../components/Article';
import useArticles from '../../../api/useArticles';

export default function PostingPage() {
  const { data, isLoading, isError } = useArticles();

  if (isLoading) return <div>Loading!</div>;

  if (isError) return <div>Error!</div>;

  return (
    <div>
      {data.length ? (
        data.map((article: Article) => (
          <Article key={article.id} article={article} isPreview={true} />
        ))
      ) : (
        <div>글쓰기를 눌러 포스트를 작성해주세요</div>
      )}
    </div>
  );
}
