import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function FeaturesSection() {
  return (
    <section id="collaborate" className="w-full py-12 md:py-16 lg:py-20">
      <div className="google-container">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl font-google-sans text-[#3a485d] mb-16 text-center">
          Built for better conversations
        </h2>
        <p className="text-lg text-[#5f6368] font-google-sans-text text-center mb-16 max-w-3xl mx-auto">
          Meet handles the details so you can focus on connecting.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard
            title="High-quality video"
            description="Enjoy up to 1080p video quality, studio lighting (premium feature), and add a stylized background."
            imageSrc="https://ext.same-assets.com/2256776582/4116960617.webp"
            isPremium={true}
          />

          <FeatureCard
            title="Noise cancellation"
            description="Reduce background noise and interference."
            imageSrc="https://ext.same-assets.com/2256776582/2027652811.webp"
            isPremium={true}
          />

          <FeatureCard
            title="Live captions"
            description="View subtitles as participants speak, in real time."
            imageSrc="https://ext.same-assets.com/2256776582/632192876.webp"
            isPremium={false}
          />
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl font-google-sans text-[#3a485d] mb-8 text-center">
            Do more, together
          </h2>
          <p className="text-lg text-[#5f6368] font-google-sans-text text-center mb-16 max-w-3xl mx-auto">
            Seamlessly collaborate with integrations across Google Workspace.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard
              title="Collaborate together"
              description="Collaborate in context by meeting directly from Google Docs, Sheets, and Slides."
              imageSrc="https://ext.same-assets.com/2256776582/3624844551.webp"
              isPremium={false}
            />

            <FeatureCard
              title="Plan together"
              description="Easily set up meetings with the agenda, attachments, and participant RSVPs all in one place."
              imageSrc="https://ext.same-assets.com/2256776582/4282888136.webp"
              isPremium={false}
            />

            <FeatureCard
              title="Ideate together"
              description="Keep people engaged during meetings with polls, breakout rooms, moderation controls, and Q&A."
              imageSrc="https://ext.same-assets.com/2256776582/2739902462.webp"
              isPremium={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  isPremium: boolean;
}

function FeatureCard({ title, description, imageSrc, isPremium }: FeatureCardProps) {
  return (
    <div className="flex flex-col">
      <div className="relative h-[200px] w-full overflow-hidden rounded-lg mb-4">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-xl font-medium font-google-sans text-[#3a485d]">
          {title}
        </h3>

        {isPremium && (
          <div className="flex items-center">
            <Image
              src="https://ext.same-assets.com/2256776582/3226322514.svg"
              alt="Premium feature"
              width={20}
              height={20}
            />
            <Badge variant="outline" className="ml-2 bg-[#f1f3f4] border-[#e8eaed] text-[#5f6368] text-xs font-normal">
              Premium feature
            </Badge>
          </div>
        )}
      </div>

      <p className="text-sm text-[#5f6368] font-google-sans-text">
        {description}
      </p>

      {isPremium && (
        <p className="text-xs text-[#5f6368] mt-2 italic">
          This feature is available on certain Google One, Google Workspace Business, and Google Workspace Enterprise plans.
        </p>
      )}
    </div>
  );
}
