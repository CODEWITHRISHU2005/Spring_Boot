'use client';

import { useState } from 'react';
import { MovieCard } from '@/components/movies/MovieCard';
import { movies } from '@/data/mock-data';
import { Check, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const languages = Array.from(new Set(movies.flatMap(movie => movie.languages)));
const certifications = Array.from(new Set(movies.map(movie => movie.certification)));
const genres = Array.from(new Set(movies.flatMap(movie => movie.genres)));

export default function MoviesPage() {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedCertifications, setSelectedCertifications] = useState<string[]>([]);

  // Filter movies based on selected filters
  const filteredMovies = movies.filter(movie => {
    const languageMatch = selectedLanguages.length === 0 ||
      movie.languages.some(lang => selectedLanguages.includes(lang));

    const genreMatch = selectedGenres.length === 0 ||
      movie.genres.some(genre => selectedGenres.includes(genre));

    const certMatch = selectedCertifications.length === 0 ||
      selectedCertifications.includes(movie.certification);

    return languageMatch && genreMatch && certMatch;
  });

  const toggleLanguage = (language: string) => {
    setSelectedLanguages(prev =>
      prev.includes(language)
        ? prev.filter(l => l !== language)
        : [...prev, language]
    );
  };

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev =>
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  const toggleCertification = (cert: string) => {
    setSelectedCertifications(prev =>
      prev.includes(cert)
        ? prev.filter(c => c !== cert)
        : [...prev, cert]
    );
  };

  const clearFilters = () => {
    setSelectedLanguages([]);
    setSelectedGenres([]);
    setSelectedCertifications([]);
  };

  return (
    <div className="py-6">
      <div className="bms-container">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Movies</h1>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
                {(selectedLanguages.length > 0 || selectedGenres.length > 0 || selectedCertifications.length > 0) && (
                  <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {selectedLanguages.length + selectedGenres.length + selectedCertifications.length}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>

              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Languages</h3>
                  {selectedLanguages.length > 0 && (
                    <button
                      className="text-xs text-primary"
                      onClick={() => setSelectedLanguages([])}
                    >
                      Clear
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {languages.map((language) => (
                    <button
                      key={language}
                      className={`px-3 py-1 rounded-full border text-sm ${
                        selectedLanguages.includes(language)
                          ? 'bg-primary text-white border-primary'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      onClick={() => toggleLanguage(language)}
                    >
                      {language}
                      {selectedLanguages.includes(language) && (
                        <Check className="ml-1 h-3 w-3 inline" />
                      )}
                    </button>
                  ))}
                </div>

                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Genres</h3>
                  {selectedGenres.length > 0 && (
                    <button
                      className="text-xs text-primary"
                      onClick={() => setSelectedGenres([])}
                    >
                      Clear
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {genres.map((genre) => (
                    <button
                      key={genre}
                      className={`px-3 py-1 rounded-full border text-sm ${
                        selectedGenres.includes(genre)
                          ? 'bg-primary text-white border-primary'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      onClick={() => toggleGenre(genre)}
                    >
                      {genre}
                      {selectedGenres.includes(genre) && (
                        <Check className="ml-1 h-3 w-3 inline" />
                      )}
                    </button>
                  ))}
                </div>

                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Certification</h3>
                  {selectedCertifications.length > 0 && (
                    <button
                      className="text-xs text-primary"
                      onClick={() => setSelectedCertifications([])}
                    >
                      Clear
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {certifications.map((cert) => (
                    <button
                      key={cert}
                      className={`px-3 py-1 rounded-full border text-sm ${
                        selectedCertifications.includes(cert)
                          ? 'bg-primary text-white border-primary'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      onClick={() => toggleCertification(cert)}
                    >
                      {cert}
                      {selectedCertifications.includes(cert) && (
                        <Check className="ml-1 h-3 w-3 inline" />
                      )}
                    </button>
                  ))}
                </div>

                {(selectedLanguages.length > 0 || selectedGenres.length > 0 || selectedCertifications.length > 0) && (
                  <Button
                    variant="outline"
                    className="w-full mt-4"
                    onClick={clearFilters}
                  >
                    Clear All Filters
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Applied filters */}
        {(selectedLanguages.length > 0 || selectedGenres.length > 0 || selectedCertifications.length > 0) && (
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedLanguages.map((lang) => (
              <div key={lang} className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
                {lang}
                <button
                  className="ml-2"
                  onClick={() => toggleLanguage(lang)}
                >
                  ×
                </button>
              </div>
            ))}
            {selectedGenres.map((genre) => (
              <div key={genre} className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
                {genre}
                <button
                  className="ml-2"
                  onClick={() => toggleGenre(genre)}
                >
                  ×
                </button>
              </div>
            ))}
            {selectedCertifications.map((cert) => (
              <div key={cert} className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
                {cert}
                <button
                  className="ml-2"
                  onClick={() => toggleCertification(cert)}
                >
                  ×
                </button>
              </div>
            ))}
            {(selectedLanguages.length > 0 || selectedGenres.length > 0 || selectedCertifications.length > 0) && (
              <button
                className="text-primary text-sm underline"
                onClick={clearFilters}
              >
                Clear All
              </button>
            )}
          </div>
        )}

        {/* Movie Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="py-20 text-center">
            <h3 className="text-xl font-medium text-gray-600">No movies found matching your filters</h3>
            <p className="text-gray-500 mt-2">Try adjusting your filter criteria</p>
            <Button
              className="mt-4 bg-primary hover:bg-red-700"
              onClick={clearFilters}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
