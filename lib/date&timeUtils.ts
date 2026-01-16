import { format } from "date-fns";

export const conver12HourSlotTo24Hour = (slot: string) => {
    const [time, meridiem] = slot.split(' ');
    const [hoursStr, minutesStr] = time.split(':');
    let hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);
    if (meridiem === 'PM' && hours !== 12) {
        hours += 12;
    }

    const slot24 = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`

    return {
        slot: slot24,
        hours,
        minutes
    };
};

/**
 * Calculates the relative time from a given ISO timestamp.
 * Returns formats like "15s ago", "14m ago", "1h ago", 
 * or the date itself if older than 24 hours.
 */
export const getRelativeTime = (timestamp: string): string => {

    const now = new Date();
    const past = new Date(timestamp);

    // Calculate difference in seconds
    const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

    // If the timestamp is in the future or less than 1 second
    if (diffInSeconds < 1) return 'just now';

    // Less than 60 seconds
    if (diffInSeconds < 60) {
        return `${diffInSeconds}s ago`;
    }

    // Less than 60 minutes
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return `${diffInMinutes}m ago`;
    }

    // Less than 24 hours
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return `${diffInHours}h ago`;
    }

    // Above 24 hours: Return the date itself
    // You can use .toLocaleDateString() for a cleaner format
    return format(past, 'dd-MM-yyyy');
};

// Example Usage:
// console.log(getRelativeTime("2026-01-11T10:52:28.079Z"));