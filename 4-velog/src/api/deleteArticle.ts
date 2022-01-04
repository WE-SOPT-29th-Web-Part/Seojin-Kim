export default function deleteArticle({ articleID }: { articleID: string }) {
  return fetch(`http://localhost:5005/api/article/${articleID}`, {
    method: 'DELETE',
  });
}
