export default function postImage(formData: FormData) {
  return fetch('http://localhost:5005/api/image', {
    method: 'POST',
    body: formData,
  });
}
