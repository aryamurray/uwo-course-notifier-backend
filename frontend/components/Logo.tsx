import React from 'react'
import { School } from 'lucide-react'

type LogoProps = {}

const Logo = (props: LogoProps) => {
  return (
    <div className='flex items-center space-x-4 lg:space-x-6'>
        <School size={36}/>
        <h1 className='content-center'>Western Course Notifier</h1>
    </div>
  )
}

export default Logo