import React from 'react';
import Link from 'next/link';

export default function PaginationLink({
  href,
  children,
}: Readonly<{ href: string; children: React.ReactNode }>) {
  return (
    <Link href={href} className="rounded-sm px-2.5 py-1 hover:text-[#ea8355]">
      {children}
    </Link>
  );
}
