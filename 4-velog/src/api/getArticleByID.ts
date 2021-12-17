export default function getArticleByID({ articleID }: { articleID: string }) {
  return fetch(`http://localhost:5005/api/article/${articleID}`);
}
