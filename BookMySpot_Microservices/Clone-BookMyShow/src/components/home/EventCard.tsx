'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Event } from '@/data/mock-data';

type EventCardProps = {
  event: Event;
  type?: 'event' | 'activity';
};

export function EventCard({ event, type = 'event' }: EventCardProps) {
  const { id, title, image, category } = event;

  return (
    <Link href={`/${type}s/${id}`} className="group">
      <div className="rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
        {/* Event Image */}
        <div className="relative aspect-[3/2]">
          <Image
            src={`/images/${image}`}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Event Details */}
        <div className="p-3">
          <h3 className="font-medium text-sm line-clamp-2">{title}</h3>
          <p className="mt-1 text-xs text-gray-600">{category}</p>
        </div>
      </div>
    </Link>
  );
}

export function EventCardSkeleton() {
  return (
    <div className="rounded-md overflow-hidden shadow-sm">
      <div className="relative aspect-[3/2] bg-gray-200 animate-pulse" />
      <div className="p-3">
        <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded" />
        <div className="mt-2 h-3 w-1/2 bg-gray-200 animate-pulse rounded" />
      </div>
    </div>
  );
}
