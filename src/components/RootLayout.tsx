import { ReactNode } from 'react'
import Sidebar from './Sidebar'

interface Props {
  children: ReactNode
}
export const RootLayout = ({ children }: Props) => {
  return (
    <div className='flex bg-white'>
      {/* <div className='w-fit z-50 fixed'>
        <img
          className="object-cover object-center h-screen"
          src="/images/sidebar.png"
          alt="sidebar"
        />
      </div> */}
      <Sidebar />
      <div className='w-full pl-14 bg-background pb-64'>
        {children}
      </div>
    </div>
  )
}
