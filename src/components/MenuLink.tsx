import Link from 'next/link'

export default function MenuLink({
  url,
  size,
  children,
}: {
  url: string
  size: 'sm' | 'md'
  children: JSX.Element | string
}) {
  return (
    <li>
      <Link
        className={`text-${size} hover:underline hover:text-emerald-400`}
        href={url}
      >
        {children}
      </Link>
    </li>
  )
}
