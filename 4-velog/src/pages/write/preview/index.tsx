import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import patchArticle from '../../../api/patchArticle';
import postArticle from '../../../api/postArticle';
import postImage from '../../../api/postImage';
import useArticles from '../../../api/useArticles';
import { GreenButton } from '../../../components/Button/style';
import Store from '../../../store';
import {
  GridWrapper,
  ImageInput,
  StyledContainer,
  StyledWrapper,
  Title,
} from './style';

export default function PreviewPage({ isEdit = false }: { isEdit?: boolean }) {
  const [newPreview, setNewPreview] = useState('');

  const { article, contextDispatch } = useContext(Store);
  const [imageURL, setImageURL] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const { mutate } = useArticles();

  useEffect(() => {
    if (isEdit) {
      setImageURL(article.thumbnail);
      setNewPreview(article.summary);
    }
  }, [isEdit]);

  const publishArticle = async () => {
    const newSummary = { summary: newPreview };
    contextDispatch({
      type: 'SET_PREVIEW',
      value: newSummary,
      thumbnail: imageURL,
    });
    await postArticle({
      article: { ...article, summary: newPreview, thumbnail: imageURL },
    });
    mutate();
  };

  const onPatchArticle = async () => {
    patchArticle({
      article: { ...article, summary: newPreview, thumbnail: imageURL },
    });
  };

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (!target.files) return;
    const file = target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    const response = await postImage(formData);
    const responseJSON = await response.json();
    setImageURL(responseJSON.url);
  };

  const fireFileInput = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  };

  return (
    <StyledWrapper>
      <StyledContainer>
        <Title>포스트 미리보기</Title>
        <ImageInput onClick={fireFileInput}>
          {imageURL ? (
            <img src={imageURL} alt='thumbnail' />
          ) : (
            <div>썸네일 업로드</div>
          )}
          <input type='file' ref={fileInputRef} onChange={uploadImage} />
        </ImageInput>
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
              <Link
                to='/home/postings'
                onClick={isEdit ? onPatchArticle : publishArticle}
              >
                출간하기
              </Link>
            </GreenButton>
          </div>
        </GridWrapper>
      </StyledContainer>
    </StyledWrapper>
  );
}
