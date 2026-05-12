interface Props {
  index: string;
  title: string;
}

export function SectionLabel({ index, title }: Props) {
  return (
    <div className="mb-12 flex items-baseline justify-between border-b border-hairline pb-6">
      <div className="flex items-baseline gap-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {index}
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.25em]">
          {title}
        </span>
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        ◍
      </span>
    </div>
  );
}
