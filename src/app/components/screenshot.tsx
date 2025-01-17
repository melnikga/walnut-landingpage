import { clsx } from 'clsx'

export function Screenshot({
  src,
  className,
}: {
  width: number
  height: number
  src: string
  className?: string
}) {
  return (
    <div
      className={clsx(
        className,
        'relative aspect-[var(--width)/var(--height)] [--radius:theme(borderRadius.xl)]',
      )}
    >
      <div className="absolute -inset-[var(--padding)] rounded-[calc(var(--radius)+var(--padding))] shadow-sm ring-1 ring-black/5 [--padding:theme(spacing.2)]" />
      <img
        alt=""
        src={src}
        className="h-full w-full object-cover object-top rounded-[var(--radius)] shadow-2xl ring-1 ring-black/10"
      />
    </div>
  )
}
