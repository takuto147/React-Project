
import { useState } from "react"
import { useParams } from "react-router-dom"

export const PostForm = ({onPostSuccess}) => {
  const [post, setPost] = useState('')
  const { threadId } = useParams()

  const postInput = (event) => {
    setPost(event.target.value)
  }

  const handleSubmitPost = () => {
    const requestValuePost = {
      method: 'POST',
      header: { 'Content-Type': 'application/json' }, //サーバーに送るデータがJSON形式であることの明示
      body: JSON.stringify({ post: post })　//JSON.stringyはJSのオブジェクトをJSON文字列に変換するメソッド
    }

    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`, requestValuePost)
      .then(response => response.json())
      .then(data => {console.log('投稿完了！', data)
        setPost("")
        if (onPostSuccess){
          onPostSuccess()
        }
      })
      .catch(error => console.error('エラー発生：', error));

  }

  return (
    <div>
      <input type="text" value={post} onChange={postInput} placeholder="投稿はこちらから" />
      <button onClick={handleSubmitPost}>作成</button>
    </div>
  )
}