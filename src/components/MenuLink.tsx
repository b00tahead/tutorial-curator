import Link from 'next/link'

export default function MenuLink({
  url,
  children,
}: {
  url: string
  children: JSX.Element | string
}) {
  return (
    <li>
      <Link className="hover:underline hover:text-emerald-400" href={url}>
        {children}
      </Link>
    </li>
  )
}
