import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import postArticle from '../../../api/postArticle';
import useArticles from '../../../api/useArticles';
import { GreenButton } from '../../../components/Button/style';
import Store from '../../../store';
import { GridWrapper, StyledContainer, StyledWrapper, Title } from './style';

export default function PreviewPage() {
  const [newPreview, setNewPreview] = useState('');

  const { article, contextDispatch } = useContext(Store);

  const { mutate } = useArticles();

  const publishArticle = async () => {
    const newSummary = { summary: newPreview };
    contextDispatch({ type: 'SET_PREVIEW', value: newSummary });
    await postArticle({ article: { ...article, summary: newPreview } });
    mutate();
  };

  return (
    <StyledWrapper>
      <StyledContainer>
        <Title>포스트 미리보기</Title>
        <GridWrapper>
          <input
            name='preview'
            type='text'
            placeholder='당신의 포스트를 짧게 소개해보세요'
            value={newPreview}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.preventDefault();
              setNewPreview(e.target.value);
            }}
            autoComplete='off'
          ></input>
          <div>
            <GreenButton>
              <Link to='/home/postings' onClick={publishArticle}>
                출간하기
              </Link>
            </GreenButton>
          </div>
        </GridWrapper>
      </StyledContainer>
    </StyledWrapper>
  );
}
