import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Share2, Users, ThumbsUp, AlertTriangle } from 'lucide-react';
import { movies } from '@/data/mock-data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return movies.map(movie => ({
    id: movie.id,
  }))
}

export default function MovieDetailsPage({ params }) {
  const movie = movies.find((movie) => movie.id === params.id);

  if (!movie) {
    notFound();
  }

  const {
    title,
    image,
    genres,
    languages,
    certification,
    duration,
    releaseDate,
    description,
    interested
  } = movie;

  const formattedInterested = interested ?
    interested > 1000
      ? `${(interested / 1000).toFixed(1)}K`
      : interested.toString()
    : '0';

  return (
    <div>
      {/* Hero Section with Movie Banner */}
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(26, 26, 26, 0.9) 20%, rgba(26, 26, 26, 0.7) 40%, rgba(26, 26, 26, 0.4) 60%, rgba(26, 26, 26, 0.3) 80%)",
          backgroundColor: 'rgb(26, 26, 26)'
        }}
      >
        <div className="absolute inset-0 -z-10 bg-center bg-cover opacity-30" style={{ backgroundImage: `url(${image})` }} />

        <div className="bms-container h-full flex items-center">
          <div className="flex flex-col md:flex-row items-start gap-6 py-8 text-white">
            {/* Movie Poster */}
            <div className="relative flex-shrink-0 w-64 h-80 rounded-md overflow-hidden shadow-lg">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
            </div>

            {/* Movie Info */}
            <div className="flex-1 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold">{title}</h1>

                  <div className="flex items-center gap-2 mt-2">
                    {certification && (
                      <span className="px-2 py-1 bg-gray-700 text-xs rounded">{certification}</span>
                    )}
                    {duration && (
                      <span className="text-sm">{duration}</span>
                    )}
                  </div>
                </div>
                <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {genres.map((genre) => (
                  <span key={genre} className="text-sm">{genre}</span>
                ))}
              </div>

              <div>
                <p className="text-sm text-gray-300">
                  {languages.join(', ')}
                </p>
                {releaseDate && (
                  <p className="text-sm text-gray-300 mt-1">
                    Releasing on {releaseDate}
                  </p>
                )}
              </div>

              {description && (
                <p className="text-sm">{description}</p>
              )}

              <div className="flex items-center gap-5 pt-4">
                <button
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-700 hover:bg-gray-600"
                >
                  <ThumbsUp className="h-4 w-4" />
                  <span>Are you interested?</span>
                </button>

                {interested && (
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4" />
                    <span>{formattedInterested} people interested</span>
                  </div>
                )}
              </div>

              <Button className="mt-6 bg-primary hover:bg-red-700 py-6 px-10 text-base font-medium rounded-md">
                Book tickets
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* About the Movie Section */}
      <div className="bms-container py-10">
        <h2 className="text-2xl font-bold mb-6">About the movie</h2>
        {description ? (
          <p className="text-gray-700">{description}</p>
        ) : (
          <div className="flex items-center gap-2 text-gray-500">
            <AlertTriangle className="h-5 w-5" />
            <p>No description available for this movie yet.</p>
          </div>
        )}
      </div>

      {/* Cast & Crew Section */}
      <div className="bg-gray-50 py-10">
        <div className="bms-container">
          <h2 className="text-2xl font-bold mb-6">Cast & Crew</h2>
          <div className="flex items-center gap-2 text-gray-500">
            <AlertTriangle className="h-5 w-5" />
            <p>No cast and crew information available for this movie yet.</p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gray-100 py-8">
        <div className="bms-container text-center">
          <Button className="bg-primary hover:bg-red-700 py-6 px-10 text-base font-medium rounded-md">
            Book tickets
          </Button>
        </div>
      </div>
    </div>
  );
}
