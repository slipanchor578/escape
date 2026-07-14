import React from 'react';
import Link from 'next/link';

export default function PaginationLink({ href, children }: Readonly<{ href: string, children: React.ReactNode }>) {
  return (
    <Link href={href}
      className="px-2.5 py-1 rounded-sm bg-[#f0f0f0] hover:text-(--primary-color)"
    >
      { children }
    </Link>
  )
}
