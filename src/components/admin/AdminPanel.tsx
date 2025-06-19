import React, { useState } from 'react';
import { Plus, Save, X } from 'lucide-react';
import { MovieType } from '../../data/movieData';

interface AdminPanelProps {
  onAddMovie: (movie: MovieType) => void;
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onAddMovie, onClose }) => {
  const [formData, setFormData] = useState<Partial<MovieType>>({
    title: '',
    year: new Date().getFullYear(),
    poster: '',
    rating: 0,
    genres: [],
    language: '',
    quality: [],
    synopsis: '',
    director: '',
    actors: [],
    duration: '',
    category: 'hollywood',
    isTrending: false,
    isNew: true
  });

  const [genreInput, setGenreInput] = useState('');
  const [actorInput, setActorInput] = useState('');
  const [qualityInput, setQualityInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) : value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const addToArray = (field: 'genres' | 'actors' | 'quality', value: string, setValue: (val: string) => void) => {
    if (value.trim()) {
      setFormData(prev => ({
        ...prev,
        [field]: [...(prev[field] || []), value.trim()]
      }));
      setValue('');
    }
  };

  const removeFromArray = (field: 'genres' | 'actors' | 'quality', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] || []).filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.poster || !formData.synopsis) {
      alert('Please fill in all required fields');
      return;
    }

    const newMovie: MovieType = {
      id: Date.now().toString(),
      title: formData.title!,
      year: formData.year!,
      poster: formData.poster!,
      rating: formData.rating!,
      genres: formData.genres!,
      language: formData.language!,
      quality: formData.quality!,
      synopsis: formData.synopsis!,
      director: formData.director!,
      actors: formData.actors!,
      duration: formData.duration!,
      category: formData.category!,
      isTrending: formData.isTrending,
      isNew: formData.isNew
    };

    onAddMovie(newMovie);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-dark-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-dark-700">
          <h2 className="text-2xl font-bold">Add New Movie</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-dark-700 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Info */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Year</label>
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Poster URL *</label>
                <input
                  type="url"
                  name="poster"
                  value={formData.poster}
                  onChange={handleInputChange}
                  placeholder="https://images.pexels.com/..."
                  className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Rating (0-10)</label>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  min="0"
                  max="10"
                  step="0.1"
                  className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Language</label>
                <input
                  type="text"
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  placeholder="2h 30min"
                  className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="hollywood">Hollywood</option>
                  <option value="bollywood">Bollywood</option>
                  <option value="south-indian">South Indian</option>
                  <option value="web-series">Web Series</option>
                  <option value="dubbed">Dubbed</option>
                </select>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Director</label>
                <input
                  type="text"
                  name="director"
                  value={formData.director}
                  onChange={handleInputChange}
                  className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              {/* Genres */}
              <div>
                <label className="block text-sm font-medium mb-2">Genres</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={genreInput}
                    onChange={(e) => setGenreInput(e.target.value)}
                    placeholder="Add genre"
                    className="flex-1 bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button
                    type="button"
                    onClick={() => addToArray('genres', genreInput, setGenreInput)}
                    className="bg-primary-600 hover:bg-primary-700 px-3 py-2 rounded transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.genres?.map((genre, index) => (
                    <span
                      key={index}
                      className="bg-dark-700 px-2 py-1 rounded text-sm flex items-center gap-1"
                    >
                      {genre}
                      <button
                        type="button"
                        onClick={() => removeFromArray('genres', index)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Actors */}
              <div>
                <label className="block text-sm font-medium mb-2">Actors</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={actorInput}
                    onChange={(e) => setActorInput(e.target.value)}
                    placeholder="Add actor"
                    className="flex-1 bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button
                    type="button"
                    onClick={() => addToArray('actors', actorInput, setActorInput)}
                    className="bg-primary-600 hover:bg-primary-700 px-3 py-2 rounded transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.actors?.map((actor, index) => (
                    <span
                      key={index}
                      className="bg-dark-700 px-2 py-1 rounded text-sm flex items-center gap-1"
                    >
                      {actor}
                      <button
                        type="button"
                        onClick={() => removeFromArray('actors', index)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Quality */}
              <div>
                <label className="block text-sm font-medium mb-2">Quality Options</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={qualityInput}
                    onChange={(e) => setQualityInput(e.target.value)}
                    placeholder="720p, 1080p, 4K"
                    className="flex-1 bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button
                    type="button"
                    onClick={() => addToArray('quality', qualityInput, setQualityInput)}
                    className="bg-primary-600 hover:bg-primary-700 px-3 py-2 rounded transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.quality?.map((quality, index) => (
                    <span
                      key={index}
                      className="bg-dark-700 px-2 py-1 rounded text-sm flex items-center gap-1"
                    >
                      {quality}
                      <button
                        type="button"
                        onClick={() => removeFromArray('quality', index)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="isTrending"
                    checked={formData.isTrending}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  Trending
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="isNew"
                    checked={formData.isNew}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  New Release
                </label>
              </div>
            </div>
          </div>

          {/* Synopsis */}
          <div>
            <label className="block text-sm font-medium mb-2">Synopsis *</label>
            <textarea
              name="synopsis"
              value={formData.synopsis}
              onChange={handleInputChange}
              rows={4}
              className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-dark-700 hover:bg-dark-600 rounded transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-primary-600 hover:bg-primary-700 rounded transition-colors flex items-center gap-2"
            >
              <Save size={16} />
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;