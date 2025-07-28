import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🎬</div>
        <h3 className="text-xl font-medium text-foreground mb-2">
          No movies found
        </h3>
        <p className="text-muted-foreground">
          Try adjusting your filters or add some movies to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
