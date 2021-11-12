import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import postArticle from '../../api/postArticle';
import useArticle from '../../api/useArticle';
import Store from '../../store';

export default function PreviewPage() {
  const [newPreview, setNewPreview] = useState('');

  const { article, contextDispatch } = useContext(Store);

  const { data, mutate } = useArticle();

  const publishArticle = () => {
    const newSummary = { summary: newPreview };
    contextDispatch({ type: 'SET_PREVIEW', value: newSummary });
    postArticle({ article: { ...article, summary: newPreview } });
    mutate([...data.article, article]);
  };

  return (
    <div>
      <input
        name='preview'
        type='text'
        placeholder='요약을 입력하세요'
        value={newPreview}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault();
          setNewPreview(e.target.value);
        }}
      ></input>
      <Link to='/home/postings' onClick={publishArticle}>
        출간하기
      </Link>
    </div>
  );
}
