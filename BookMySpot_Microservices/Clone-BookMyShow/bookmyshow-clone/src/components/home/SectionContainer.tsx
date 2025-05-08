'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

type SectionContainerProps = {
  title: string;
  viewAllLink?: string;
  children: React.ReactNode;
};

export function SectionContainer({
  title,
  viewAllLink,
  children
}: SectionContainerProps) {
  return (
    <section className="py-6">
      <div className="bms-container">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>

          {viewAllLink && (
            <Link
              href={viewAllLink}
              className="flex items-center text-sm text-primary font-medium"
            >
              See all <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}
