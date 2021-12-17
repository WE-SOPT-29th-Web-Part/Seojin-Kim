import React from 'react';
import { Wrapper } from './style';

function ArticleController({
  article: { title, summary, thumbnail, date, tags, body },
}: {
  article: Article;
}) {
  const deleteArticle = () => {};
  const patchArticle = () => {};
  return (
    <Wrapper>
      <div onClick={patchArticle}>수정</div>
      <div onClick={deleteArticle}>삭제</div>
    </Wrapper>
  );
}

export default ArticleController;
