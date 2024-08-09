import React, { useEffect, useState } from 'react';

export const Threads = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads')
      .then(response => response.json())
      .then(data => setThreads(data))
      .catch(error => console.error('エラー発生：', error));
  }, []);

  return (
    <>
      {console.log(threads)}
      <header>
        <h1>掲示板アプリ</h1>
      </header>
      <div>
        <h2>スレッド一覧</h2>
        <ul>
          {threads.map((thread) => {
            return (
              <li>
                {thread.title}
              </li>)
              })}
        </ul>
      </div>
    </>
  );
}
