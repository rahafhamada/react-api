import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const PostsPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setUsers(data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {loading
        ? "is loading"
        : users.map((item) => {
            return (
              <div key={item.id}>
                <h1>{item.title}</h1>
                <h2> {item.body} </h2>
              </div>
            );
          })}
    </div>
  );
};

export default PostsPage;
