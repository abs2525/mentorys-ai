export default function BrainLogo({ size = 40 }: { size?: number }) {
  const c = "#E8491D";
  const sw = 2;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer brain silhouette */}
      <path
        d="M50 8 L68 16 L78 30 L78 48 L68 62 L55 70 L50 72 L45 70 L32 62 L22 48 L22 30 L32 16 Z"
        stroke={c} strokeWidth={sw + 0.5} strokeLinejoin="round" fill="none"
      />
      {/* Center vertical line */}
      <line x1="50" y1="8" x2="50" y2="72" stroke={c} strokeWidth={sw * 0.7} />
      {/* Internal triangulation */}
      <line x1="32" y1="16" x2="50" y2="36" stroke={c} strokeWidth={sw * 0.7} />
      <line x1="68" y1="16" x2="50" y2="36" stroke={c} strokeWidth={sw * 0.7} />
      <line x1="22" y1="39" x2="50" y2="36" stroke={c} strokeWidth={sw * 0.7} />
      <line x1="78" y1="39" x2="50" y2="36" stroke={c} strokeWidth={sw * 0.7} />
      <line x1="50" y1="36" x2="50" y2="55" stroke={c} strokeWidth={sw * 0.7} />
      <line x1="22" y1="48" x2="50" y2="55" stroke={c} strokeWidth={sw * 0.7} />
      <line x1="78" y1="48" x2="50" y2="55" stroke={c} strokeWidth={sw * 0.7} />
      <line x1="32" y1="62" x2="50" y2="55" stroke={c} strokeWidth={sw * 0.7} />
      <line x1="68" y1="62" x2="50" y2="55" stroke={c} strokeWidth={sw * 0.7} />
      {/* Stem */}
      <line x1="43" y1="72" x2="43" y2="82" stroke={c} strokeWidth={sw + 0.5} />
      <line x1="57" y1="72" x2="57" y2="82" stroke={c} strokeWidth={sw + 0.5} />
      <line x1="41" y1="82" x2="59" y2="82" stroke={c} strokeWidth={sw + 0.5} />
    </svg>
  );
}
