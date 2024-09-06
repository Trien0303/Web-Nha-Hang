// src/utils/apiHelpers.ts
export async function fetchMenuItems(): Promise<MenuItem[]> {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments'); // Sử dụng API của bạn
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return await res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
