"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { scrollToSection } from "@/lib/scroll-utils";
import { useCallback } from "react";

export function HeroSection() {
  // Using callback to avoid recreating the function on each render
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  }, []);

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 dark:bg-gray-950">
      <div className="google-container flex flex-col items-start gap-8 lg:flex-row lg:gap-12">
        <div className="flex flex-col items-start gap-4 lg:max-w-[50%]">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl font-google-sans text-[#3a485d] dark:text-white">
              Video calls with anyone, anywhere
            </h1>
            <p className="max-w-[600px] text-lg text-[#5f6368] dark:text-gray-300 md:text-xl font-google-sans-text">
              Stay connected and collaborate with friends, family, and colleagues no matter where you are.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button className="btn-primary h-12 px-6 rounded-md font-google-sans">
              Sign in
            </Button>
            <Button className="btn-primary h-12 px-6 rounded-md font-google-sans">
              Go to app
            </Button>
            <Button variant="outline" className="btn-outline h-12 px-6 rounded-md font-google-sans">
              Try Meet for work
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <Link href="#" className="text-sm text-[#1a73e8] dark:text-[#4285f4] font-google-sans flex items-center gap-1 hover:underline">
              Join a meeting now
            </Link>
            <span className="text-[#5f6368] dark:text-gray-300">•</span>
            <Link href="#" className="text-sm text-[#1a73e8] dark:text-[#4285f4] font-google-sans flex items-center gap-1 hover:underline">
              Join
            </Link>
          </div>
          <p className="text-sm text-[#5f6368] dark:text-gray-400 max-w-[600px] mt-2">
            Join a meeting now using the unique code at the end of your meeting link. It&apos;ll look something like this: abc-defg-hjk
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden rounded-lg">
            <Image
              src="https://ext.same-assets.com/2256776582/1176113539.webp"
              alt="Three windows of a Google Meet video call showing participants for a virtual party"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="google-container mt-8">
        <nav className="flex flex-wrap gap-6 border-b border-[#e8eaed] dark:border-gray-800 py-4">
          <Link
            href="#gemini-in-meet"
            className="text-sm text-[#1a73e8] dark:text-[#4285f4] font-google-sans hover:underline"
            onClick={(e) => handleNavClick(e, "gemini-in-meet")}
          >
            Gemini in Meet
          </Link>
          <Link
            href="#connect"
            className="text-sm text-[#1a73e8] dark:text-[#4285f4] font-google-sans hover:underline"
            onClick={(e) => handleNavClick(e, "connect")}
          >
            Connect
          </Link>
          <Link
            href="#enhance"
            className="text-sm text-[#1a73e8] dark:text-[#4285f4] font-google-sans hover:underline"
            onClick={(e) => handleNavClick(e, "enhance")}
          >
            Enhance
          </Link>
          <Link
            href="#collaborate"
            className="text-sm text-[#1a73e8] dark:text-[#4285f4] font-google-sans hover:underline"
            onClick={(e) => handleNavClick(e, "collaborate")}
          >
            Collaborate
          </Link>
          <Link
            href="#secure"
            className="text-sm text-[#1a73e8] dark:text-[#4285f4] font-google-sans hover:underline"
            onClick={(e) => handleNavClick(e, "secure")}
          >
            Secure
          </Link>
          <Link
            href="#premium"
            className="text-sm text-[#1a73e8] dark:text-[#4285f4] font-google-sans hover:underline"
            onClick={(e) => handleNavClick(e, "premium")}
          >
            Premium
          </Link>
          <Link
            href="#faqs"
            className="text-sm text-[#1a73e8] dark:text-[#4285f4] font-google-sans hover:underline"
            onClick={(e) => handleNavClick(e, "faqs")}
          >
            FAQs
          </Link>
        </nav>
      </div>
    </section>
  );
}
