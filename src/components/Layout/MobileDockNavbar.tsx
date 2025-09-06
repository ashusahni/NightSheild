'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  IconHome2,
  IconStars,
  IconBuildingSkyscraper,
  IconInfoCircle,
  IconCurrencyDollar,
} from '@tabler/icons-react'

type DockItem = {
  name: string
  href: string
  Icon: React.ComponentType<{ size?: number; className?: string }>
}

const items: DockItem[] = [
  { name: 'Home', href: '/', Icon: IconHome2 },
  { name: 'Features', href: '/features', Icon: IconStars },
  { name: 'Industries', href: '/industries', Icon: IconBuildingSkyscraper },
  { name: 'About', href: '/about', Icon: IconInfoCircle },
  { name: 'Pricing', href: '/pricing', Icon: IconCurrencyDollar },
]

const MobileDockNavbar = () => {
  const pathname = usePathname()

  return (
    <div className="fixed inset-x-0 bottom-4 z-[90] px-4 lg:hidden">
      <nav className="mx-auto max-w-md">
        <div className="flex items-center justify-between rounded-2xl border border-red-500/20 bg-black/80 px-3 py-2 backdrop-blur-xl shadow-[0_0_24px_rgba(239,_68,_68,_0.15),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(239,_68,_68,_0.1),_0_0_4px_rgba(239,_68,_68,_0.1),_0_16px_68px_rgba(0,_0,_0,_0.3),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
          {items.map(({ name, href, Icon }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <Link
                key={name}
                href={href}
                aria-label={name}
                className={cn(
                  'group flex flex-col items-center justify-center gap-1 rounded-xl px-3 py-2 text-xs font-medium transition-colors duration-200',
                  isActive ? 'text-white' : 'text-white/70 hover:text-white'
                )}
              >
                <Icon
                  size={22}
                  className={cn(
                    'transition-colors duration-200',
                    isActive ? 'text-red-400' : 'text-white/80 group-hover:text-red-400'
                  )}
                />
                <span className="leading-none">{name}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export default MobileDockNavbar


