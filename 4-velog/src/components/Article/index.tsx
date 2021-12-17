import React from 'react';
import Tag from '../Tag';
import { DateTime, Summary, Title, Wrapper, Thumbnail } from './style';

export default function Article({
  article: { title, summary, thumbnail, date, tags },
}: {
  article: Article;
}) {
  return (
    <Wrapper>
      {thumbnail && thumbnail !== 'undefined' && (
        <Thumbnail src={thumbnail} alt='thumbnail' />
      )}
      <Title>{title}</Title>
      {summary && summary !== 'undefined' && <Summary>{summary}</Summary>}
      <div>
        {tags?.map((tag, index) => (
          <Tag content={tag} key={index} />
        ))}
      </div>
      <DateTime>{date}</DateTime>
    </Wrapper>
  );
}
