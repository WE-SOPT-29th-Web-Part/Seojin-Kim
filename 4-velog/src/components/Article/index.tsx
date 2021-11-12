import React from 'react';
import Tag from '../Tag';
import { DateTime, Summary, Title, Wrapper } from './style';

export default function Article({
  article: { title, summary, parsedTags: tags, thumbnail, date },
}: {
  article: Article;
}) {
  return (
    <Wrapper>
      {thumbnail && thumbnail !== 'undefined' && (
        <img src={thumbnail} alt='thumbnail' />
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
