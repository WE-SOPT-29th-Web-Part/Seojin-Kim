import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import deleteArticle from '../../../api/deleteArticle';
import Store from '../../../store';
import { Wrapper } from './style';

function ArticleController({ article }: { article: Article }) {
  const history = useHistory();
  const { contextDispatch } = useContext(Store);
  const onDeleteArticle = async () => {
    if (!article.id) return;
    const deleteResponse = await deleteArticle({ articleID: article.id });
    if (deleteResponse.ok) history.goBack();
  };
  const onPatchArticle = () => {
    contextDispatch({ type: 'SET_ALL', value: article });
    history.push(`/articles/${article.id}/edit`);
  };

  return (
    <Wrapper>
      <div onClick={onPatchArticle}>수정</div>
      <div onClick={onDeleteArticle}>삭제</div>
    </Wrapper>
  );
}

export default ArticleController;
