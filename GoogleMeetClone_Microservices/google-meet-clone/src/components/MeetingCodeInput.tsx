"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export function MeetingCodeInput() {
  const [meetingCode, setMeetingCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (meetingCode.trim()) {
      alert(`Joining meeting: ${meetingCode}`);
      // In a real implementation, this would navigate to the meeting page
      setMeetingCode("");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-base font-medium mb-2 font-google-sans text-[#3a485d]">
        Join a meeting
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 items-stretch">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Enter a code or link"
            value={meetingCode}
            onChange={(e) => setMeetingCode(e.target.value)}
            className="h-10 border-[#dadce0] focus:border-[#1a73e8] focus:ring-[#1a73e8]"
          />
        </div>
        <Button
          type="submit"
          className="btn-primary rounded-md h-10 px-4 flex items-center gap-2"
          disabled={!meetingCode.trim()}
        >
          Join
          <ArrowRight className="h-4 w-4" />
        </Button>
      </form>
      <p className="text-xs text-[#5f6368] mt-2">
        By clicking "Join", you agree to the{" "}
        <a href="/terms" className="text-[#1a73e8] hover:underline">
          Google Meet Terms of Service
        </a>
        .
      </p>
    </div>
  );
}
