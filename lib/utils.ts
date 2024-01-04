import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getEmbeddedYouTubeLink(inputLink: string) {
  const videoIdRegex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})(?:\S+)?/;

  const match = inputLink.match(videoIdRegex);

  if (match && match[1]) {
    const videoId = match[1];
    return `https://www.youtube.com/embed/${videoId}`;
  } else {
    // If the input link doesn't match the expected format
    return 'Invalid YouTube link';
  }
}
