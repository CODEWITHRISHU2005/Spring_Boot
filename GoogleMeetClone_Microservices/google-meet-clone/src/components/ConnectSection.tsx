import Image from "next/image";

export function ConnectSection() {
  return (
    <section id="connect" className="w-full py-12 md:py-16 lg:py-20 dark:bg-gray-950">
      <div className="google-container">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl font-google-sans text-[#3a485d] dark:text-white mb-8 text-center">
          Connect with others in more ways
        </h2>
        <p className="text-lg text-[#5f6368] dark:text-gray-300 font-google-sans-text text-center mb-16 max-w-3xl mx-auto">
          Whether scheduled or spontaneous, in real-time calls or exchanging video messages, Google Meet helps you connect in the ways that work best for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden rounded-lg">
            <Image
              src="https://ext.same-assets.com/2256776582/3184325085.webp"
              alt="A Google Meet video call between a woman in an office and a construction worker onsite"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden rounded-lg">
            <Image
              src="https://ext.same-assets.com/2256776582/2693859012.webp"
              alt="A Google Meet video call show a couple outside in an idyllic mountain setting talking to others"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
