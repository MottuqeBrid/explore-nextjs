export default async function gatAllPosts() {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=15",
    {
      next: {
        revalidate: 10,
      },
    }
  );
  return result.json();
}
