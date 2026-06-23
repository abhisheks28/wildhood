import Image from 'next/image';

interface GenerateImageProps {
  prompt: string;
  alt: string;
  fill?: boolean;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  src?: string; // Support dynamic override
}

/**
 * Enhanced GenerateImage component to render actual high-definition photography
 * from Unsplash or team photos based on prompt keywords, or direct URL source.
 */
export function GenerateImage({
  prompt,
  alt,
  fill,
  className,
  width,
  height,
  priority = false,
  src,
}: GenerateImageProps) {
  // Determine the best URL based on src, prompt, and keywords
  let imageUrl = src || '';

  if (!imageUrl && prompt) {
    const trimmed = prompt.trim();
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      imageUrl = trimmed;
    } else {
      // Map keywords to gorgeous specific Unsplash pictures
      const promptLower = trimmed.toLowerCase();
      if (promptLower.includes('alex')) {
        imageUrl = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop';
      } else if (promptLower.includes('jamie')) {
        imageUrl = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop';
      } else if (promptLower.includes('taylor')) {
        imageUrl = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop';
      } else if (promptLower.includes('morgan')) {
        imageUrl = 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&h=500&fit=crop';
      } else if (promptLower.includes('wildlife photographer') || promptLower.includes('team')) {
        imageUrl = 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&h=800&fit=crop';
      } else {
        // Fallback default photography placeholder
        imageUrl = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop';
      }
    }
  }

  // Handle case where imageUrl is still blank
  if (!imageUrl) {
    imageUrl = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop';
  }

  if (fill) {
    return (
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    );
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width || 400}
      height={height || 300}
      className={className}
      priority={priority}
    />
  );
}
