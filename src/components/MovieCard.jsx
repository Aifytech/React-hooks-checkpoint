import { Star } from 'lucide-react';

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating } = movie;

  return (
    <div className="group relative bg-movie-surface rounded-lg overflow-hidden transition-all duration-300 hover:bg-movie-surface-hover hover:scale-105 hover:shadow-[var(--shadow-card-hover)] shadow-[var(--shadow-card)]">
      <div className="aspect-[2/3] overflow-hidden">
        <img
          src={posterURL}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/300x450/374151/9CA3AF?text=No+Image';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-foreground truncate flex-1">
            {title}
          </h3>
          <div className="flex items-center ml-2 bg-movie-primary/20 px-2 py-1 rounded-full">
            <Star className="w-4 h-4 text-movie-accent fill-current mr-1" />
            <span className="text-sm font-medium text-movie-accent">
              {rating}
            </span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;