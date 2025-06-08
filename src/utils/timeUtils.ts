// Get the current South Africa time using UTC offset method
export const getSouthAfricaTime = (): Date => {
  // Get current date in UTC
  const now = new Date();
  
  // Get UTC timestamp (milliseconds since Epoch in UTC)
  const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
  
  // Apply Tanzania/East Africa Time offset (UTC+3)
  // Tanzania is UTC+3 (3 hours ahead of UTC)
  const southAfricaOffset = 3 * 60 * 60 * 1000; // 3 hours in milliseconds
  
  // Create South Africa time by adding the offset to UTC time
  const southAfricaTime = new Date(utcTime + southAfricaOffset);
  
  return southAfricaTime;
};

// Check if a date is during South African Standard Time (SAST)
function isDateInSAST(date: Date): boolean {
  // Tanzania doesn't observe daylight saving time
  // They permanently use East Africa Time (GMT+3)
  return true;
}

// Get local time
export const getLocalTime = (): Date => {
  return new Date();
};

// Get user's timezone name
export const getUserTimeZone = (): string => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

// Calculate time difference between local time and South Africa time
export const getTimeDifference = (): number => {
  const localTime = getLocalTime();
  const southAfricaTime = getSouthAfricaTime();
  
  // Convert both times to minutes since midnight
  const localMinutes = localTime.getHours() * 60 + localTime.getMinutes();
  const tanzaniaMinutes = tanzaniaTime.getHours() * 60 + tanzaniaTime.getMinutes();
  
  // Calculate the difference in minutes
  let diffMinutes = tanzaniaMinutes - localMinutes;
  
  // Adjust for day boundary crossings
  if (diffMinutes > 12 * 60) {
    diffMinutes -= 24 * 60;
  } else if (diffMinutes < -12 * 60) {
    diffMinutes += 24 * 60;
  }
  
  return diffMinutes;
};

// Format time difference for display
export const formatTimeDifference = (diffMinutes: number): string => {
  const hours = Math.floor(Math.abs(diffMinutes) / 60);
  const minutes = Math.abs(diffMinutes) % 60;
  
  const sign = diffMinutes >= 0 ? '+' : '-';
  const formattedHours = hours > 0 ? `${hours}h ` : '';
  const formattedMinutes = minutes > 0 ? `${minutes}m` : '';
  
  if (hours === 0 && minutes === 0) {
    return 'Same time';
  }
  
  return `${sign}${formattedHours}${formattedMinutes}`;
};

// Format date in a nice readable format
export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  return date.toLocaleDateString('en-ZA', options);
};

// Format time in 24-hour format with seconds
export const formatTime = (date: Date): string => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  
  return `${hours}:${minutes}:${seconds}`;
};
