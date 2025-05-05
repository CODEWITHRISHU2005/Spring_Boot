"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Plus, X, ExternalLink } from "lucide-react";
import { format } from "date-fns";
import {
  generateTimeSlots,
  formatDate,
  generateMeetingCode,
  type TimeSlot,
  createGoogleCalendarURL,
  createOutlookCalendarURL,
  type MeetingDetails
} from "@/lib/calendar-utils";
import { cn } from "@/lib/utils";

export function MeetingScheduler() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
  const [meetingTitle, setMeetingTitle] = useState("");
  const [meetingDescription, setMeetingDescription] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantInput, setParticipantInput] = useState("");
  const [meetingCode, setMeetingCode] = useState("");
  const [isScheduled, setIsScheduled] = useState(false);
  const [meetingDetails, setMeetingDetails] = useState<MeetingDetails | null>(null);

  // Generate time slots when date changes
  useEffect(() => {
    if (selectedDate) {
      setTimeSlots(generateTimeSlots(selectedDate));
      setSelectedTimeSlot(null);
    } else {
      setTimeSlots([]);
    }
  }, [selectedDate]);

  // Handle adding a participant
  const handleAddParticipant = () => {
    if (participantInput?.includes("@")) {
      setParticipants([...participants, participantInput]);
      setParticipantInput("");
    }
  };

  // Handle removing a participant
  const handleRemoveParticipant = (email: string) => {
    setParticipants(participants.filter(p => p !== email));
  };

  // Handle scheduling the meeting
  const handleScheduleMeeting = () => {
    if (selectedDate && selectedTimeSlot && meetingTitle) {
      const code = generateMeetingCode();

      const meeting: MeetingDetails = {
        title: meetingTitle,
        description: meetingDescription,
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        participants,
        meetingCode: code
      };

      setMeetingCode(code);
      setMeetingDetails(meeting);
      setIsScheduled(true);
    }
  };

  // Handle reset form
  const handleReset = () => {
    setSelectedDate(undefined);
    setSelectedTimeSlot(null);
    setMeetingTitle("");
    setMeetingDescription("");
    setParticipants([]);
    setParticipantInput("");
    setMeetingCode("");
    setIsScheduled(false);
    setMeetingDetails(null);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      {!isScheduled ? (
        <>
          <h3 className="text-xl font-medium mb-6 font-google-sans text-[#3a485d] dark:text-white">
            Schedule a Meeting
          </h3>

          <div className="space-y-6">
            {/* Meeting Title */}
            <div>
              <label className="block text-sm font-medium mb-2 text-[#3a485d] dark:text-gray-300">
                Meeting Title
              </label>
              <Input
                value={meetingTitle}
                onChange={(e) => setMeetingTitle(e.target.value)}
                placeholder="Weekly Team Meeting"
                className="w-full"
              />
            </div>

            {/* Meeting Description */}
            <div>
              <label className="block text-sm font-medium mb-2 text-[#3a485d] dark:text-gray-300">
                Description (Optional)
              </label>
              <textarea
                value={meetingDescription}
                onChange={(e) => setMeetingDescription(e.target.value)}
                placeholder="Discuss weekly progress and upcoming plans"
                className="w-full min-h-[100px] p-2 rounded-md border border-[#dadce0] dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1a73e8]"
              />
            </div>

            {/* Date and Time Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-[#3a485d] dark:text-gray-300">
                  Date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !selectedDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      initialFocus
                      disabled={{
                        before: new Date(),
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[#3a485d] dark:text-gray-300">
                  Time
                </label>
                <Select
                  disabled={!selectedDate}
                  onValueChange={(value) => {
                    const slot = timeSlots.find(s => s.formatted === value);
                    if (slot) setSelectedTimeSlot(slot);
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot.formatted} value={slot.formatted}>
                        {slot.formatted}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Participants */}
            <div>
              <label className="block text-sm font-medium mb-2 text-[#3a485d] dark:text-gray-300">
                Participants (Optional)
              </label>
              <div className="flex gap-2 mb-2">
                <Input
                  value={participantInput}
                  onChange={(e) => setParticipantInput(e.target.value)}
                  placeholder="example@email.com"
                  type="email"
                />
                <Button
                  type="button"
                  onClick={handleAddParticipant}
                  variant="outline"
                  disabled={!participantInput?.includes('@')}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {participants.map((email) => (
                  <div key={email} className="inline-flex items-center bg-[#e6f1ff] dark:bg-gray-700 px-3 py-1 rounded-full">
                    <span className="text-sm text-[#1a73e8] dark:text-[#4285f4] mr-1">{email}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveParticipant(email)}
                      className="text-[#1a73e8] dark:text-[#4285f4] hover:text-red-500 dark:hover:text-red-400"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              className="w-full btn-primary"
              onClick={handleScheduleMeeting}
              disabled={!selectedDate || !selectedTimeSlot || !meetingTitle}
            >
              Schedule Meeting
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="text-center mb-6">
            <h3 className="text-xl font-medium mb-2 font-google-sans text-[#3a485d] dark:text-white">
              Meeting Scheduled Successfully!
            </h3>
            <p className="text-[#5f6368] dark:text-gray-300">
              Your meeting has been scheduled. Here are the details:
            </p>
          </div>

          <div className="border border-[#dadce0] dark:border-gray-700 rounded-lg p-4 mb-6">
            <div className="mb-4">
              <h4 className="text-lg font-medium font-google-sans text-[#3a485d] dark:text-white mb-2">
                {meetingDetails?.title}
              </h4>
              <p className="text-[#5f6368] dark:text-gray-400 text-sm whitespace-pre-line">
                {meetingDetails?.description || "No description provided."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-[#5f6368] dark:text-gray-400">Date:</p>
                <p className="font-medium">
                  {selectedDate ? formatDate(selectedDate) : ""}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#5f6368] dark:text-gray-400">Time:</p>
                <p className="font-medium">
                  {selectedTimeSlot?.formatted}
                </p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-[#5f6368] dark:text-gray-400">Meeting Code:</p>
              <p className="font-medium font-mono bg-[#f1f3f4] dark:bg-gray-700 p-2 rounded inline-block">
                {meetingCode}
              </p>
            </div>

            {participants.length > 0 && (
              <div>
                <p className="text-sm text-[#5f6368] dark:text-gray-400 mb-1">Participants:</p>
                <div className="flex flex-wrap gap-2">
                  {participants.map((email) => (
                    <div key={email} className="inline-flex items-center bg-[#e6f1ff] dark:bg-gray-700 px-3 py-1 rounded-full">
                      <span className="text-sm text-[#1a73e8] dark:text-[#4285f4]">{email}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-[#3a485d] dark:text-white">Add to calendar:</h4>
            <div className="flex flex-wrap gap-3">
              {meetingDetails && (
                <>
                  <a
                    href={createGoogleCalendarURL(meetingDetails)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#1a73e8] dark:text-[#4285f4] hover:underline"
                  >
                    <span>Google Calendar</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <a
                    href={createOutlookCalendarURL(meetingDetails)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#1a73e8] dark:text-[#4285f4] hover:underline"
                  >
                    <span>Outlook Calendar</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </>
              )}
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <Button
              variant="outline"
              onClick={handleReset}
            >
              Schedule Another Meeting
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
