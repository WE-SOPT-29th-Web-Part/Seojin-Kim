export default function postArticle({ article }: { article: Article }) {
  return fetch('http://localhost:5005/api/article', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(article),
  });
}
