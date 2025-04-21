// src/api.js
/*
export const fetchData = async (setData) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/2');
  const data = await res.json();
  return () => setData(data.title);
};
*/

export async function fetchData() {
  const res = await fetch('/api/data');
  const data = await res.json();
  return data;
}
