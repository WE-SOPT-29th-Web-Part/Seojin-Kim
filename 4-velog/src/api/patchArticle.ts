export default function patchArticle({ article }: { article: Article }) {
  return fetch(`http://localhost:5005/api/article/${article.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(article),
  });
}
