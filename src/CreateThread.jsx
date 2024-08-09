import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const CreateThread = () => {
  const [title, setTitle] = useState('')
  const navigate = useNavigate()
  const titleInput = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = () => {
    const requestValue = {
      method: 'POST',
      header: { 'Content-Type': 'application/json' }, //サーバーに送るデータがJSON形式であることの明示
      body: JSON.stringify({ title: title })　//JSON.stringyはJSのオブジェクトをJSON文字列に変換するメソッド
    }

    fetch('https://railway.bulletinboard.techtrain.dev/threads', requestValue)
      .then(response => response.json())
      .then(data => {
        console.log('スレッド作成完了！：', data)
        navigate('/')
      })
      .catch(error => console.error('エラー発生：', error));
  }

  return (
    <div>
      <h2>新規スレッド作成</h2>
      <input type="text" value={title} onChange={titleInput} placeholder="スレッド名を入力" />
      <button onClick={handleSubmit}>作成</button>
    </div>
  )
}