import React from 'react';
import Tag from '../Tag';
import ArticleController from './controller';
import { DateTime, Summary, Title, Wrapper, Thumbnail } from './style';

export default function Article({
  article,
  isPreview,
}: {
  article: Article;
  isPreview: boolean;
}) {
  const { title, summary, thumbnail, date, tags, body } = article;
  return (
    <Wrapper isPreview={isPreview}>
      {thumbnail && thumbnail !== 'undefined' && (
        <Thumbnail src={thumbnail} alt='thumbnail' />
      )}
      <Title>{title}</Title>
      {!isPreview && <ArticleController article={article} />}
      {isPreview && <Summary>{summary}</Summary>}
      <div>
        {tags?.map((tag, index) => (
          <Tag content={tag} key={index} />
        ))}
      </div>
      <DateTime>{date}</DateTime>
      {!isPreview && <Summary>{body}</Summary>}
    </Wrapper>
  );
}
