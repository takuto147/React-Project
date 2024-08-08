import { useState } from "react"

export const CreateThread = () => {
  const [title, setTitle] = useState([])

  return(
    <div>
      <h2>新規スレッド作成</h2>
      <button>作成</button>
    </div>
  )
}