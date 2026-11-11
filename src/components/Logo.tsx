import Image from 'next/image';

type LogoProps = {
  className?: string;
};

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Image
      src="/logo.webp"
      alt="Hysad Tech"
      width={64}
      height={64}
      priority
      className={`object-contain ${className}`.trim()}
    />
  );
}
