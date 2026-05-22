type Props = {
  className?: string
}

export default function PlaceholderImage({ className = '' }: Props) {
  return (
    <div
      className={`bg-warm-grey ${className}`}
      aria-hidden="true"
    />
  )
}
