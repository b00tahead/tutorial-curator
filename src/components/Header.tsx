'use client'

import { Bars3Icon } from '@heroicons/react/16/solid'
import MenuLink from './MenuLink'
import Link from 'next/link'
import { useState } from 'react'
import Menu from './Menu'

export default function Header() {
  const [showPopDownMenu, setShowPopDownMenu] = useState(false)
  return (
    <header>
      <div className="flex justify-between border-b border-dotted">
        <div className="p-8">
          <Link href="/" className="hover:underline hover:text-emerald-400">
            <h1 className="text-2xl">Code Tuts</h1>
          </Link>
        </div>
        <div className="p-8 border-s border-dotted flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setShowPopDownMenu(!showPopDownMenu)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="size-6 text-white hover:text-emerald-400" />
          </button>
        </div>
        <Menu menuType="desktop" />
      </div>
      {showPopDownMenu && <Menu menuType="mobile" />}
    </header>
  )
}
