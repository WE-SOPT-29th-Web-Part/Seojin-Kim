import React, { useEffect, useState } from 'react';

import { Input } from '../style/Input';
import SearchHistory from './SearchHistory';

const SearchInput = ({ setTargetUser }) => {
  const [histories, setHistories] = useState([]);
  const [isHistoryVisible, setHistoryVisibility] = useState(false);

  useEffect(() => {
    const storedHistory = localStorage.getItem('history');
    if (storedHistory) setHistories(JSON.parse(storedHistory));
    document.addEventListener('click', hideSearchHistory);
  }, []);

  const handleInput = (e) => {
    e.preventDefault();
    const inputElement = e.target.elements.username;
    setTargetUser(inputElement.value);
    const newHistory = Array.from(
      new Set([...histories, inputElement.value])
    ).slice(-3);
    setHistories(newHistory);
    localStorage.setItem('history', JSON.stringify(newHistory));
    inputElement.value = '';
  };

  const showSearchHistory = () => setHistoryVisibility(true);
  const hideSearchHistory = () => setHistoryVisibility(false);

  return (
    <div style={{ position: 'relative' }}>
      <form autoComplete='off' onSubmit={handleInput}>
        <Input
          onClick={(e) => {
            e.stopPropagation();
            showSearchHistory();
          }}
          name='username'
          type='text'
          autoComplete='off'
          placeholder='Github 프로필을 검색해보세요'
        />
      </form>
      <SearchHistory
        isHistoryVisible={isHistoryVisible}
        histories={histories}
        setHistories={setHistories}
        setTargetUser={setTargetUser}
      />
    </div>
  );
};

export default SearchInput;
