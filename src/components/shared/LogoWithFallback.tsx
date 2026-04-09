import { useState } from 'react';

interface LogoWithFallbackProps {
  src?: string;
  alt: string;
  size?: 'sm' | 'md';
}

export default function LogoWithFallback({ src, alt, size = 'md' }: LogoWithFallbackProps) {
  const [error, setError] = useState(false);

  const initials = alt
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, size === 'sm' ? 1 : 2)
    .toUpperCase();

  const sizeClasses = size === 'sm' ? 'h-5 w-5 text-[8px]' : 'h-8 w-8 text-xs';
  const roundClasses = size === 'sm' ? 'rounded' : 'rounded-lg';

  if (!src || error) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center font-bold ${sizeClasses} ${roundClasses}`}
        style={{
          background: 'linear-gradient(135deg, rgba(var(--particle-primary), 0.15), rgba(var(--particle-secondary), 0.15))',
          color: size === 'sm' ? 'var(--text-3)' : 'var(--text-2)',
          border: '1px solid var(--border)',
        }}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={`shrink-0 object-cover ${sizeClasses} ${roundClasses}`}
      style={{ border: '1px solid var(--border)' }}
    />
  );
}
