import React from 'react';
import Tag from '../Tag';

export default function Article({
  article: { title, summary, tags, thumbnail, date },
}: {
  article: Article;
}) {
  return (
    <div>
      {thumbnail && <img src={thumbnail} alt='thumbnail' />}
      <div>{title}</div>
      <div>{summary}</div>
      <div>
        {tags.map((tag) => (
          <Tag content={tag} />
        ))}
      </div>
      <div>{date}</div>
    </div>
  );
}
