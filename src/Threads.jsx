import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
      <header>
        <h1>掲示板アプリ</h1>
      </header>
      <div>
        <h2>スレッド一覧</h2>
        <ul>
          {threads.map((thread) => {
            return (
              <li key={thread.id}>
                <Link to={`/threads/${thread.id}`}>{thread.title}</Link>
              </li>)
          })}
        </ul>
      </div>
    </>
  );
}
