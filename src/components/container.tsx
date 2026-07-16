import React from 'react';

export default function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mx-auto w-full max-w-(--max-width) px-5">{children}</div>
  );
}
