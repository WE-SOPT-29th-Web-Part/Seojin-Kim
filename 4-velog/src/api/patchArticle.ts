export default function patchArticle({ article }: { article: Article }) {
  console.log(article);
  return fetch(`http://localhost:5005/api/article/${article.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(article),
  });
}
