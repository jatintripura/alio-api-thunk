import { useDispatch, useSelector } from "react-redux";

import React, { useEffect } from "react";
import { fetchPosts } from "@/features/posts/postsSlice";

function Posts() {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let content;
  if (isLoading) {
    content = <h1 className=" text-center p-4">Loading post...</h1>;
  }
  if (!isLoading && isError) {
    content = <h1 className="text-center p-4">{error}</h1>;
  }
  if (!isError && !isLoading && posts.length === 0) {
    content = <h1 className="text-center p-4">No post found..!</h1>;
  }
  if (!isError && !isLoading && posts.length > 0) {
    content = (
      <ul className="flex flex-col gap-y-4 p-4">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }
  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] bg-gray-300 ">{content}</div>
    </div>
  );
}

export default Posts;
