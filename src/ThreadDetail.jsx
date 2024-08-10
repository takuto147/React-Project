import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { PostForm } from "./PostForm";


export const ThreadDetail = () => {
  const { threadId } = useParams()
  const [posts, setPosts] = useState([])


  const FetchPosts = () => {
    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`)
    .then(response => response.json())
    .then(data => {
      console.log('取得データ:', data)
      setPosts(data.posts)
    })
    .catch(error => console.error('エラー発生：', error));
  } // 関数化しPostForm内で再読み込みできるように変更

  useEffect(() => {
    FetchPosts();
  }, [threadId]);

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
                  {post.post}
                </li>
              )
            })
          )}
        </ul>
      </div>
      <PostForm onPostSuccess={FetchPosts}/>
    </>
  )
}