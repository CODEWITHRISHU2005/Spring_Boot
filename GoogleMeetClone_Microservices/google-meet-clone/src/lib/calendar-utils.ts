"use client";

export interface TimeSlot {
  start: Date;
  end: Date;
  formatted: string;
}

export interface MeetingDetails {
  title: string;
  description: string;
  date: Date;
  timeSlot: TimeSlot;
  participants: string[];
  meetingCode: string;
}

// Generate time slots for a specific date
export function generateTimeSlots(date: Date, intervalMinutes = 30): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const startHour = 8; // 8 AM
  const endHour = 20; // 8 PM

  const startDate = new Date(date);
  startDate.setHours(startHour, 0, 0, 0);

  const endDate = new Date(date);
  endDate.setHours(endHour, 0, 0, 0);

  const currentSlot = new Date(startDate);

  while (currentSlot < endDate) {
    const startTime = new Date(currentSlot);

    currentSlot.setMinutes(currentSlot.getMinutes() + intervalMinutes);

    const endTime = new Date(currentSlot);

    slots.push({
      start: startTime,
      end: endTime,
      formatted: `${formatTime(startTime)} - ${formatTime(endTime)}`
    });
  }

  return slots;
}

// Format time as "10:30 AM"
export function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
}

// Format date as "Monday, May 5, 2025"
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Generate a random meeting code
export function generateMeetingCode(): string {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let code = '';

  // First segment (3 chars)
  for (let i = 0; i < 3; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  code += '-';

  // Second segment (4 chars)
  for (let i = 0; i < 4; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  code += '-';

  // Third segment (3 chars)
  for (let i = 0; i < 3; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return code;
}

// Create Google Calendar URL for event
export function createGoogleCalendarURL(meeting: MeetingDetails): string {
  const startTime = meeting.timeSlot.start.toISOString().replace(/-|:|\.\d+/g, '');
  const endTime = meeting.timeSlot.end.toISOString().replace(/-|:|\.\d+/g, '');

  const baseUrl = 'https://calendar.google.com/calendar/render';

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: meeting.title,
    details: `${meeting.description}\n\nJoin with code: ${meeting.meetingCode}\nOr join directly: https://meet.google.com/${meeting.meetingCode}`,
    dates: `${startTime}/${endTime}`,
    add: meeting.participants.join(',')
  });

  return `${baseUrl}?${params.toString()}`;
}

// Create Outlook Calendar URL for event
export function createOutlookCalendarURL(meeting: MeetingDetails): string {
  const startTime = meeting.timeSlot.start.toISOString();
  const endTime = meeting.timeSlot.end.toISOString();

  const baseUrl = 'https://outlook.office.com/calendar/0/deeplink/compose';

  const params = new URLSearchParams({
    subject: meeting.title,
    body: `${meeting.description}\n\nJoin with code: ${meeting.meetingCode}\nOr join directly: https://meet.google.com/${meeting.meetingCode}`,
    startdt: startTime,
    enddt: endTime,
    to: meeting.participants.join(';')
  });

  return `${baseUrl}?${params.toString()}`;
}
