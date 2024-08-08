import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Threads } from './Threads';
import { CreateThread } from './CreateThread';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Link to="/new">
        <button>新規スレッド作成</button>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Threads />} />
        <Route path="/new" element={<CreateThread />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
