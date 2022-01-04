import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import getArticleByID from '../../api/getArticleByID';
import Article from '../../components/Article';

function ArticlePage() {
  const { id }: { id: string } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    (async function getArticle() {
      const response = await getArticleByID({ articleID: id });
      const article = await response.json();
      setArticle(article);
    })();
  }, [id]);

  if (!article) return <div>로딩중</div>;
  return <Article article={article} isPreview={false} />;
}

export default ArticlePage;
