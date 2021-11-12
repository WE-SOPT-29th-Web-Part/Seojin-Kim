import React from 'react';
import Tag from '../Tag';

export default function Article({
  article: { title, summary, parsedTags: tags, thumbnail, date },
}: {
  article: Article;
}) {
  return (
    <div>
      {thumbnail && thumbnail !== 'undefined' && (
        <img src={thumbnail} alt='thumbnail' />
      )}
      <div>{title}</div>
      {summary && summary !== 'undefined' && <div>{summary}</div>}
      <div>
        {tags?.map((tag, index) => (
          <Tag content={tag} key={index} />
        ))}
      </div>
      <div>{date}</div>
    </div>
  );
}
