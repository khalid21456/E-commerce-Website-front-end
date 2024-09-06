"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Post({ params }) {
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        response.data.forEach((element) => {
          if (element.name.replace(/ /g, "_") == params.name) {
            setPost(element);
          }
        });
      } catch (error) {
        console.log(error);
        setPost({});
      }
    };

    fetchPost();
  }, []);
  console.log(post);
  return (
    <>
      <h1 className="text-5xl">{params.name}</h1>
      <h2 className="text-4xl">{post.email}</h2>
    
    </>
  );
}
