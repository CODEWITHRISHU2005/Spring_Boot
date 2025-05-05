import { Smartphone, Tablet, Monitor } from "lucide-react";

export function DeviceSection() {
  return (
    <section id="enhance" className="w-full py-12 md:py-16 lg:py-20 bg-[#f8f9fa] dark:bg-gray-900">
      <div className="google-container">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl font-google-sans text-[#3a485d] dark:text-white mb-6">
            Meet on any device
          </h2>
          <p className="text-lg text-[#5f6368] dark:text-gray-300 font-google-sans-text mb-12 max-w-3xl">
            Join on your mobile phone or tablet via the Google Meet app, available on the App Store and Play Store. Or connect from your computer browser, no software install needed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <DeviceCard
              icon={<Smartphone className="h-10 w-10 text-[#1a73e8] dark:text-[#4285f4]" />}
              title="Mobile"
              description="Join from anywhere using the Google Meet app on your phone"
            />
            <DeviceCard
              icon={<Tablet className="h-10 w-10 text-[#1a73e8] dark:text-[#4285f4]" />}
              title="Tablet"
              description="Use the Google Meet app on your tablet for a larger view"
            />
            <DeviceCard
              icon={<Monitor className="h-10 w-10 text-[#1a73e8] dark:text-[#4285f4]" />}
              title="Computer"
              description="Join directly from your browser with no downloads needed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface DeviceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function DeviceCard({ icon, title, description }: DeviceCardProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2 font-google-sans text-[#3a485d] dark:text-white">
        {title}
      </h3>
      <p className="text-sm text-[#5f6368] dark:text-gray-300 font-google-sans-text">
        {description}
      </p>
    </div>
  );
}
