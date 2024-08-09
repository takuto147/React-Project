import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Threads } from './Threads';
import { CreateThread } from './CreateThread';
import { ThreadDetail } from './ThreadDetail';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Link to="/Threads/new">
          <button>新規スレッド作成</button>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Threads />} />
        <Route path="/Threads/new" element={<CreateThread />} />
        <Route path="/threads/:threadId" element={<ThreadDetail />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
