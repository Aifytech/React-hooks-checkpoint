import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const AddMovie = ({ onAddMovie }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.rating) {
      alert('Please fill in all required fields');
      return;
    }

    const rating = parseFloat(formData.rating);
    if (isNaN(rating) || rating < 0 || rating > 10) {
      alert('Please enter a valid rating between 0 and 10');
      return;
    }

    onAddMovie({
      ...formData,
      rating: rating,
      posterURL: formData.posterURL || 'https://via.placeholder.com/300x450/374151/9CA3AF?text=No+Image'
    });

    setFormData({
      title: '',
      description: '',
      posterURL: '',
      rating: ''
    });
    setIsOpen(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-movie-primary to-movie-secondary hover:from-movie-primary/80 hover:to-movie-secondary/80 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
        size="lg"
      >
        <Plus className="w-5 h-5 mr-2" />
        Add New Movie
      </Button>
    );
  }

  return (
    <div className="bg-movie-surface rounded-lg p-6 shadow-[var(--shadow-card)] mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">Add New Movie</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Title <span className="text-destructive">*</span>
            </label>
            <Input
              type="text"
              placeholder="Enter movie title"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="bg-movie-surface-hover border-border focus:border-movie-primary focus:ring-movie-primary/20"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Rating (0-10) <span className="text-destructive">*</span>
            </label>
            <Input
              type="number"
              min="0"
              max="10"
              step="0.1"
              placeholder="8.5"
              value={formData.rating}
              onChange={(e) => handleInputChange('rating', e.target.value)}
              className="bg-movie-surface-hover border-border focus:border-movie-primary focus:ring-movie-primary/20"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Poster URL
          </label>
          <Input
            type="url"
            placeholder="https://example.com/poster.jpg"
            value={formData.posterURL}
            onChange={(e) => handleInputChange('posterURL', e.target.value)}
            className="bg-movie-surface-hover border-border focus:border-movie-primary focus:ring-movie-primary/20"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Description <span className="text-destructive">*</span>
          </label>
          <Textarea
            placeholder="Enter movie description..."
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="bg-movie-surface-hover border-border focus:border-movie-primary focus:ring-movie-primary/20 min-h-[100px]"
            required
          />
        </div>

        <div className="flex gap-3 pt-4">
          <Button
            type="submit"
            className="bg-gradient-to-r from-movie-primary to-movie-secondary hover:from-movie-primary/80 hover:to-movie-secondary/80 text-white border-0"
          >
            Add Movie
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsOpen(false)}
            className="border-border text-foreground hover:bg-movie-surface-hover"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;