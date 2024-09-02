import MenuLink from './MenuLink'

export default function Menu({ menuType }: { menuType: 'mobile' | 'desktop' }) {
  const isDesktop = menuType === 'desktop'

  const menuClasses = isDesktop
    ? 'hidden p-8 lg:flex lg:border-0'
    : 'p-8 border-b border-dotted lg:hidden'

  const navClasses = isDesktop ? 'flex items-center' : 'flex justify-center'

  const ulClasses = isDesktop
    ? 'flex gap-x-8 items-center'
    : 'flex flex-col gap-y-8 items-center'

  return (
    <div className={menuClasses}>
      <nav className={navClasses}>
        <ul className={ulClasses}>
          <MenuLink size={isDesktop ? 'sm' : 'md'} url="/">
            Home
          </MenuLink>
          <MenuLink size={isDesktop ? 'sm' : 'md'} url="/tutorials">
            Tutorials
          </MenuLink>
          <MenuLink size={isDesktop ? 'sm' : 'md'} url="/about">
            About
          </MenuLink>
        </ul>
      </nav>
    </div>
  )
}
