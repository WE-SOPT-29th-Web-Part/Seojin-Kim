import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Tag from '../../components/Tag';
import Store from '../../store';

export default function WritePage() {
  const [tags, setTags] = useState<string[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newTag, setNewTag] = useState('');
  const [newBody, setNewBody] = useState('');

  const { contextDispatch } = useContext(Store);

  const saveWrite = () => {
    const newWrite = { title: newTitle, body: newBody, parsedTags: tags };
    contextDispatch({ type: 'SET_WRITE', value: newWrite });
  };

  return (
    <div>
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
      >
        {tags.map((tag) => (
          <Tag content={tag} />
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
      />
      <Link to='/preview' onClick={saveWrite}>
        출간하기
      </Link>
    </div>
  );
}
