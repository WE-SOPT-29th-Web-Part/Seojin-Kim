export default function postImage(formData: FormData) {
  console.log(formData);
  return fetch('http://localhost:5005/api/image', {
    method: 'POST',
    body: formData,
  });
}
