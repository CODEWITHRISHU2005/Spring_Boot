'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ThumbsUp } from 'lucide-react';
import type { Movie } from '@/data/mock-data';

type MovieCardProps = {
  movie: Movie;
};

export function MovieCard({ movie }: MovieCardProps) {
  const {
    id,
    title,
    image,
    rating,
    genres,
    languages,
    certification,
  } = movie;

  return (
    <Link href={`/movies/${id}`} className="group">
      <div className="rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
        {/* Movie Poster with Rating Label */}
        <div className="relative aspect-[3/4]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          {rating && (
            <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
              <ThumbsUp className="h-3 w-3 text-green-500" />
              <span>{rating}</span>
            </div>
          )}
        </div>

        {/* Movie Details */}
        <div className="p-3">
          <h3 className="font-medium text-sm line-clamp-1">{title}</h3>
          <div className="mt-1 flex flex-col gap-1">
            <p className="text-xs text-gray-600 line-clamp-1">
              {certification}
            </p>
            <p className="text-xs text-gray-600 line-clamp-1">
              {languages.join(', ')}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function MovieCardSkeleton() {
  return (
    <div className="rounded-md overflow-hidden shadow-sm">
      <div className="relative aspect-[3/4] bg-gray-200 animate-pulse" />
      <div className="p-3">
        <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded" />
        <div className="mt-2 space-y-2">
          <div className="h-3 w-1/2 bg-gray-200 animate-pulse rounded" />
          <div className="h-3 w-2/3 bg-gray-200 animate-pulse rounded" />
        </div>
      </div>
    </div>
  );
}
