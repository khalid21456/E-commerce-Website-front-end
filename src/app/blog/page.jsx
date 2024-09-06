"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setPosts(response.data);
      } catch (error) {
        console.log(error);
        setPosts([]);
      }
    };

    fetchPosts();
  }, []);
  return (
    <>
      <h1>BLOG PAGE</h1>
      <ul type="disc">
        {posts.map((element, index) => {
          return (
            <li key={index}>
              {index + 1}. <Link href={"/posts/"+element.name.replace(/ /g,"_")}>{element.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
