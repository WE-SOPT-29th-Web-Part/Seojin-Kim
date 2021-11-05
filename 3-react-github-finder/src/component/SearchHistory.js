import React, { useEffect, useState } from 'react';
import { HistoryWrapper } from '../style/Search';
import SearchHistoryItem from './SearchHistoryItem';

const SearchHistory = ({
  isHistoryVisible,
  histories,
  setHistories,
  setTargetUser,
}) => {
  const [itemClass, setItemClass] = useState('mode-invisible');

  useEffect(() => {
    isHistoryVisible
      ? setItemClass('mode-visible')
      : setItemClass('mode-invisible');
  }, [isHistoryVisible, histories]);

  return (
    histories.length && (
      <HistoryWrapper
        className={itemClass}
        onClick={(e) => e.stopPropagation()}
      >
        {histories.map((history, index) => (
          <SearchHistoryItem
            className={itemClass}
            key={index}
            history={history}
            setHistories={setHistories}
            histories={histories}
            setTargetUser={setTargetUser}
          />
        ))}
      </HistoryWrapper>
    )
  );
};

export default SearchHistory;
