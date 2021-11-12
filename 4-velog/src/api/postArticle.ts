export default function postArticle({ article }: { article: Article }) {
  console.log(article);
  return fetch('https://velog-dummy-server.herokuapp.com/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(article),
  });
}
