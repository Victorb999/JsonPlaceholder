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
  const [posts, setPost] = useState<Post[]>([] as Post[]);

  const getPost = async () => {
    const res = await api.get("posts");
    setPost(res.data);
  };
  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="container">
      <h1>Posts</h1>
      <div className="grid">
        {posts.map((post) => {
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
