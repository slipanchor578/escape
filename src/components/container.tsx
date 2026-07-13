import React from 'react';

export default function Container({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="w-full max-w-(--max-width) mx-auto px-5">{ children }</div>
    )
}