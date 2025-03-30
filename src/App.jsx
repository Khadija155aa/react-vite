import { useState } from 'react';
import './App.css';

import MovieList from './components/MovieList';
import QuoteCard from './components/QuoteCard';
import ProfileCard from './components/ProfileCard';

// Fake login state to test conditionals
const isLoggedIn = true;

const book = {
  title: 'A Farewell to Arms',
  author: 'Ernest Hemingway',
  published: '1929',
  image: 'https://upload.wikimedia.org/wikipedia/en/4/48/Hemingway_farewell.png',
  width: '264',
  height: '378'
};

const magazines = [
  { id: 1, title: 'Architectural Digest', theme: 'architecture', isAvailable: true },
  { id: 2, title: 'Dwell', theme: 'architecture', isAvailable: true },
  { id: 3, title: 'Communication Arts', theme: 'design', isAvailable: false }
];

function Bookshelf() {
  return (
    <div className="section">
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      {book.image && (
        <img
          className="bookCover"
          src={book.image}
          alt={book.title + ' cover'}
          style={{
            width: book.width,
            height: book.height
          }}
        />
      )}
    </div>
  );
}

function ZineRack() {
  const listZines = magazines.map(zine => (
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'green' : 'red'
      }}
    >
      {zine.title}
    </li>
  ));
  return <ul>{listZines}</ul>;
}

function MagicButton() {
  const [count, setCount] = useState(0);
  function doMagic() {
    setCount(count + 1);
    alert('Are you not entertained?');
  }

  return (
    <button onClick={doMagic}>
      Magic {count} times
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to My React App! 🎉</h1>
        {isLoggedIn ? (
          <>
            <Bookshelf />
            <div className="section">
              <h3>Magazine List</h3>
              <ZineRack />
            </div>
            <MagicButton />
            <MovieList />
            <QuoteCard />
            <ProfileCard />
          </>
        ) : (
          <p>Please login to view content.</p>
        )}
      </header>
    </div>
  );
}

export default App;
