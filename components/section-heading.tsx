import React from 'react';

type SectionHeaddingProps = {
  children: React.ReactNode
}

export default function SectionHeadding({ children }: SectionHeaddingProps) {
  return (
    <h2 className='text-3xl font-medium capitalize mb-8 text-center'>
      {children}
    </h2>
  )
}