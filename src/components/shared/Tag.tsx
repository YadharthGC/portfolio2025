import { useTheme } from '../../lib/theme';

interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <span
      className="rounded-full px-2.5 py-1 text-xs font-medium"
      style={{
        background: `rgba(var(--particle-primary), ${isDark ? 0.08 : 0.1})`,
        color: 'var(--color-primary)',
        border: `1px solid rgba(var(--particle-primary), ${isDark ? 0.15 : 0.2})`,
      }}
    >
      {label}
    </span>
  );
}
