import React from "react";
import MovieCard from "../components/MovieCard";
import { initialMovies } from "./Index.jsx"; // Import the initialMovies array
import { Film } from "lucide-react";
import { Button } from "../components/ui/button";
import { useSearchParams, useNavigate } from "react-router-dom";

const Trailer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get("id");

  const movie = initialMovies.find((m) => m.id === parseInt(movieId));
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-movie-surface shadow-[var(--shadow-card)] sticky top-0 z-10 border-b border-border ">
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
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="group relative bg-movie-surface rounded-lg overflow-hidden transition-all duration-300 hover:bg-movie-surface-hover hover:scale-105 hover:shadow-[var(--shadow-card-hover)] shadow-[var(--shadow-card)] mb-[500px]">
          <div className="relative overflow-hidden">
            <iframe
              width="560"
              height="315"
              src={movie.trailer}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
              frameborder="0"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/300x150/1e1e1e/e50914?text=No+Image";
              }}
            ></iframe>
          </div>

          <div className="p-4">
            <div className="flex items-center mb-2">
              {/* <h3 className="text-lg font-semibold text-foreground truncate mr-2">
                {movie.title}
              </h3> */}
            </div>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {movie.description}
            </p>
            <Button
              onClick={() => navigate("/")}
              className="bg-gradient-to-r from-movie-primary to-movie-secondary hover:from-movie-primary/80 hover:to-movie-secondary/80 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              size="sm"
            >
              Back
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-movie-surface border-t border-border mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-muted-foreground">
            <p className="text-xs">
              &copy; 2024 MovieFlix. Built with React and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Trailer;
