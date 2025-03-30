function MovieList() {
    const movies = [
      { id: 1, title: 'The Shawshank Redemption', year: 1994 },
      { id: 2, title: 'The Godfather', year: 1972 },
      { id: 3, title: 'The Dark Knight', year: 2008 }
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
  