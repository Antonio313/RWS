interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mt-6 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
}
