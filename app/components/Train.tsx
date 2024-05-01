"use client";
import React, { useEffect } from "react";
import { useState } from "react";
function Train() {
  interface Post {
    id: number;
    title: string;
  }
  const BASE_URL = "https://jsonplaceholder.typicode.com";
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`${BASE_URL}/posts`);
      const posts = (await response.json()) as Post[];
      setPosts(posts)
    };
  }, []);

  return (
    <div>
      <h1>Data Fething in react </h1>
      <ul>
        {" "}
        {posts.map((post) => {
          return <li key={post.id}>{post.title} </li>;
        })}{" "}
      </ul>
    </div>
  );
}

export default Train;
