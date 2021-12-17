import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Route, useRouteMatch } from 'react-router';
import { GreenButton } from '../../components/Button/style';
import Tag from '../../components/Tag';
import Store from '../../store';
import { StyledContainer, StyledWrapper } from './style';
import PreviewPage from './preview';

export default function WritePage({ isEdit = false }: { isEdit?: boolean }) {
  const [tags, setTags] = useState<string[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newTag, setNewTag] = useState('');
  const [newBody, setNewBody] = useState('');

  const match = useRouteMatch();

  const { contextDispatch, article } = useContext(Store);

  const saveWrite = () => {
    const newWrite = { title: newTitle, body: newBody, tags };
    contextDispatch({ type: 'SET_WRITE', value: newWrite });
  };

  useEffect(() => {
    if (isEdit) {
      setNewTitle(article.title);
      setNewBody(article.body);
      setTags(article.tags);
    }
  }, [isEdit]);

  return (
    <StyledWrapper>
      <StyledContainer>
        <input
          name='title'
          type='text'
          placeholder='제목을 입력하세요'
          value={newTitle}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            setNewTitle(e.target.value);
          }}
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setTags([...tags, newTag]);
            setNewTag('');
          }}
          autoComplete='off'
        >
          {tags.map((tag) => (
            <Tag content={tag} key={tag} />
          ))}
          <input
            name='new_tag'
            type='text'
            placeholder='태그를 입력하세요'
            value={newTag}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.preventDefault();
              setNewTag(e.target.value);
            }}
          />
        </form>
        <textarea
          name='content'
          onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            e.preventDefault();
            setNewBody(e.target.value);
          }}
          placeholder='당신의 이야기를 적어보세요...'
          value={newBody}
        />
        <GreenButton>
          <Link to={`${match.path}/preview`} onClick={saveWrite}>
            출간하기
          </Link>
        </GreenButton>
      </StyledContainer>
      <Route path={`${match.path}/preview`}>
        <PreviewPage isEdit={isEdit} />
      </Route>
    </StyledWrapper>
  );
}
