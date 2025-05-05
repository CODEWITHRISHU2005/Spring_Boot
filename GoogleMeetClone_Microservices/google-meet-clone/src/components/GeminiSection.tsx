import Image from "next/image";

export function GeminiSection() {
  return (
    <section id="gemini-in-meet" className="w-full py-12 md:py-16 lg:py-20 bg-[#f8f9fa] dark:bg-gray-900">
      <div className="google-container">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src="https://ext.same-assets.com/2256776582/4131498710.webp"
                alt="During a video call, Gemini in Meet translates from Hindi to English and takes notes"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:max-w-[50%]">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl font-google-sans text-[#3a485d] dark:text-white">
              Experience rich, collaborative meetings with Gemini
            </h2>
            <p className="text-lg text-[#5f6368] dark:text-gray-300 font-google-sans-text">
              Look and sound your best with studio look, studio sound, and studio lighting. Connect in 65+ languages with translated captions. Use "take notes for me" for meeting details. Try all this and more to unlock the power of generative AI with Gemini for Google Workspace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
