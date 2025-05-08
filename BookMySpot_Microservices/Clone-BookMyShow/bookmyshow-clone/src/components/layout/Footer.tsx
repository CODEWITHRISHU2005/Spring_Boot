'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const footerLinks = [
  {
    title: 'Movies By Genre',
    links: [
      { label: 'Drama Movies', href: '#' },
      { label: 'Comedy Movies', href: '#' },
      { label: 'Thriller Movies', href: '#' },
      { label: 'Action Movies', href: '#' },
      { label: 'Romantic Movies', href: '#' },
    ],
  },
  {
    title: 'Movies By Language',
    links: [
      { label: 'Movies in English', href: '#' },
      { label: 'Movies in Hindi', href: '#' },
      { label: 'Movies in Telugu', href: '#' },
      { label: 'Movies in Tamil', href: '#' },
      { label: 'Movies in Malayalam', href: '#' },
    ],
  },
  {
    title: 'HELP',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Current Openings', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Terms and Conditions', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  },
  {
    title: 'BOOKMYSHOW EXCLUSIVES',
    links: [
      { label: 'Lollapalooza India', href: '#' },
      { label: 'BookAChange', href: '#' },
      { label: 'Corporate Vouchers', href: '#' },
      { label: 'Gift Cards', href: '#' },
      { label: 'List My Show', href: '#' },
      { label: 'Offers', href: '#' },
      { label: 'Stream', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-100 pt-8 pb-4 text-gray-700">
      <div className="bms-container">
        {/* Customer Care Section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 border-b pb-6 mb-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gray-200 rounded-full">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#C4242B"></path>
                <path d="M8.13577 3.66113H6.40565C6.03323 3.66113 5.73242 3.96194 5.73242 4.33573V11.5886C5.73242 11.9624 6.03323 12.2632 6.40565 12.2632H9.86535C10.2392 12.2632 10.54 11.9624 10.54 11.5886V5.06378L8.13577 3.66113Z" fill="white"></path>
                <path d="M8.47852 3.66113V4.63923C8.47852 4.8263 8.63057 4.97836 8.81764 4.97836H10.0724L8.47852 3.66113Z" fill="#C4242B"></path>
              </svg>
            </div>
            <span className="text-sm font-medium">24/7 CUSTOMER CARE</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gray-200 rounded-full">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#C4242B"></path>
                <path d="M12.5 5.5H3.5C3.22386 5.5 3 5.72386 3 6V10C3 10.2761 3.22386 10.5 3.5 10.5H12.5C12.7761 10.5 13 10.2761 13 10V6C13 5.72386 12.7761 5.5 12.5 5.5Z" fill="white"></path>
                <path d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z" fill="#C4242B"></path>
                <path d="M11 7.5C11.2761 7.5 11.5 7.27614 11.5 7C11.5 6.72386 11.2761 6.5 11 6.5C10.7239 6.5 10.5 6.72386 10.5 7C10.5 7.27614 10.7239 7.5 11 7.5Z" fill="#C4242B"></path>
                <path d="M5 9.5C5.27614 9.5 5.5 9.27614 5.5 9C5.5 8.72386 5.27614 8.5 5 8.5C4.72386 8.5 4.5 8.72386 4.5 9C4.5 9.27614 4.72386 9.5 5 9.5Z" fill="#C4242B"></path>
              </svg>
            </div>
            <span className="text-sm font-medium">RESEND BOOKING CONFIRMATION</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gray-200 rounded-full">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#C4242B"></path>
                <path d="M4 5.5H12L8 10.5L4 5.5Z" fill="white"></path>
              </svg>
            </div>
            <span className="text-sm font-medium">SUBSCRIBE TO THE NEWSLETTER</span>
          </div>
        </div>

        {/* Links Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-xs font-bold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section with Logo and Socials */}
        <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex-shrink-0">
            <div className="relative h-8 w-32">
              <Image
                src="/images/bookmyshow-logo.png"
                alt="BookMyShow"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-primary">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-primary">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-primary">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-primary">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-center mt-6">
          <p>Copyright 2025 Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
          <p className="mt-1">The content and images used on this site are copyright protected and copyrights vests with the respective owners.</p>
        </div>
      </div>
    </footer>
  );
}
