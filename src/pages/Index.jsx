import { useState } from "react";
import { Film } from "lucide-react";
import MovieList from "../components/MovieList";
import MovieFilter from "../components/MovieFilter";
import AddMovie from "../components/AddMovie";

// Sample movie data
const initialMovies = [
  {
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    posterURL:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop",
    rating: 9.3,
  },
  {
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    posterURL:
      "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=450&fit=crop",
    rating: 9.2,
  },
  {
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    posterURL:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=300&h=450&fit=crop",
    rating: 9.0,
  },
  {
    title: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    posterURL:
      "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=300&h=450&fit=crop",
    rating: 8.9,
  },
  {
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
    posterURL:
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=300&h=450&fit=crop",
    rating: 8.8,
  },
];

const Index = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [filters, setFilters] = useState({
    title: "",
    minRating: "",
  });

  const handleAddMovie = (newMovie) => {
    setMovies((prev) => [...prev, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(filters.title.toLowerCase());
    const matchesRating =
      !filters.minRating || movie.rating >= parseFloat(filters.minRating);
    return matchesTitle && matchesRating;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-movie-surface shadow-[var(--shadow-card)] sticky top-0 z-10 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-movie-primary to-movie-secondary rounded-lg">
                <Film className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-movie-primary to-movie-secondary bg-clip-text text-transparent">
                  MovieFlix
                </h1>
                <p className="text-sm text-muted-foreground">
                  Discover amazing movies and TV shows
                </p>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              {filteredMovies.length} movie
              {filteredMovies.length !== 1 ? "s" : ""} found
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <AddMovie onAddMovie={handleAddMovie} />

        <MovieFilter filters={filters} onFilterChange={setFilters} />

        <MovieList movies={filteredMovies} />
      </main>

      {/* Footer */}
      <footer className="bg-movie-surface border-t border-border mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 MovieFlix. Built with React and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
