interface DeciferMarkProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function DeciferMark({
  size = "md",
  className = "",
}: DeciferMarkProps) {
  const sizes = {
    sm: "text-sm tracking-[0.14em]",
    md: "text-lg tracking-[0.14em]",
    lg: "text-3xl tracking-[0.12em]",
  };

  return (
    <span className={`inline-flex items-center font-bold ${sizes[size]} ${className}`}>
      <span className="mr-[0.2em] text-brand opacity-90">&#8249;</span>
      <span className="text-ink">DECIFER</span>
      <span className="ml-[0.2em] text-learn opacity-90">&#8250;</span>
    </span>
  );
}
