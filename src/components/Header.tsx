import { Bars3Icon } from '@heroicons/react/16/solid'
import MenuLink from './MenuLink'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between border-b">
      <div className="p-8">
        <Link href="/" className="hover:underline hover:text-emerald-400">
          <h1 className="text-2xl">Code Tuts</h1>
        </Link>
      </div>
      <div className="p-8 border-s flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="size-6 text-white hover:text-emerald-400" />
        </button>
      </div>
      <div className="hidden p-8 lg:flex lg:border-0">
        <nav className="flex items-center">
          <ul className="flex gap-x-8 items-center">
            <MenuLink url="/">Home</MenuLink>
            <MenuLink url="/tutorials">Tutorials</MenuLink>
            <MenuLink url="/about">About</MenuLink>
          </ul>
        </nav>
      </div>
    </header>
  )
}
