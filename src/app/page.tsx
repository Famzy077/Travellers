import React from 'react'
import { redirect } from 'next/navigation';
interface PageProps {
  children: React.ReactNode;
}

const page: React.FC<PageProps> = ({ children }) => {
  redirect('/home');
  return (
    <div>
      {children}
    </div>
  )
}

export default page
