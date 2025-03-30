function MovieList() {
    const movies = [
      { id: 1, title: 'Snow White and the Seven Dwarfs', year: 1937 },
      { id: 2, title: 'How to Train Your Dragon', year: 2025 },
      { id: 3, title: 'The Princess Bride', year: 1987 }
    ];
  
    return (
      <div>
        <h3>Favorite Movies</h3>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              {movie.title} ({movie.year})
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default MovieList;
  