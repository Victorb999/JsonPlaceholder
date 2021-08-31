import { useEffect, useState } from "react";
import { api } from "../../services/api";
import styles from "./styles.module.scss";

type Album = {
  id: number;
  title: string;
  userId: number;
};

function Albums() {
  const [albums, setAlbum] = useState<Album[]>([] as Album[]);
  useEffect(() => {
    async function getAlbum() {
      const res = await api.get("albums").then((response) => {
        return response.data;
      });
      setAlbum(res);
    }
    getAlbum();
  }, []);

  return (
    <div className="container">
      <h1>Albums</h1>
      <div className="grid">
        {albums.map((album) => {
          return (
            <div key={album.id} className={styles.album}>
              <h1>Album #{album.id}</h1>
              <h2>{album.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Albums;
