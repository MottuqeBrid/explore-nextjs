const Comments = async ({ promise }) => {
  const comments = await promise;
  // console.log(comments);
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold">Comments: {comments.length}</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="border-b py-2">
            <div className="flex items-start flex-col space-x-2">
              <span className="font-bold text-sm">{comment.name}</span>
              <span>Email: {comment.email}</span>
            </div>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
