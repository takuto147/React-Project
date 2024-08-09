import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"


export const ThreadDetail = () => {
  const { threadId } = useParams()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`)
      .then(response => response.json())
      .then(data => {
        console.log('取得データ:', data)
        setPosts(data.posts)
      })
      .catch(error => console.error('エラー発生：', error));
  }, []);

  return (
    <>
      <div>
        {console.log(posts)}
        <h2>一覧</h2>
        <ul>
          {posts.length === 0 ? (
            <li>POSTがありません！投稿してください！</li>
          ) : (
            posts.map((post) => {
              return (
                <li key={post.id}>
                  {post.title}
                </li>
              )
            })
          )}
        </ul>
      </div>
    </>
  )
}