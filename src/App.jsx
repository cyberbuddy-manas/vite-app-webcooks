import { Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import BooksList from './pages/BooksList.jsx';
import Book from './pages/components/Book.jsx';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/books'>Books</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/books' element={<BooksList />} />
        <Route path='/books/:id' element={<Book />} />
        <Route path='/books/new' element={<h1>New Book</h1>} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
