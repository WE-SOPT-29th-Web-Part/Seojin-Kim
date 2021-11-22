import React from 'react';
import { HistoryDeleteButton, HistoryItem } from '../style/Search';

const SearchHistoryItem = ({
  history,
  histories,
  setHistories,
  setTargetUser,
}) => {
  const deleteHistory = () => {
    const newHistory = histories.filter((h) => h !== history);
    setHistories(newHistory);
    localStorage.setItem('history', JSON.stringify(newHistory));
  };
  return (
    <HistoryItem onClick={() => setTargetUser(history)}>
      <div>{history}</div>
      <HistoryDeleteButton onClick={deleteHistory}>X</HistoryDeleteButton>
    </HistoryItem>
  );
};

export default SearchHistoryItem;
