import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MeetingCodeInput } from "./MeetingCodeInput";

const faqs = [
  {
    id: "external-participants",
    question: "Can external participants join a call?",
    answer: "Yes, anyone with the meeting link can join a Google Meet call, even if they don't have a Google account.",
  },
  {
    id: "participant-count",
    question: "How many people does Google Meet support?",
    answer: "Google Meet supports up to 100 participants for free users, and up to 250 participants for paid Google Workspace plans.",
  },
  {
    id: "premium-features",
    question: "How do I access premium features?",
    answer: "Premium features are available with paid Google Workspace plans or certain Google One subscriptions. Sign up for a Google Workspace Business or Enterprise plan to access all premium features.",
  },
  {
    id: "security",
    question: "Is the meeting content secure?",
    answer: "Yes, Google Meet encrypts all video meetings in transit between the client and Google, and all recordings stored in Google Drive.",
  },
  {
    id: "software-requirements",
    question: "Is third-party software required for this service?",
    answer: "No software installation is required for computer users. Mobile and tablet users can download the Google Meet app from the App Store or Play Store.",
  },
];

export function FAQSection() {
  return (
    <section id="faqs" className="w-full py-12 md:py-16 lg:py-20 bg-[#f8f9fa] dark:bg-gray-900">
      <div className="google-container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl font-google-sans text-[#3a485d] dark:text-white mb-6">
            Curious about Google Meet?
          </h2>
          <p className="text-base text-[#5f6368] dark:text-gray-300 font-google-sans-text">
            Take a look at our FAQs to learn more.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-[#e8eaed] dark:border-gray-800">
                <AccordionTrigger className="text-left font-google-sans text-[#3a485d] dark:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#5f6368] dark:text-gray-300 font-google-sans-text">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 mb-12 max-w-3xl mx-auto px-4 py-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <MeetingCodeInput />
        </div>

        <div className="mt-16 flex flex-col items-center">
          <div className="mb-6">
            <Image
              src="https://ext.same-assets.com/2256776582/1294131253.svg"
              alt="Google Meet Logo"
              width={48}
              height={48}
            />
          </div>
          <h3 className="text-2xl font-bold font-google-sans text-[#3a485d] dark:text-white mb-6">
            Connect on Google Meet
          </h3>
          <Button className="btn-primary rounded-md font-google-sans px-10 py-6 h-auto text-base">
            Go to app
          </Button>
        </div>
      </div>
    </section>
  );
}
