import React from 'react';
import { useHistory } from 'react-router';
import deleteArticle from '../../../api/deleteArticle';
import { Wrapper } from './style';

function ArticleController({ article }: { article: Article }) {
  const history = useHistory();
  const onDeleteArticle = async () => {
    if (!article.id) return;
    const deleteResponse = await deleteArticle({ articleID: article.id });
    if (deleteResponse.ok) history.goBack();
  };
  const onPatchArticle = () => {};
  return (
    <Wrapper>
      <div onClick={onPatchArticle}>수정</div>
      <div onClick={onDeleteArticle}>삭제</div>
    </Wrapper>
  );
}

export default ArticleController;
