import { Search, Star, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

const MovieFilter = ({ filters, onFilterChange }) => {
  const { title, minRating } = filters;

  return (
    <div className="bg-movie-surface rounded-lg p-6 shadow-[var(--shadow-card)] mb-8">
      <div className="flex items-center mb-4">
        <Filter className="w-5 h-5 text-movie-primary mr-2" />
        <h2 className="text-lg font-semibold text-foreground">Filter Movies</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground flex items-center">
            <Search className="w-4 h-4 mr-2 text-movie-primary" />
            Search by Title
          </label>
          <Input
            type="text"
            placeholder="Enter movie title..."
            value={title}
            onChange={(e) => onFilterChange({ ...filters, title: e.target.value })}
            className="bg-movie-surface-hover border-border focus:border-movie-primary focus:ring-movie-primary/20"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground flex items-center">
            <Star className="w-4 h-4 mr-2 text-movie-accent fill-current" />
            Minimum Rating
          </label>
          <Input
            type="number"
            min="0"
            max="10"
            step="0.1"
            placeholder="0.0"
            value={minRating}
            onChange={(e) => onFilterChange({ ...filters, minRating: e.target.value })}
            className="bg-movie-surface-hover border-border focus:border-movie-primary focus:ring-movie-primary/20"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieFilter;