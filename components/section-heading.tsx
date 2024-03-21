import React from 'react';

type SecondHeaddingProps = {
  children: React.ReactNode
}

export default function SecondHeadding({ children }: SecondHeaddingProps) {
  return (
    <h2 className='text-3xl font-medium capitalize mb-8 text-center'>
      {children}
    </h2>
  )
}