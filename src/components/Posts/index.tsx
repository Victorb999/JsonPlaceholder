import { useEffect, useState } from "react";
import { api } from "../../services/api";
import styles from "./styles.module.scss";

type Post = {
  id: number;
  title: string;
  body: number;
  userId: number;
};

function Posts() {
  const [post, setPost] = useState<Post[]>([] as Post[]);
  useEffect(() => {
    async function getPost() {
      const res = await api
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          return response.data;
        });
      setPost(res);
    }
    getPost();
  }, []);

  return (
    <div className={styles.postsContainer}>
      <h1>Posts</h1>
      <div className={styles.postsGrid}>
        {post.map((post) => {
          return (
            <div key={post.id} className={styles.post}>
              <h1>Post #{post.id}</h1>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
