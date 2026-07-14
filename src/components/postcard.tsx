import React from 'react';

export default function PostCard({ children }: Readonly<{ children: React.ReactNode}>) {
  return (
    <article className="
      bg-white rounded-lg overflow-hidden 
      box-shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] 
      mb-7.5 border-b border-(--border-color)
    ">
      { children }
    </article>
  )
}
